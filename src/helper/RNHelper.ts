import { IApiMainSection, IApiSection } from "../types/apiOperationTypes";
import { IBasicProject, IBasicSection } from "../types/basicOperationTypes";
import { FileHelper } from "./fileHelper";
import path from 'path';
import BlendRNGrammarHelper from "./grammarHelper/BlendRNGrammarHelper";
import { IFrontEndScreen, IRNComponent, IRNLayout, IRNModule, IRNScreen, IRNSection } from "../types/frontendOperationTypes";

const { execSync } = require('child_process');

const runCommand = (command, cwd = process.cwd()) => {
    try {
        execSync(command, { stdio: 'inherit', cwd });
    } catch (error) {
        console.error(`Failed to execute command: ${command}`);
        process.exit(1);
    }
};

export default class RNHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    basicProjectContent: IBasicProject;

    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.basicProjectContent = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`) || "{}");
    }

    doRNOperations() {
        this.createRNSpec();
        this.parseSpec();
    }

    doRNGenerations() {
        this.buildComponents();
        this.buildScreens();
    }

    createRNSpec() {
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name.trim();
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const rnFolderPath = path.join(sectionFolderPath, 'frontend');
            section.rnModuleList.forEach(dataModule => {
                const dataFilePath = path.join(rnFolderPath, `${dataModule.name}.rn`);
                if (!FileHelper.exists(dataFilePath)) {
                    FileHelper.writeFile(dataFilePath, `module ${dataModule.name}`);
                }
            });
        });
    }



    parseScreenList(input: string): IFrontEndScreen[] {
        const screenRegex = /screen (.+?) under "(.+?)"/g;
        const screens: IFrontEndScreen[] = [];
        let match;

        while ((match = screenRegex.exec(input)) !== null) {
            const screenNames = match[1].split(",").map(name => name.trim());
            const path = match[2];
            screens.push(...screenNames.map(name => ({ name, path })));
        }

        if (screens.length === 0) {
            throw new Error("Invalid screen syntax or no screens found.");
        }

        return screens;
    }

    parseLayouts(input: string): IRNLayout[] {
        const layoutRegex = /layout (\w+)\("(.+?)"\) type\("(.+?)"\) {([\s\S]*?)}(?!\s*\})/g;
        const pageRegex = /page (\w+)\("(.+?)"\) view\((\w+)\)/g;

        const layouts: IRNLayout[] = [];
        const processedPages: Set<string> = new Set(); // Track pages to avoid duplicates
        let match;

        while ((match = layoutRegex.exec(input)) !== null) {
            const [_, name, route, type, content] = match;
            const children: IRNLayout["children"] = [];

            // Parse nested layouts first and collect pages from them
            const nestedLayouts = this.parseLayouts(content);
            const nestedPages: Set<string> = new Set();
            // console.log(nestedLayouts,"Nested layouts")

            for (const nested of nestedLayouts) {
                children.push(nested); // Add the nested layout
                // nested.children.forEach((child) => {
                //     if (child.element) {
                //         nestedPages.add(child.element);
                //     }
                // });    
            }

            // Parse pages in the current layout and check for duplicates
            console.log(this.removeLayoutSection(content), `pages for section ${name}`)
            const pagecontent = this.removeLayoutSection(content);
            let pageMatch;
            while ((pageMatch = pageRegex.exec(pagecontent)) !== null) {
                const [__, pageName, pageRoute, viewName] = pageMatch;

                // Only add the page if it hasn't been added already (either in nested layouts or previous iterations)
                if (!nestedPages.has(pageName) && !processedPages.has(pageName)) {
                    children.push({
                        element: viewName,
                        name: pageName,
                        route: pageRoute,
                        parentLayout: name
                    });
                    processedPages.add(pageName); // Mark as processed
                }
                nestedPages.delete(pageName)
            }
            nestedPages.clear();

            // Add the layout to the final list
            layouts.push({
                name,
                route,
                type,
                children,
            });
        }

        return layouts;
    }

    removeLayoutSection(spec) {
        // Regular expression to match the layout section
        const layoutRegex = /layout\s+\w+\(".*?"\)\s+type\(".*?"\)\s*{[^}]*}/;
        return spec.replace(layoutRegex, "").trim();
    }




    parseSpec() {
        const sectionRnList: IRNSection[] = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name.trim();
            let screenList: IFrontEndScreen[] = [];
            let layout: IRNLayout[] = [];
            let projectName = "";
            const sectionObj: IRNSection = {
                name: sectionName,
                rnModuleList: [],
            };
            section.rnModuleList.forEach(rnModule => {
                const rnFilePath = path.join(this.folderPath, `spec/${sectionName}/frontend/${rnModule.name}.rn`);
                const specCode = FileHelper.readFile(rnFilePath);
                const rnHelper = new BlendRNGrammarHelper();
                const json = rnHelper.parseBlendRN(specCode);
                if(!json.valid) {
                    throw new Error("Error while parsing the react native screens");
                } else {
                    sectionObj.rnModuleList.push(json.json);
                }

                // Parse screenList and layout from the spec file
                // screenList = this.parseScreenList(specCode);
                // layout = this.parseLayouts(specCode);
                // projectName = rnModule.name;
            });

            
            sectionRnList.push(sectionObj);
        });

        // Write the generated configuration to a file
        FileHelper.writeFile(`${this.configPath}/rnConfig.json`, JSON.stringify(sectionRnList, null, 4));
    }



    //Generate


    buildScreens() {
        const rnSectionList: IRNSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/rnConfig.json`));
        console.log(rnSectionList, "rnSectionList")
        rnSectionList.forEach(rnSection => {
            const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);

            rnSection.rnModuleList.forEach(rnModule => {
                // this.checkForFolderAndCreateReactNativeApp(rnFolderPath, rnModule.name).then(res => {
                this.buildLayouts(rnSection, rnModule);
                const rnProjectPath = path.join(rnFolderPath, rnModule.name);
                rnModule.screenList.forEach(screen => {
                    const screenPath = `${rnProjectPath}/src/view/${screen.path}/`;
                    const screenCode = this.generateScreenCode(screen);
                    FileHelper.createFile(`${screenPath}${screen.name}.tsx`, screenCode
                    )
                });

                // })


            })
        })
    }

    buildComponents() {
            const reactSectionList: IRNSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/rnConfig.json`));
            reactSectionList.forEach(reactSection => {
                const reactFolderPath = path.join(this.folderPath, `module/${reactSection.name}/react-native`);
    
                reactSection.rnModuleList.forEach(reactModule => {
                    this.buildLayouts(reactSection, reactModule);
                    const rnProjectPath = path.join(reactFolderPath, reactModule.name);
                    const mdpHookComponentPath = `${rnProjectPath}/src-gen/component/mdpHook.ts`;
                    const mdpPath = `${rnProjectPath}/src-gen/component/MDP.ts`;
                    const mdpHookCode = this.generateMDPHookCode(reactModule.componentList);
                    FileHelper.writeFile(`${mdpHookComponentPath}`, mdpHookCode);
                    FileHelper.writeFile(`${mdpPath}`, `export interface MDP {getMetaData:() => any;}\nexport interface IBasicComponent {value?: any;onInput?:(val: any) => any;}`);
                    reactModule.componentList.forEach(component => {
                        const componentPath = `${rnProjectPath}/src/component/${component.path}/`;
                        const componentCode = this.generateComponentCode(component);
                        const mdpCode = this.generateComponentMDPCode(component);
                        FileHelper.createFile(`${componentPath}/${component.name}/${component.name}.tsx`, componentCode);
                        FileHelper.createFile(`${componentPath}/${component.name}/${component.name}MDP.ts`, mdpCode);
                        FileHelper.createFile(`${componentPath}/${component.name}/index.ts`, `export {default} from './${component.name}';\nexport * from "./${component.name}MDP";`);
    
                    });
                })
            })
        }
        generateMDPHookCode(componentList: IRNComponent[]) {
            const importsCode = `
            ${componentList.reduce((acc, component) => {
                acc = acc + `import ${component.name} from '../../src/component/${component.path}/${component.name}';\n`
                return acc;
            }, "")}`
            return `
            import React, { useEffect, useState } from "react"
            import { MDP } from "./MDP";
            ${importsCode}
            
    
    export const useMetaData: (props: { mdpClass: MDP, defaultInput?: any; onInput?: (val: any) => void; extraProps?: any }) => [element: React.ReactElement, input: any, setInput: any] = (props) => {
        console.log(props.defaultInput, props.mdpClass, "defaultInput")
        const [input, setInput] = useState(props.defaultInput);
    
    
    
    
        return [generateElementFromMetaData({
            componentClassMetaData: props.mdpClass.getMetaData(),
            onInput: (val: any) => {
                setInput(val);
                props.onInput && props.onInput(val)
            },
            value: input,
            extraProps: props.extraProps
        }), input, setInput]
    }
    
    
    export const generateElementFromMetaData = ({ componentClassMetaData, value, onInput, extraProps }: {
        componentClassMetaData: any;
        value?: any;
        onInput?: any;
        extraProps?: object;
    }) => {
        return React.createElement((ComponentNameMap[componentClassMetaData.componentName] as any), {
            ...componentClassMetaData.props,
            value: value,
            onInput: onInput,
            ...extraProps
        })
    }
    
    
    const ComponentNameMap: any = {
        ${componentList.reduce((acc, component) => {
                acc = acc + `"${component.name}": ${component.name},\n`
                return acc;
            }, "")}
    }
    
    export interface IMetaDataHook {
        element: React.ReactElement,
        input?: any;
    }
            
            `;
    
        }

    checkForFolderAndCreateReactNativeApp() {
        return new Promise(async (checkRes) => {
            const rnSectionList: IRNSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/rnConfig.json`));
            const promises: Promise<void>[] = [];
            rnSectionList.forEach(rnSection => {
                const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);
                FileHelper.ensureDir(rnFolderPath);

                rnSection.rnModuleList.forEach(rnModule => {
                    const modulePath = path.join(rnFolderPath, rnModule.name);
                    if (!FileHelper.exists(modulePath)) {
                        promises.push(new Promise(res => {
                            runCommand(`npx @react-native-community/cli@latest init ${rnModule.name} --version 0.78.0`, rnFolderPath) ;
                            runCommand(`npm install -D @tsconfig/react-native@3.0.5 @types/jest@29.5.14 @types/react@19.0.10 @types/react-test-renderer@19.0.0 typescript@5.0.4`, modulePath);

                            const dependencies = [
                                '@react-navigation/bottom-tabs@7.2.1',
                                '@react-navigation/drawer@7.1.2',
                                '@react-navigation/material-top-tabs@7.1.1',
                                '@react-navigation/native@7.0.15',
                                '@react-navigation/native-stack@7.2.1',
                                '@reduxjs/toolkit@2.6.0',
                                'react-native-gesture-handler@2.24.0',
                                'react-native-pager-view@6.7.0',
                                'react-native-reanimated@3.17.1',
                                'react-native-safe-area-context@5.3.0',
                                'react-native-screens@4.9.1',
                                'react-redux@9.2.0',
                                'redux-saga@1.3.0',
                                "axios@1.8.1",
                                "react-native-dotenv@3.4.11"
                              ];
                              runCommand(`npm install ${dependencies.join(' ')}`, modulePath);
                              FileHelper.writeFile(`${modulePath}/tsconfig.json`,`{
                                "extends": "@tsconfig/react-native/tsconfig.json"
                                }`);

                                FileHelper.writeFile(`${modulePath}/App.tsx`,mainAppcode)
                                FileHelper.writeFile(`${modulePath}/babel.config.js`,`module.exports = {
                                    presets: ['module:@react-native/babel-preset'],
                                    plugins: [
                                      ['module:react-native-dotenv']
                                    ]
                                  };`)

                                  FileHelper.writeFile(`${modulePath}/.env.dev`,"")
                                  FileHelper.writeFile(`${modulePath}/.env.prod`,"")
                                  FileHelper.writeFile(`${modulePath}/env.d.ts`,`
                                    declare module '@env' {
                                    export const API_URL: string;
                                    export const APP_ENV: string;
                                  }`)
                                  
                                
                            
                        }))
                    }
                })
            })
            await Promise.all(promises);
            checkRes(true)

        })

        // return new Promise(res => {
        //     const modulePath = path.join(rnProjectPath, projectName);
        //     if(!FileHelper.exists(modulePath)) {
        //         runCommand(`npx @react-native-community/cli@latest init ${projectName}`,rnProjectPath);
        //         res(true);
        //     } else {
        //         res(true)
        //     }
        // });


    }
    buildLayouts(rnSection: IRNSection, rnModule: IRNModule) {
        const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);
        // const path = `${projectPath}/frontend/${frontEnd.name}/src/layout`;
        const rnLayoutPath = path.join(rnFolderPath, rnModule.name);
        // rnModule.layout.forEach(lo => {
        const lo: IRNLayout = {
            name: "BlendGenerated",
            route: "/",
            children: rnModule.layout,
            type: "Stack",
        }
        this.traverseChildrenAndCreateLayout(rnLayoutPath, lo, rnModule);
        FileHelper.createFile(`${rnLayoutPath}/src/layout/${lo.name}Layout.tsx`, `
${this.generateLayoutCode(lo, rnModule)}
`)

        FileHelper.writeFile(`${rnLayoutPath}/src-gen/router/config/${lo.name}LayoutConfig.tsx`, `
    ${this.generateLayoutCodeInterface(lo)}
    `)
        // })
    }


    traverseChildrenAndCreateLayout(rnLayoutPath: string, lo: IRNLayout, frontEnd: IRNModule) {
        lo.children.forEach(loChild => {
            if (loChild.children) {
                FileHelper.createFile(`${rnLayoutPath}/src/layout/${loChild.name}Layout.tsx`, `
${this.generateLayoutCode(loChild, frontEnd)}
`)
                FileHelper.writeFile(`${rnLayoutPath}/src-gen/router/config/${loChild.name}LayoutConfig.tsx`, `
    ${this.generateLayoutCodeInterface(loChild)}
    `)
                this.traverseChildrenAndCreateLayout(rnLayoutPath, loChild, frontEnd)
            }
        })
    }


    generateRouterConstant(children: IRNLayout[]) {
        let path = '';
        const routeObj = generateRouterConstantObj(children);
        function generateRouterConstantObj(children: IRNLayout[]): any {

            return children.reduce((acc: any, child: any, index: number) => {
                if (child.children) {
                    // path = path+"/"+child.route;
                    console.log(path, "Path With layout")
                    path = child.route && child.route != "" && child.route != "/" ? path + "/" + child.route : path;
                    acc[child.name] = generateRouterConstantObj(child.children);
                    console.log(child.name, index, children.length, "Path With layout After")
                    if (index == children.length - 1) {
                        path = path.split("/").slice(0, -1).join('/').toString();
                        // const pathNumToBeRemoved = child.route.split("/").length;
                        // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                    }
                } else {
                    path = child.route && child.route != "" && child.route != "/" ? path + "/" + child.route : path;
                    acc[child.name] = path;
                    console.log(path, "Path Without layout")
                    const pathNumToBeRemoved = child.route.split("/").length;
                    console.log(pathNumToBeRemoved, index, children.length, "pathNumToBeRemoved..............")
                    path = path.split("/").slice(0, -pathNumToBeRemoved).join('/').toString();

                    if (index == children.length - 1) {
                        path = path.split("/").slice(0, -1).join('/').toString();
                        // const pathNumToBeRemoved = child.route.split("/").length;
                        // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                    }

                }

                return acc;
            }, {})
        }

        return JSON.stringify(routeObj);
    }

    generateLayoutCode(lo: IRNLayout, frontEnd: IRNModule) {
        const layoutChildName = lo.type == "Stack" ? `${lo.name}LayoutStack` : lo.type == "Drawer" ? `${lo.name}LayoutDrawer` : lo.type == "BottomTab" ? `${lo.name}LayoutBottomTab` : `${lo.name}LayoutTopTab`
        return (
            `
import { ${lo.name}LayoutNavigator,${layoutChildName} } from '../../src-gen/router/config/${lo.name}LayoutConfig';
${lo.children.reduce((acc, item) => {
                const importCode = `   ${item.children ? `
            import ${item.name}Layout from './${item.name}Layout';\n
            `: `
            import ${item.element} from '../view/${this.findScreenPath(frontEnd.screenList, (item?.element || ""))}/${item.element}';\n
            `}`
                acc = acc + importCode;
                return acc;
            }, "")}
    
const ${lo.name}Layout = () => {
        return (
        <${lo.name}LayoutNavigator>
            ${lo.children.reduce((acc, item) => {
                acc = acc + `
                    <${layoutChildName}.Screen component={${item.element ? item.element : `${item.name}Layout`}} name={'${item.element ? item.name : `${item.name}Layout`}'}></${layoutChildName}.Screen>\n
                    `
                return acc;
            }, "")
            }
        </${lo.name}LayoutNavigator>
        )
}

export default ${lo.name}Layout;
`
        )
    }

    generateLayoutCodeInterface(lo: IRNLayout) {
        const mainImportCode = lo.type == "TopTab" ? `import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";`
            : lo.type == "Drawer" ?
                `import { createDrawerNavigator } from '@react-navigation/drawer';`
                : lo.type == "BottomTab" ?
                    `import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";`
                    : `import { createNativeStackNavigator } from "@react-navigation/native-stack";`

        const layoutChildName = lo.type == "TopTab" ? `${lo.name}LayoutTopTab` : lo.type == "Drawer" ? `${lo.name}LayoutDrawer` : lo.type == "BottomTab" ? `${lo.name}LayoutBottomTab` : `${lo.name}LayoutStack`
        const layoutNavigatorFunction = lo.type == "TopTab" ? `createMaterialTopTabNavigator`
            : lo.type == "Drawer" ? `createDrawerNavigator`
                : lo.type == "BottomTab" ? `createBottomTabNavigator`
                    : `createNativeStackNavigator`
        return (
            `
            ${mainImportCode}
            export type ${lo.name}LayoutScreenList = {\n
            ${lo.children.reduce((acc, frontEndLayout) => {
                acc = acc + `${frontEndLayout.name}${(frontEndLayout.children && frontEndLayout.children?.length > 0) ? 'Layout' : ''}: any,\n`
                return acc;
            }, "")}
            }

            export type ${lo.name}LayoutChildren = ${lo.children && lo.children.length > 1 ? `[${new Array(lo.children.length).fill("React.ReactNode")}]` : "React.ReactNode"}

            export const ${layoutChildName} = ${layoutNavigatorFunction}<${lo.name}LayoutScreenList>();
            export const ${lo.name}LayoutNavigator: React.FC<{ children: ${lo.name}LayoutChildren }> = ({
            children,
        }) => {
        return <${layoutChildName}.Navigator>{children}</${layoutChildName}.Navigator>;
        };

/*const ${lo.name}Layout = () => {
        return (
        <${lo.name}LayoutNavigator>
            ${lo.children.reduce((acc, item) => {
                acc = acc + `
                    <${layoutChildName}.Screen component={${item.element ? item.element : `${item.name}Layout`}} name={'${item.name}'}></${layoutChildName}.Screen>\n
                    `
                return acc;
            }, "")
            }
        </${lo.name}LayoutNavigator>
        )
}
*/

`
        )
    }



    generateScreenCode(screen: IRNScreen) {
        return `
        import React from "react";
        import {Text} from "react-native";
        const ${screen.name} = () => {
        return(
            <Text>
            ${screen.name}
            </Text>
        )
        }
        
        export default ${screen.name};
        `
    }



    findScreenPath(screenList: IFrontEndScreen[], screenName: string) {
        const index = screenList.findIndex(screen => screen.name === screenName);
        if (screenList[index]) {
            return screenList[index].path;
        } else {
            alert(`${screenName} not found`)
        }
    }

    generateComponentCode(component: IRNComponent) {
            return `
            import React from "react";
            import {Text} from "react-native";
            import {I${component.name}Props} from './${component.name}MDP';
            const ${component.name} = (props: I${component.name}Props) => {
            return(
                <Text>
                ${component.name}
                </Text>
            )
            }
            
            export default ${component.name};
            `
        }
    
    
    
    
        generateComponentMDPCode(component: IRNComponent) {
            const pathCode = '../../../' + component.path.split("/").reduce((acc,curVal) => {
                acc = acc + '../'
                return acc;
            },"")
            return `
            import { MDP,IBasicComponent } from "${pathCode}src-gen/component/MDP";
            
    export class ${component.name}MDP implements I${component.name}MDP {
        componentName: string = "${component.name}";
        
        getMetaData() {
            return {
                componentName: this.componentName,
                props: {
                }
    
            }
        }
    }
    
    export interface I${component.name}Props extends IBasicComponent {
    }
    export interface I${component.name}MDP extends MDP {
    getMetaData: () => {componentName: string, props: I${component.name}Props}
    }
            `
        }
    
    
    
    
    
    
    
    }








const mainAppcode = `

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import BlendGeneratedLayout from './src/layout/BlendGeneratedLayout';
function App(): React.JSX.Element {
  

  return (
    <NavigationContainer>
      <BlendGeneratedLayout />
    </NavigationContainer>
  );
}


export default App;

`