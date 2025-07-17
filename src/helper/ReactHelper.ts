import { IApiMainSection, IApiSection } from "../types/apiOperationTypes";
import { IBasicProject, IBasicSection } from "../types/basicOperationTypes";
import { FileHelper } from "./fileHelper";
import path from 'path';
import BlendReactGrammarHelper from "./grammarHelper/BlendReactGrammarHelper";
import { IFrontEndScreen, IReactComponent, IReactLayout, IReactModule, IReactScreen, IReactSection } from "../types/frontendOperationTypes";
import BlendMDPGrammarHelper from "./grammarHelper/BlendMDPGrammarHelper";

const { execSync } = require('child_process');

const runCommand = (command, cwd = process.cwd()) => {
    try {
        execSync(command, { stdio: 'inherit', cwd });
    } catch (error) {
        console.error(`Failed to execute command: ${command}`);
        process.exit(1);
    }
};

export default class ReactHelper {
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

    doReactOperations() {
        this.createReactSpec();
        this.parseSpec();
    }

    doReactGenerations() {
        this.buildComponents();
        this.buildScreens();

    }

    createReactSpec() {
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name.trim();
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const reactFolderPath = path.join(sectionFolderPath, 'frontend');
            section.reactModuleList.forEach(reactModule => {
                const dataFilePath = path.join(reactFolderPath, `${reactModule.name}.react`);
                if (!FileHelper.exists(dataFilePath)) {
                    FileHelper.writeFile(dataFilePath, `module ${reactModule.name}`);
                }
            });
        });
    }







    parseSpec() {
        const sectionReactList: IReactSection[] = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name.trim();
            const sectionObj: IReactSection = {
                name: sectionName,
                reactModuleList: [],
            };
            section.reactModuleList.forEach(reactModule => {
                const rnFilePath = path.join(this.folderPath, `spec/${sectionName}/frontend/${reactModule.name}.react`);
                const specCode = FileHelper.readFile(rnFilePath);
                const reactHelper = new BlendReactGrammarHelper();
                const json = reactHelper.parseBlendReact(specCode);
                if (!json.valid) {
                    throw new Error("Error while parsing the react native screens");
                } else {
                    sectionObj.reactModuleList.push(json.json);
                }
            });


            sectionReactList.push(sectionObj);
        });

        // Write the generated configuration to a file
        FileHelper.writeFile(`${this.configPath}/reactConfig.json`, JSON.stringify(sectionReactList, null, 4));
    }

    generateMDPCode(component: IReactComponent) {
        return `module ${component.name}\nprops {}`;
    }



    //Generate


    buildScreens() {
        const reactSectionList: IReactSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/reactConfig.json`));
        reactSectionList.forEach(reactSection => {
            const reactFolderPath = path.join(this.folderPath, `module/${reactSection.name}/react`);

            reactSection.reactModuleList.forEach(reactModule => {
                this.buildLayouts(reactSection, reactModule);
                const rnProjectPath = path.join(reactFolderPath, reactModule.name);
                reactModule.screenList.forEach(screen => {
                    const screenPath = `${rnProjectPath}/src/view/${screen.path}/`;
                    const screenCode = this.generateScreenCode(screen);
                    FileHelper.createFile(`${screenPath}${screen.name}.tsx`, screenCode
                    )
                });
            })
        })
    }


    buildComponents() {
        const reactSectionList: IReactSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/reactConfig.json`));
        reactSectionList.forEach(reactSection => {
            const reactFolderPath = path.join(this.folderPath, `module/${reactSection.name}/react`);

            reactSection.reactModuleList.forEach(reactModule => {
                this.buildLayouts(reactSection, reactModule);
                const rnProjectPath = path.join(reactFolderPath, reactModule.name);
                const mdpHookComponentPath = `${rnProjectPath}/src/src-gen/component/mdpHook.ts`;
                const mdpPath = `${rnProjectPath}/src/src-gen/component/MDP.ts`;
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
    generateMDPHookCode(componentList: IReactComponent[]) {
        const importsCode = `
        ${componentList.reduce((acc, component) => {
            acc = acc + `import ${component.name} from '../../component/${component.path}/${component.name}';\n`
            return acc;
        }, "")}`
        return `
        import React, { useCallback, useRef, useState } from "react";
        import { MDP } from "./MDP";
        ${importsCode}
        

export const useMetaData = (props: { 
    mdpClass: MDP; 
    defaultInput?: any; 
    onInput?: (val: any) => void; 
    extraProps?: any;
    memoize?: boolean;
}): [React.ReactElement, any, React.Dispatch<any>] => {
    
    console.log(props.defaultInput, props.mdpClass, "defaultInput");

    const [input, setInput] = useState(props.defaultInput);
    const componentRef: any = useRef<React.ReactElement | null>(null);

    // useEffect(() => {
    //     setInput(props.defaultInput);
    // }, [props.defaultInput]);

    const handleInputChange = useCallback((val: any) => {
        setInput(val);
        props.onInput?.(val);
    }, [props.onInput]);

    
    if (!componentRef.current || props.mdpClass !== componentRef.current.props.mdpClass || props.extraProps !== componentRef.current.props.extraProps) {
        componentRef.current = generateElementFromMetaData({
            componentClassMetaData: props.mdpClass.getMetaData(),
            onInput: handleInputChange,
            value: input,
            extraProps: props.extraProps
        });
    }

    return [componentRef.current, input, setInput];
};

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


export const MetaDataContainer = (props: {mdp: MDP,value?: any, onInput?: (val: any)=>void,extraProps?:object}) => {
    const componentClassMetaData = props.mdp.getMetaData();
    return generateElementFromMetaData({...props,componentClassMetaData})
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
    checkForFolderAndCreateReactApp() {
        return new Promise(async (checkRes) => {
            const reactSectionList: IReactSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/reactConfig.json`));
            const promises: Promise<void>[] = [];
            reactSectionList.forEach(reactSection => {
                const reactFolderPath = path.join(this.folderPath, `module/${reactSection.name}/react`);
                FileHelper.ensureDir(reactFolderPath);

                reactSection.reactModuleList.forEach(rnModule => {
                    const modulePath = path.join(reactFolderPath, rnModule.name);
                    if (!FileHelper.exists(modulePath)) {
                        promises.push(new Promise(res => {
                            
                            runCommand(`npm create vite@6.2.0 ${rnModule.name} -- --template react-ts `, reactFolderPath);
                            // runCommand(`npm install -D typescript @types/node @types/react @types/react-dom @types/jest`, modulePath);

                            const dependencies = [
                                '@reduxjs/toolkit@2.6.0',
                                'react-redux@9.2.0',
                                'redux-saga@1.3.0',
                                "axios@1.8.1",
                                "react-router-dom@7.2.0",
                                "tailwindcss@4.0.9",
                                "tailwindcss@4.0.9",
                                "@tailwindcss/vite@4.0.9"

                            ];
                            runCommand(`npm install ${dependencies.join(' ')}`, modulePath);

                            FileHelper.writeFile(`${modulePath}/src/App.tsx`, mainAppcode);
                            FileHelper.writeFile(`${modulePath}/src/index.css`, `@import "tailwindcss";`);
                            FileHelper.writeFile(`${modulePath}/tsconfig.json`, tsConfigJsonCode);
                            FileHelper.writeFile(`${modulePath}/tsconfig.app.json`, tsConfigAppJsonCode);
                            FileHelper.writeFile(`${modulePath}/src/index.css`, `@import "tailwindcss";`);
                            runCommand(`npm install -D @types/node`, modulePath);
                            FileHelper.writeFile(`${modulePath}/vite.config.ts`, viteConfigCode);
                            runCommand(`npx shadcn@latest init`, modulePath);
                            



                        }))
                    }
                })
            })
            await Promise.all(promises);
            checkRes(true)

        })


    }

    buildLayouts(rnSection: IReactSection, reactModule: IReactModule) {
        const reactFolderPath = path.join(this.folderPath, `module/${rnSection.name}/react`);
        const rnLayoutPath = path.join(reactFolderPath, reactModule.name);
        const lo: IReactLayout = {
            name: "BlendGenerated",
            route: "/",
            children: reactModule.layout,
        }
        const routerCode = this.generateRouterCode(lo, reactModule);
        FileHelper.writeFile(`${rnLayoutPath}/src/src-gen/router/blend-router.tsx`, routerCode)
        this.traverseChildrenAndCreateLayout(rnLayoutPath, lo, reactModule);
        FileHelper.createFile(`${rnLayoutPath}/src/layout/${lo.name}Layout.tsx`, `
${this.generateLayoutCode(lo, reactModule)}
`)
    }


    traverseChildrenAndCreateLayout(reactLayoutPath: string, lo: IReactLayout, frontEnd: IReactModule) {
        lo.children.forEach(loChild => {
            if (loChild.children) {
                FileHelper.createFile(`${reactLayoutPath}/src/layout/${loChild.name}Layout.tsx`, `
    ${this.generateLayoutCode(loChild, frontEnd)}
    `)
                this.traverseChildrenAndCreateLayout(reactLayoutPath, loChild, frontEnd)
            }
        })
    }

    findScreenPath(screenList: IReactScreen[], screenName: string) {
        const index = screenList.findIndex(screen => screen.name === screenName);
        if (screenList[index]) {
            return screenList[index].path;
        } else {
        }
    }

    generateFlattenedArray(children: IReactLayout[]) {
        let uniqueElements: any[] = [];
        let flatenedArray: any[] = [];
        generateFlattenedArrayFun(children);
        function generateFlattenedArrayFun(children: IReactLayout[]) {
            return children.forEach((child) => {
                flatenedArray.push(child);
                if (child.children) {
                    generateFlattenedArrayFun(child.children);
                } else {
                    if (!uniqueElements.includes(child.element)) {
                        uniqueElements.push(child.element);
                    } else {
                        flatenedArray.pop();
                    }
                }
            });
        }

        return flatenedArray;


    }

    generateRouterCode(mainLayout: IReactLayout, frontEnd: IReactModule) {
        const defaultImportCode = `
        import { createBrowserRouter } from 'react-router-dom';\n
        import React from 'react';\n
        import BlendGeneratedLayout from '../../layout/BlendGeneratedLayout';
        `;

        console.log([mainLayout],JSON.stringify([mainLayout]),"Main layout///////////////")
        const routerJsonCode = `const router = createBrowserRouter([${this.generateLayoutRouterJSONCode([mainLayout])}])\nexport default router;`
        const routerConstant = this.generateRouterConstant(frontEnd.layout);
        console.log(this.generateFlattenedArray(mainLayout.children), "this.generateFlattenedArray(mainLayout.children)");
        const importCode = `${this.generateFlattenedArray(mainLayout.children).reduce((acc, item) => {
            const importCode = `   ${item.children ? `
                    import ${item.name}Layout from '../../layout/${item.name}Layout';\n
                    `: `
                    import ${item.element} from '../../view/${this.findScreenPath(frontEnd.screenList, (item?.element || ""))}/${item.element}';\n
                    `}`
            acc = acc + importCode;
            return acc;
        }, "")}`;
        return importCode + defaultImportCode + routerJsonCode + '\n'+routerConstant;
    }
    generateLayoutRouterJSONCode(layoutList: IReactLayout[]) {
        return layoutList.reduce((acc, layout) => {
            acc = acc + `{element: ${layout.children ? `<${layout.name}Layout/>,` : `<${layout.element} />,`}
            path: "${layout.route}",
            ${layout.children ? `children: [${this.generateLayoutRouterJSONCode(layout.children)}],` : ``}
            },
            `
            return acc;
        }, '')
    }


    generateRouterConstant(children: IReactLayout[]) {
        let path = '';
        const routeObj = generateRouterConstantObj(children);
        function generateRouterConstantObj(children: IReactLayout[]): any {

            return children.reduce((acc: any, child: any, index: number) => {
                if (child.children) {
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

        return `export const RouterConstant = ${JSON.stringify(routeObj)}`;
    }

    generateLayoutCode(lo: IReactLayout, frontEnd: IReactModule) {

        return (
            `
import { Outlet } from "react-router-dom"
const ${lo.name}Layout = () => {
        return (
        <div>
            ${lo.name}Layout
            <Outlet />
        </div>
        )
}

export default ${lo.name}Layout;
`
        )
    }



    generateScreenCode(screen: IReactScreen) {
        return `
        import React from "react";
        const ${screen.name} = () => {
        return(
            <div>
            ${screen.name}
            </div>
        )
        }
        
        export default ${screen.name};
        `
    }

    generateComponentCode(component: IReactComponent) {
        return `
        import React from "react";
        import {I${component.name}Props} from './${component.name}MDP';
        const ${component.name} = (props: I${component.name}Props) => {
        return(
            <div>
            ${component.name}
            </div>
        )
        }
        
        export default ${component.name};
        `
    }




    generateComponentMDPCode(component: IReactComponent) {
        const pathCode = '../../' + component.path.split("/").reduce((acc,curVal) => {
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

import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store/store';
import { RouterProvider } from 'react-router-dom';
import router from './src-gen/router/blend-router'
function App() {
  
  return (
    <div className="App">
     <Provider store={store}>
     <RouterProvider router={router}/>
     </Provider>
    </div>
  );
}

export default App;
`

const tsConfigJsonCode = `
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

`

const tsConfigAppJsonCode = `
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": ["src"]
}


`

const viteConfigCode = `
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
`