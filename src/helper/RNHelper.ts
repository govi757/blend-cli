import { IApiMainSection, IApiSection } from "../types/apiOperationTypes";
import { IBasicProject, IBasicSection } from "../types/basicOperationTypes";
import { FileHelper } from "./fileHelper";
import path from 'path';

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
            section.rnModuleList.forEach(rnModule => {
                const rnFilePath = path.join(this.folderPath, `spec/${sectionName}/frontend/${rnModule.name}.rn`);
                const specCode = FileHelper.readFile(rnFilePath);

                // Parse screenList and layout from the spec file
                screenList = this.parseScreenList(specCode);
                layout = this.parseLayouts(specCode);
                projectName = rnModule.name;
            });

            const sectionObj: IRNSection = {
                name: sectionName,
                rnModuleList: [{ screenList, layout, name: projectName }],
            };
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
                this.buildLayouts(rnSection,rnModule);
                const rnProjectPath = path.join(rnFolderPath, rnModule.name);
                rnModule.screenList.forEach(screen => {
                    const screenPath = `${rnProjectPath}/src/view/${screen.path}/`;
                    const screenCode = this.generateScreenCode(screen);
                    FileHelper.createFile(`${screenPath}${screen.name}.tsx`, screenCode
                    )
                });


            })
        })
    }

    buildLayouts(rnSection: IRNSection, rnModule: IRNModule) {
        const rnFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react-native`);
        // const path = `${projectPath}/frontend/${frontEnd.name}/src/layout`;
        const rnLayoutPath = path.join(rnFolderPath, rnModule.name);
        // rnModule.layout.forEach(lo => {
        const lo: IRNLayout = {
            name:"BlendGenerated",
            route: "/",
            children: rnModule.layout,
            type:"Stack",
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
            
        return children.reduce((acc: any,child: any,index: number) => {
            if(child.children) {
                // path = path+"/"+child.route;
                console.log(path,"Path With layout")
                path = child.route&&child.route!=""&&child.route!="/"?path+"/"+child.route:path;
                acc[child.name] = generateRouterConstantObj(child.children);
                console.log(child.name,index,children.length,"Path With layout After")
                if(index==children.length-1) {
                    path = path.split("/").slice(0,-1).join('/').toString();
                    // const pathNumToBeRemoved = child.route.split("/").length;
                    // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                }
            } else {
                path = child.route&&child.route!=""&&child.route!="/"?path+"/"+child.route:path;
                acc[child.name] = path;
                console.log(path,"Path Without layout")
                const pathNumToBeRemoved = child.route.split("/").length;
                console.log(pathNumToBeRemoved,index,children.length,"pathNumToBeRemoved..............")
                    path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                
                if(index==children.length-1) {
                    path = path.split("/").slice(0,-1).join('/').toString();
                    // const pathNumToBeRemoved = child.route.split("/").length;
                    // path = path.split("/").slice(0,-pathNumToBeRemoved).join('/').toString();
                }
                
            }
            
            return acc;
        },{})
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
                    <${layoutChildName}.Screen component={${item.element ? item.element : `${item.name}Layout`}} name={'${item.name}'}></${layoutChildName}.Screen>\n
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





}
