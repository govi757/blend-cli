import path from 'path';
import { FileHelper } from './fileHelper';
const VALID_DATA_TYPES = ['string', 'number', 'boolean', 'any', 'object', 'array'];
const VALID_KEYWORDS = ['module', 'section', 'api', 'input', 'output', 'authenticate', '}'];
const VALID_CUSTOM_TYPE_REGEX = /^[A-Za-z_][A-Za-z0-9_]*->(?:[A-Za-z_][A-Za-z0-9_]*)(->(?:[A-Za-z_][A-Za-z0-9_]*))*$/;

import { IApiSection, IApiSpec, ApiType, IApiMainSection, IExpressSection, IApiDataField } from '../types/apiOperationTypes';
import { IBasicProject } from '../types/basicOperationTypes';
import { IDataField, IDataSection } from '../types/dataOperationTypes';
export default class ExpressHelper {
    basicFilePath: string;
    folderName: string;
    folderPath: string;
    basicFileContent: string;
    configPath: string;
    baseRoute: string = 'api';
    basicProjectContent: IBasicProject;

    constructor() {
        this.folderPath = path.join(process.cwd());
        this.folderName = path.basename(this.folderPath);
        this.basicFilePath = path.join(this.folderPath, `${this.folderName}.basic`);
        this.configPath = path.join(this.folderPath, '.basicConfig');
        this.basicProjectContent = JSON.parse(FileHelper.readFile(`${this.configPath}/basicConfig.json`) || "{}");
    }

    doExpressOperations(basicFileContent: string) {
        // Normalize and trim the content to handle extra spaces
        this.basicFileContent = basicFileContent.replace(/\s+/g, ' ').trim();
        this.createExpressSpec();
        this.parseSpec();
    }

    doExpressGenerations(basicFileContent: string) {
        this.basicFileContent = basicFileContent.replace(/\s+/g, ' ').trim();
        this.createExpressProject();
        this.parseJSONAndGenerateFiles();
    }

    createExpressSpec() {
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const apiFolderPath = path.join(sectionFolderPath, 'api');
            FileHelper.ensureDir(apiFolderPath);
            section.expressModuleList.forEach(module => {
                const apiFilePath = path.join(apiFolderPath, `${module.name}.express`);
                if (!FileHelper.exists(apiFilePath)) {
                    FileHelper.writeFile(apiFilePath, `module ${module.name}`);
                    console.log(`Created data file: ${apiFilePath}`);
                } else {
                    // console.log(`Data file already exists: ${apiFilePath}`);
                }
            })
        })

    }

    validateSpecLine(line: string, lineNumber: number,sectionName: string): void {
        if (!line.trim()) return; // Skip empty lines

        const trimmedLine = line.trim();
    
        // Allow standalone closing braces
        if (trimmedLine === '}') return;
    
        // Check if the line matches any of the valid keywords strictly
        const isValidKeyword = VALID_KEYWORDS.some(keyword => {
            const regex = new RegExp(`^${keyword}\\b`);
            return regex.test(trimmedLine);
        });
    
        if (!isValidKeyword) {
            console.log('\x1b[31m%s\x1b[0m',`Syntax error at line ${lineNumber}: Invalid keyword or syntax "${trimmedLine}"`)
            throw new Error(`Syntax error at line ${lineNumber}: Invalid keyword or syntax "${trimmedLine}"`);
        }
    
        // Validate API declaration parentheses
        if (trimmedLine.startsWith('api')) {
            
            if (!trimmedLine.includes('(') || !trimmedLine.includes(')')) {
                console.log('\x1b[31m%s\x1b[0m',`Syntax error at line ${lineNumber}: Missing or unmatched parentheses in API declaration "${line}"`)
                throw new Error(`Syntax error at line ${lineNumber}: Missing or unmatched parentheses in API declaration "${line}"`);
            }
        }
    
        // Validate input/output parameter types
        if (trimmedLine.startsWith('input') || trimmedLine.startsWith('output')) {
            const paramsMatch = trimmedLine.match(/\((.+)\)/);
            if (!paramsMatch) {
                console.log('\x1b[31m%s\x1b[0m',`Syntax error at line ${lineNumber}: Missing parentheses in "${line}"`)
                throw new Error(`Syntax error at line ${lineNumber}: Missing parentheses in "${line}"`);
            }
            const params = paramsMatch[1].split(',').map(param => param.trim());
            params.forEach(param => {
                const [_, typeWithOptional] = param.split(':').map(p => p.trim());
                const type = typeWithOptional?.replace('?', '');
                if (
                    type && 
                    !VALID_DATA_TYPES.includes(type) && 
                    !VALID_CUSTOM_TYPE_REGEX.test(type)
                ) {
                    console.log('\x1b[31m%s\x1b[0m',`Invalid data type "${type}" at line ${lineNumber}: "${line}"`)
                    throw new Error(`Invalid data type "${type}" at line ${lineNumber}: "${line}"`);
                } else {
                    const dataArr = type.trim().split("->");
                    if(dataArr.length==2) {
                        
                        const dataJson: IDataSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/dataConfig.json`));
                        const currentDataSection = dataJson.find(item => item.name == sectionName);
                        const currentDataModule = currentDataSection.sectionDataList?.find(item => item.name==dataArr[0]);
                        if(!currentDataModule) {
                            console.log('\x1b[31m%s\x1b[0m',`Data module not found"${dataArr[0]}" at line ${lineNumber}: "${line}"`)
                            throw new Error(`Data module not found"${dataArr[0]}" at line ${lineNumber}: "${line}"`);
                        }
                        if(!currentDataModule?.dataList?.some(item => item.name == dataArr[1])) {
                            throw new Error(`Data type ${dataArr[1]} not found in module "${dataArr[0]}" at line ${lineNumber}: "${line}"`);
                        }

                    }
                }
            });
        }
    }

    validateSpec(spec: string,sectionName: string): void {
        const lines = spec.split('\n').map(line => line.trim());
        try {
            lines.forEach((line, index) => this.validateSpecLine(line, index + 1,sectionName));
        } catch (error: any) {
            console.error(`%c${error.message}`, 'color: red; font-weight: bold;');
            throw error; // Stop further execution on error
        }
    }

    parseSpec() {
        let apiMainSectionList: IApiMainSection[] = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);

            // Ensure the section folder and its data subfolder exist
            const apiFolderPath = path.join(sectionFolderPath, 'api');
            let expressSectionList: IExpressSection[] = [];

            section.expressModuleList.forEach(module => {
                let apiSectionList: IApiSection[] = [];
                    const filePath = path.join(apiFolderPath, `${module.name}.express`);
                    const specCode = FileHelper.readFile(filePath);
                    this.validateSpec(specCode,sectionName);
                    const lines = specCode.split('\n').map(line => line.trim());
                    // const sections: Section[] = [];
                    let currentSection: IApiSection | null = null;

                    for (const line of lines) {
                        if (line.startsWith('section')) {
                            const sectionName = line.match(/section\s+(\w+)/)?.[1];
                            if (sectionName) {
                                if (currentSection) apiSectionList.push(currentSection);
                                currentSection = { name: sectionName, apiList: [] };
                            }
                        } else if (line.startsWith('api')) {
                            const apiMatch = line.match(/api\s+(\w+)\((\w+)\)/);
                            if (apiMatch && currentSection) {
                                const [, apiName, httpMethod] = apiMatch;
                                const api: IApiSpec = {
                                    name: apiName,
                                    type: httpMethod.toLowerCase(),
                                    input: {},
                                    output: {}
                                };
                                currentSection.apiList.push(api);
                            }
                        } else if (line.startsWith('input')) {
                            const inputMatch = line.match(/input\((.+)\)/);
                            const inputParams = inputMatch?.[1]?.split(',') || [];
                            const api = currentSection?.apiList[currentSection.apiList.length - 1];
                            inputParams.forEach(param => {
                                const [name, typeWithOptional] = param.split(':').map(p => p.trim());
                                const type = typeWithOptional.replace('?', '');
                                const required = !typeWithOptional.includes('?');
                                if (api) {
                                    api.input[name] = { type, required };
                                }
                            });
                        } else if (line.startsWith('output')) {
                            const outputMatch = line.match(/output\((.+)\)/);
                            const outputParams = outputMatch?.[1]?.split(',') || [];
                            const api = currentSection?.apiList[currentSection.apiList.length - 1];
                            outputParams.forEach(param => {
                                const [name, typeWithOptional] = param.split(':').map(p => p.trim());
                                const type = typeWithOptional.replace('?', '');
                                const required = !typeWithOptional.includes('?');
                                if (api) {
                                    api.output[name] = { type, required };
                                }
                            });
                        } else if (line.startsWith('authenticate')) {
                            const api = currentSection?.apiList[currentSection.apiList.length - 1];
                            if (api) api.authenticated = true;
                        }
                    }

                    if (currentSection) apiSectionList.push(currentSection);

                    console.log(JSON.stringify(apiSectionList), "sections")
                    expressSectionList.push({ apiSectionList, name: module.name,includedDataModuleList: module.includedDataModuleList })
            });
            let sectionObj = {
                name: sectionName,
                expressSectionList: expressSectionList
            }

            apiMainSectionList.push(sectionObj);
        })

        FileHelper.writeFile(`${this.configPath}/apiConfig.json`, JSON.stringify(apiMainSectionList));


    }

    parseJSONAndGenerateFiles() {
        const apiMainSectionList: IApiMainSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));
        apiMainSectionList.forEach(sectionApi => {
            const mainSectionPath = path.join(this.folderPath, `module/${sectionApi.name}`);
            sectionApi.expressSectionList.forEach(expressSection => {
                const expressPath = path.join(mainSectionPath, `${expressSection.name}`);
                expressSection.apiSectionList.forEach(apiSection => {
                    // const apiPath = ``
                    this.writeApi(apiSection, expressPath);
                    this.writeInterfaceCode(apiSection, expressPath)
                    this.writeApiDatacode(apiSection, expressPath);
                    this.writeRouteCode(apiSection, expressPath);
                })
            })
        })
    }

    writeApi(apiSection: IApiSection, expressPath: string) {
        const apiCode = this.generateApiCode(apiSection);
        const apiPath = `${expressPath}/src/services`;
        const fileName = `${apiSection.name}/${apiSection.name}.service.ts`
        FileHelper.createFile(`${apiPath}/${fileName}`, apiCode);
    }


    writeInterfaceCode(apiSection: IApiSection, expressPath: string) {
        const interfacePath = `${expressPath}/src-gen/api-interfaces`;
        const fileName = `${apiSection.name}.interface.ts`
        const code = this.generateApiInterfaceCode(apiSection);
        FileHelper.writeFile(`${interfacePath}/${fileName}`, code);
    }

    writeApiDatacode(apiSection: IApiSection, expressPath: string) {
        const dataPath = `${expressPath}/src-gen/api-data`;
        const fileName = `${apiSection.name}.data.ts`
        const code = this.generateSampleApiDataCode(apiSection);
        FileHelper.writeFile(`${dataPath}/${fileName}`, code);
    }

    writeRouteCode(apiSection: IApiSection, expressPath: string) {
        const dataPath = `${expressPath}/src-gen/api-routes`;
        const fileName = `${apiSection.name}.routes.ts`
        const code = this.generateRoutesCode(apiSection);
        FileHelper.writeFile(`${dataPath}/${fileName}`, code);
    }


    createExpressProject() {
        const sectionRegex = /section\s+([a-zA-Z0-9_]+)\s*{([^}]*)}/g; // Match entire section
        const dataModuleRegex = /express-module\s+([a-zA-Z0-9,]+)/; // Match data-module line

        let match;
        while ((match = sectionRegex.exec(this.basicFileContent)) !== null) {
            const sectionName = match[1].trim();
            const sectionContent = match[2].trim();

            // Check for data-module within the section content
            const dataMatch = dataModuleRegex.exec(sectionContent);
            if (dataMatch) {
                const modules = dataMatch[1]
                    .split(',')
                    .map(module => module.trim()); // Normalize module names

                // Path for the section folder inside `spec`
                const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);

                // Ensure the section folder and its data subfolder exist
                const apiFolderPath = path.join(sectionFolderPath, 'api');
                FileHelper.ensureDir(apiFolderPath);

                // Create .data files for each module
                modules.forEach(module => {

                    this.createProject(sectionName, module);

                });
            }
        }
    }

    createProject(sectionName: string, projectName: string) {
        const folderPath = process.cwd(); // Current working directory

        // Path for the section folder inside `spec`
        const sectionFolderPath = path.join(folderPath, `module/${sectionName}`, projectName);
        const packageFilePath = path.join(sectionFolderPath, "package.json");
        const tsConfigFilePath = path.join(sectionFolderPath, "tsconfig.json");
        const appTsPath = path.join(sectionFolderPath, "src/app.ts");
        const envPath = path.join(sectionFolderPath, ".env.dev");
        const routesPath = path.join(sectionFolderPath, "src/routes/common/common.routes.config.ts");
        const authPath = path.join(sectionFolderPath, "src/middlewares/auth.ts");
        const packageFileCode = packageJSON;
        packageFileCode.name = projectName;
        FileHelper.createFile(packageFilePath, JSON.stringify(packageFileCode));
        FileHelper.createFile(tsConfigFilePath, JSON.stringify(tsconfigJson));
        FileHelper.createFile(appTsPath, appTsCode);
        FileHelper.createFile(envPath, envFileCode);
        FileHelper.createFile(routesPath, routesCode);
        FileHelper.createFile(authPath, authCode);


    }





    generateApiInterfaceCode(apiSection: IApiSection) {
        const interfaceName: string = `I${apiSection.name}Api`;
        const sectionName: string = `${apiSection.name}Service`;
        const apiCode = this.generateApiFunctionCodes(apiSection);
        const totalInputs = apiSection.apiList.reduce((acc: number, currVal) => {
            acc = acc + Object.keys(currVal.input).length;
            return acc
        }, 0);
        const code = `
import express from 'express';\n;
${totalInputs > 0 ? `
    import {${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + `${(Object.keys(currVal.input).length > 0) ? `${inputName},` : ''}`;
            return acc
        }, '')}} from '../api-data/${apiSection.name}.data';
    `: ``}

export interface ${interfaceName} {
    ${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + `${currVal.name}( ${currVal.authenticated === true ? `currentUser: any,` : ``} ${Object.keys(currVal.input).length > 0 ? `input: ${inputName},` : ''} res: express.Response):void\n\t`
            return acc;
        }, '')
            }
}

/*
API CODE
.............

${apiCode}
*/
`;
        return code;
    }

    generateSampleApiDataCode(apiSection: IApiSection) {
        const code = `
        ${apiSection.apiList.reduce((acc: string, api) => {
            const inputKeyList = Object.keys(api.input);
            const outputKeyList = api.output ? Object.keys(api.output) : [];
            const inputDataTypeName: string = (`${apiSection.name}_${api.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${api.name}_Output`).toUpperCase();
            const imports = new Set<string>(); // Collect unique imports
            inputKeyList.forEach(inputKey=>{
                const typeParts = api.input[inputKey].type.split("->");
                if (typeParts.length === 2) {
                    const [module, typeName] = typeParts;
                    const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                    imports.add(`import { ${baseTypeName} } from '../data/${module}';`);
                }
            })
            acc = acc + `
            
${inputKeyList.length > 0 ? `
${Array.from(imports).join('\n')}
export class ${inputDataTypeName} {
    
   
            constructor(
    ${inputKeyList
                                .map(
                                    (inputKey) =>
                                        `        public ${inputKey}: ${this.resolveType(api.input[inputKey].type)}${!api.input[inputKey].required ? '|undefined' : ''} = ${this.getDefaultValue(
                                            api.input[inputKey]
                                        )},`
                                )
                                .join('\n')}
        ) {}
        
      static fromJSON(jsonObj: any):${inputDataTypeName} {
            return new ${inputDataTypeName}(
    ${inputKeyList
                                .map((inputKey) => this.generateFromJSONField({...api.input[inputKey],name: inputKey}))
                                .join(',\n')}
            );
        }

    checkDefaultPreCondition() {
        const error: any = {};
        ${inputKeyList.reduce((acc, inputKey) => {
                acc = acc + `${api.input[inputKey].required == true ?
                    `if(!this.${inputKey}) {
                error['${inputKey}']="${inputKey} is required"
             }`
                    : ``}`
                return acc
            }, "")}
        return {
            isValid: Object.keys(error).length==0,
            errorBody: error
        }
    }
}`: ''}

${outputKeyList.length > 0 ? `export class ${outputDataTypeName} {
   

  ${outputKeyList
                                .map(
                                    (inputKey) =>
                                        `        public ${inputKey}: ${this.resolveType(api.input[inputKey].type)}${!api.input[inputKey].required ? '|undefined' : ''} = ${this.getDefaultValue(
                                            api.input[inputKey]
                                        )},`
                                )
                                .join('\n')}
        ) {}

 static fromJSON(jsonObj: any):${outputDataTypeName} {
            return new ${outputDataTypeName}(
    ${outputKeyList
                                .map((outputKey) => this.generateFromJSONField({...api.output[outputKey],name: outputKey}))
                                .join(',\n')}
            );
        }
}`: ''}

`
            return acc;
        }, "")
            }
        `
        return code
    }
    generateApiCode(apiSection: IApiSection) {
        const serviceName = `${apiSection.name}Service`;
        const interfaceName = `I${apiSection.name}Api`;
        const code = `
    import express from 'express';\n
    import { ${interfaceName} } from '../../../src-gen/api-interfaces/${apiSection.name}.interface';\n
${apiSection.apiList.length > 0 ? `import {${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + inputName + ',';
            return acc
        }, '')}} from '../../../src-gen/api-data/${apiSection.name}.data';` : ''}

export default class ${serviceName} implements ${interfaceName} {
    ${this.generateApiFunctionCodes(apiSection)
            }
}`

        return code;
    }

    generateApiFunctionCodes(apiSection: IApiSection) {
        return apiSection.apiList.reduce((acc, api) => {
            const inputName: string = (`${apiSection.name}_${api.name}_Input`).toUpperCase();
            acc = acc + `public async ${api.name}(${api.authenticated === true ? 'currentUser: any,' : ''}${Object.keys(api.input).length > 0 ? `input: ${inputName},` : ''} res: express.Response) {
                try {
                    ${api.output && Object.keys(api.output).length > 0 ?
                    `const projectionString = '${Object.keys(api.output).reduce((acc, cur) => {
                        acc = acc + cur + ' ';
                        return acc;
                    }, '')}'` : ''}

                }catch (e) {
                    res.status(500).send("Error" + e);
                }
            }\n`;
            return acc;
        }, "")
    }

    generateRoutesCode(apiSection: IApiSection) {
        const className = `${apiSection.name}Routes`;
        const serviceName = `${apiSection.name}Service`;
        const totalInputs = apiSection.apiList.reduce((acc: number, currVal) => {
            acc = acc + Object.keys(currVal.input).length;
            return acc
        }, 0);
        const code = `
    import { CommonRoutesConfig } from '../../src/routes/common/common.routes.config';
    import ${serviceName} from '../../src/services/${apiSection.name}/${apiSection.name}.service';
    import express from 'express';
    import verifyToken from '../../src/middlewares/auth';
    ${totalInputs > 0 ? `
        ${apiSection.apiList.length > 0 ? `import {${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + `${Object.keys(currVal.input).length > 0 ? `${inputName + ','}` : ``}`;
            return acc
        }, '')}} from '../api-data/${apiSection.name}.data';` : ''}
        `: ``}
    

    export default class ${className} extends CommonRoutesConfig {
        constructor(app: express.Application) {
            super(app, '${className}');
        }
        ${apiSection.name}Service = new ${apiSection.name}Service();

        configureRoutes(): express.Application {

            ${apiSection.apiList.reduce((acc, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();

            acc = acc + `
                    this.app.route('/${this.baseRoute}/${this.getApiName(apiSection.name)}/${this.getApiName(currVal.name)}').${currVal.type}(${currVal.authenticated === true ? 'verifyToken,' : ''}async (req: express.Request, res: express.Response) => {
                        ${Object.keys(currVal.input).length > 0 ?
                    ` const input: ${inputName} = ${inputName}.fromJSON(${currVal.type == ApiType.Get ? 'req.query' : 'req.body'});
                            const defaultPreCondition = input.checkDefaultPreCondition();
                            if(defaultPreCondition.isValid) {
                            this.${serviceName}.${currVal.name}(${currVal.authenticated === true ? `(req as any).user,` : ''}input, res);
                            } else {
                                res.status(412).send(defaultPreCondition.errorBody)
                            }`
                    : `
                            
                            this.${serviceName}.${currVal.name}(${currVal.authenticated === true ? `(req as any).user,` : ''}res);
                            
                            `
                }
                        
                       
                    });`
            return acc;
        }, '')
            }

            return this.app;
        }
    }
    `

        return code;
    }


    getApiName(apiName: string) {
        return apiName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();;
    }

    resolveType(type: string): string {
            const typeParts = type.split("->");
            const baseType = typeParts.length === 2 ? typeParts[1] : type;
            return baseType.endsWith("[]") ? `${baseType.slice(0, -2)}[]` : baseType; // Handle array types
        }
    
        getDefaultValue(field: IDataField): string {
            const typeParts = field.type.split("->");
            const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
            if (baseType.endsWith("[]")) {
                return "[]"; // Default value for arrays
            }
            if (typeParts.length === 2) {
                const [, typeName] = typeParts;
                const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                return `new ${baseTypeName}()`; // Instantiate the imported class
            }
            switch (field.type) {
                case "string":
                    return field.required ? "''" : "undefined";
                case "object":
                    return field.required ? "{}" : "undefined";
                case "boolean":
                    return field.required ? "false" : "undefined";
                case "number":
                    return field.required ? "0" : "undefined";
                default:
                    return "null";
            }
        }
    
        generateFromJSONField(field: IDataField): string {
            console.log(field,"field")
            const typeParts = field.type.split("->");
            const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
            if (baseType.endsWith("[]")) {
                const elementType = baseType.slice(0, -2);
                if (["string", "number", "boolean"].includes(elementType)) {
                    return `            jsonObj.${field.name} ?? []`;
                }
                return `            (jsonObj.${field.name} != null) ? jsonObj.${field.name}.map((item: any) => ${elementType}.fromJSON(item)) : []`;
            }
            if (typeParts.length === 2) {
                const [, typeName] = typeParts;
                const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                return `            (jsonObj.${field.name} != null) ? ${baseTypeName}.fromJSON(jsonObj.${field.name}) : new ${baseTypeName}()`;
            }
            return `            (jsonObj.${field.name} !== null) ? jsonObj?.${field.name} : undefined`;
        }
    
        generateToJSONField(field: IApiDataField): string {
            const typeParts = field.type.split("->");
            const baseType = typeParts.length === 2 ? typeParts[1] : field.type;
            if (baseType.endsWith("[]")) {
                const elementType = baseType.slice(0, -2);
                if (["string", "number", "boolean"].includes(elementType)) {
                    return `            ${field.name}: this.${field.name} ?? [],`;
                }
                return `            ${field.name}: (this.${field.name} != null) ? this.${field.name}.map((x) => x.toJson()) : [],`;
            }
            return `            ${field.name}: this.${field.name} != null ? this.${field.name} : undefined,`;
        }
}




const tsconfigJson = {
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "inlineSourceMap": true
    }
}

const packageJSON = {
    "name": "",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "tsc && NODE_ENV=dev node ./dist/app.js",
        "debug": "export DEBUG=* && npm run start",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Govind",
    "license": "ISC",
    "dependencies": {
        "bcrypt": "^5.1.0",
        "body-parser": "^1.20.1",
        "cors": "^2.8.5",
        "crypto": "^1.0.1",
        "debug": "^4.3.4",
        "express": "^4.18.2",
        "express-jwt": "^8.4.1",
        "express-winston": "^4.2.0",
        "jsonwebtoken": "^9.0.0",
        "mongoose": "^6.8.1",
        "winston": "^3.8.2",
        "dotenv": "^16.3.1"
    },
    "devDependencies": {
        "@types/bcrypt": "^5.0.0",
        "@types/cors": "^2.8.13",
        "@types/debug": "^4.1.7",
        "@types/express": "^4.17.15",
        "source-map-support": "^0.5.21",
        "tslint": "^6.1.3",
        "typescript": "^4.9.4"
    }
}

const envFileCode = "";

const appTsCode = `
  import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';

import bodyParser, {json, urlencoded} from 'body-parser';
import mongoose from 'mongoose';
import { CommonRoutesConfig } from './routes/common/common.routes.config';
import dotenv from "dotenv";

const app: express.Application = express();

const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
app.use((err: any, req:express.Request, res:express.Response, next:any) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
app.use(express.json());

app.use(cors());
app.use(urlencoded());
app.use(json());
dotenv.config({ path: ".env.\${process.env.NODE_ENV}" });
mongoose.set('strictQuery', false);

const runningMessage = "Server running ats http://localhost:\${port}";
app.get('/', (req: express.Request, res: express.Response) => {
    
    res.send("Hello World")
});


const server: http.Server = http.createServer(app);


server.listen(port, () => {
    if(process.env.MONGO_DB_URL) {
    mongoose.connect(process.env.MONGO_DB_URL).then(mongoConnection => {
        console.log("Succesfully connected to the data base",routes)
    })
    }
    console.log(runningMessage);
    routes.forEach((route: CommonRoutesConfig) => {
        
    });
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    
});
  `

const routesCode = `
  import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
    abstract configureRoutes(): express.Application;
}
  `


const authCode = `
  
import jwt from 'jsonwebtoken';

const verifyToken = (req: any, res: any, next: any) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const secretKey = process.env.JWT_SECRET_KEY || "";
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;

  `