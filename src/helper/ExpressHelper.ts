import path from 'path';
import { FileHelper } from './fileHelper';


import { IApiSection, ApiType, IApiMainSection, IExpressSection, IApiDataField, IApiSpec } from '../types/apiOperationTypes';
import { IBasicProject } from '../types/basicOperationTypes';
import { IDataField } from '../types/dataOperationTypes';
import BlendApiGrammarHelper from './grammarHelper/BlendApiGrammarHelper';
import APILabelAIHelper from '../ai-models/api-label/APILabelHelper';
import { IMongoSection } from '../types/mongoOperationTypes';
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


    parseSpec() {
        let apiMainSectionList: IApiMainSection[] = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const expressSectionList: IExpressSection[] = [];
            // Ensure the section folder and its data subfolder exist
            const apiFolderPath = path.join(sectionFolderPath, 'api');

            section.expressModuleList.forEach(module => {
                const filePath = path.join(apiFolderPath, `${module.name}.express`);
                const specCode = FileHelper.readFile(filePath);
                let currentSection = this.basicProjectContent.sectionList.find(item =>item.name === sectionName);
                const json = new BlendApiGrammarHelper().parseBlendApi(specCode,currentSection.dataModuleList||[]);
                if (!json.isValid) {
                    throw new Error("Error while parsing the syntax");
                }
                expressSectionList.push(json.json);
            });
            let sectionObj = {
                name: sectionName,
                expressSectionList
            }

            apiMainSectionList.push(sectionObj);


        })

        FileHelper.writeFile(`${this.configPath}/apiConfig.json`, JSON.stringify(apiMainSectionList));


    }

    parseJSONAndGenerateFiles() {
        const apiMainSectionList: IApiMainSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/apiConfig.json`));
        apiMainSectionList.forEach(sectionApi => {
            // console.log(sectionApi.name,"sectionApisectionApisectionApisectionApisectionApisectionApisectionApisectionApi")
            const mainSectionPath = path.join(this.folderPath, `module/${sectionApi.name}`);
            sectionApi.expressSectionList.forEach(expressSection => {
                const expressPath = path.join(mainSectionPath, `express/${sectionApi.name}-api`);
                expressSection.apiSectionList.forEach(apiSection => {
                    // const apiPath = ``
                    this.writeApi(apiSection, expressPath, expressSection,sectionApi.name);
                    this.writeInterfaceCode(apiSection, expressPath, expressSection,sectionApi.name)
                    this.writeApiDatacode(apiSection, expressPath, expressSection);
                    this.writeRouteCode(apiSection, expressPath, expressSection);
                })
            })
        })
    }

    writeApi(apiSection: IApiSection, expressPath: string, expressSection: IExpressSection,mainSectionName: string) {
        const apiCode = this.generateApiCode(apiSection, expressSection,mainSectionName);
        const apiPath = `${expressPath}/src/services/${expressSection.name}`;
        const fileName = `${apiSection.name}/${apiSection.name}.service.ts`
        FileHelper.createFile(`${apiPath}/${fileName}`, apiCode);
    }


    writeInterfaceCode(apiSection: IApiSection, expressPath: string, expressSection: IExpressSection,mainSectionName: string) {
        const interfacePath = `${expressPath}/src-gen/api-interfaces/${expressSection.name}`;
        const fileName = `${apiSection.name}.interface.ts`
        const code = this.generateApiInterfaceCode(apiSection, expressSection,mainSectionName);
        FileHelper.writeFile(`${interfacePath}/${fileName}`, code);
    }

    writeApiDatacode(apiSection: IApiSection, expressPath: string, expressSection: IExpressSection) {
        const dataPath = `${expressPath}/src-gen/api-data/${expressSection.name}`;
        const fileName = `${apiSection.name}.data.ts`
        const code = this.generateSampleApiDataCode(apiSection);
        FileHelper.writeFile(`${dataPath}/${fileName}`, code);
    }

    writeRouteCode(apiSection: IApiSection, expressPath: string, expressSection: IExpressSection) {
        const dataPath = `${expressPath}/src-gen/api-routes/${expressSection.name}`;
        const fileName = `${apiSection.name}.routes.ts`
        const code = this.generateRoutesCode(apiSection, expressSection);
        FileHelper.writeFile(`${dataPath}/${fileName}`, code);
    }


    createExpressProject() {
        this.basicProjectContent.sectionList.forEach(section => {
            if (section.expressModuleList && section.expressModuleList.length > 0) {
                this.createProject(section.name, `${section.name}-api`);
            }
        })

    }

    createProject(sectionName: string, projectName: string) {
        const folderPath = process.cwd(); // Current working directory

        // Path for the section folder inside `spec`
        const sectionFolderPath = path.join(folderPath, `module/${sectionName}/express`, projectName);
        const packageFilePath = path.join(sectionFolderPath, "package.json");
        const tsConfigFilePath = path.join(sectionFolderPath, "tsconfig.json");
        const appTsPath = path.join(sectionFolderPath, "src/app.ts");
        const envPath = path.join(sectionFolderPath, ".env.dev");
        const routesPath = path.join(sectionFolderPath, "src/routes/common/common.routes.config.ts");
        const authPath = path.join(sectionFolderPath, "src/middlewares/auth.ts");
        const swaggerConfigPath = path.join(sectionFolderPath, "src/routes/swaggerConfig.ts");
        const packageFileCode = packageJSON;
        packageFileCode.name = projectName;
        FileHelper.createFile(packageFilePath, JSON.stringify(packageFileCode));
        FileHelper.createFile(tsConfigFilePath, JSON.stringify(tsconfigJson));
        FileHelper.createFile(appTsPath, appTsCode);
        FileHelper.createFile(envPath, envFileCode);
        FileHelper.createFile(routesPath, routesCode);
        FileHelper.createFile(authPath, authCode);
        FileHelper.createFile(swaggerConfigPath, swaggerConfigCode);


    }





    generateApiInterfaceCode(apiSection: IApiSection, expressSection: IExpressSection,mainSectionName: string) {
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
        }, '')}} from '../../api-data/${expressSection.name}/${apiSection.name}.data';
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

    generateSampleApiDataCode(apiSection: IApiSection, type = "api") {
        const code = `
        ${apiSection.apiList.reduce((acc: string, api) => {
            const inputKeyList = Object.keys(api.input);
            const outputKeyList = api.output ? Object.keys(api.output) : [];
            const inputDataTypeName: string = (`${apiSection.name}_${api.name}_Input`).toUpperCase();
            const outputDataTypeName: string = (`${apiSection.name}_${api.name}_Output`).toUpperCase();
            const imports = new Set<string>(); // Collect unique imports
            inputKeyList.forEach(inputKey => {
                const typeParts = api.input[inputKey].type.split("->");
                if (typeParts.length === 2) {
                    const [module, typeName] = typeParts;
                    const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                    if (type === "api") {
                        imports.add(`import { ${baseTypeName} } from '../data/${module}';`);
                    } else {
                        imports.add(`import { ${baseTypeName} } from '../../../../data/${module}';`);
                    }

                }
            })

            outputKeyList.forEach(outputKey => {
                const typeParts = api.output[outputKey].type.split("->");
                if (typeParts.length === 2) {
                    const [module, typeName] = typeParts;
                    const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                    if (type === "api") {
                        imports.add(`import { ${baseTypeName} } from '../data/${module}';`);
                    } else {
                        imports.add(`import { ${baseTypeName} } from '../../../../data/${module}';`);
                    }

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
                        .map((inputKey) => this.generateFromJSONField({ ...api.input[inputKey], name: inputKey }))
                        .join(',\n')}
            );
        }

         toJSON():object {
            return {
    ${inputKeyList
                        .map((inputKey) => this.generateToJSONField({ ...api.input[inputKey], name: inputKey }))
                        .join('\n')}
        };
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
   
constructor(
  ${outputKeyList
                        .map(
                            (outputKey) =>
                                `        public ${outputKey}: ${this.resolveType(api.output[outputKey].type)}${!api.output[outputKey].required ? '|undefined' : ''} = ${this.getDefaultValue(
                                    api.output[outputKey]
                                )},`
                        )
                        .join('\n')}
        ) {}

 static fromJSON(jsonObj: any):${outputDataTypeName} {
            return new ${outputDataTypeName}(
    ${outputKeyList
                        .map((outputKey) => this.generateFromJSONField({ ...api.output[outputKey], name: outputKey }))
                        .join(',\n')}
            );
        }

        
   toJSON():object {
            return {
    ${outputKeyList
                        .map((outputKey) => this.generateToJSONField({ ...api.output[outputKey], name: outputKey }))
                        .join('\n')}
        };
        }
        }
`: ''}

`
            return acc;
        }, "")
            }
        `
        return code
    }
    generateApiCode(apiSection: IApiSection, expressSection: IExpressSection,mainSectionName: string) {

        const serviceName = `${apiSection.name}Service`;
        const interfaceName = `I${apiSection.name}Api`;
        const totalInputs = apiSection.apiList.reduce((acc: number, currVal) => {
            acc = acc + Object.keys(currVal.input).length;
            return acc
        }, 0);
        const code = `
    import express from 'express';\n
    import { ${interfaceName} } from '../../../../src-gen/api-interfaces/${expressSection.name}/${apiSection.name}.interface';\n
${apiSection.apiList.length > 0 && totalInputs > 0 ? `import {${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + `${Object.keys(currVal.input).length > 0 ? `${inputName + ','}` : ``}`;
            return acc
        }, '')}} from '../../../../src-gen/api-data/${expressSection.name}/${apiSection.name}.data';` : ''}

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

    generateRoutesCode(apiSection: IApiSection, expressSection: IExpressSection) {
        const className = `${apiSection.name}Routes`;
        const serviceName = `${apiSection.name}Service`;
        const totalInputs = apiSection.apiList.reduce((acc: number, currVal) => {
            acc = acc + Object.keys(currVal.input).length;
            return acc
        }, 0);
        const code = `
    import { CommonRoutesConfig } from '../../../src/routes/common/common.routes.config';
    import ${serviceName} from '../../../src/services/${expressSection.name}/${apiSection.name}/${apiSection.name}.service';
    import express from 'express';
    import verifyToken from '../../../src/middlewares/auth';
    ${totalInputs > 0 ? `
        ${apiSection.apiList.length > 0 ? `import {${apiSection.apiList.reduce((acc: string, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();
            acc = acc + `${Object.keys(currVal.input).length > 0 ? `${inputName + ','}` : ``}`;
            return acc
        }, '')}} from '../../api-data/${expressSection.name}/${apiSection.name}.data';` : ''}
        `: ``}
    

    export default class ${className} extends CommonRoutesConfig {
        constructor(app: express.Application) {
            super(app, '${className}');
        }
        ${apiSection.name}Service = new ${apiSection.name}Service();

        configureRoutes(): express.Application {

                /**
 * @swagger
 * tags:
 *   - name: ${apiSection.name}
 *     description: APIs inside ${apiSection.name}
 */

            ${apiSection.apiList.reduce((acc, currVal) => {
            const inputName: string = (`${apiSection.name}_${currVal.name}_Input`).toUpperCase();

            acc = acc + `

                    ${this.generateSwaggerSpecCode(expressSection, apiSection, currVal)}
            
                    this.app.route('/${this.getApiName(expressSection.name)}/${this.getApiName(apiSection.name)}/${this.getApiName(currVal.name)}').${currVal.type.toLowerCase()}(${currVal.authenticated === true ? 'verifyToken,' : ''}async (req: express.Request, res: express.Response) => {
                        ${Object.keys(currVal.input).length > 0 ?
                    ` const input: ${inputName} = ${inputName}.fromJSON(${currVal.type == ApiType.Get ? 'req.query' : 'req.body'});
                            const defaultPreCondition = input.checkDefaultPreCondition();
                            if(defaultPreCondition.isValid) {
                            this.${serviceName}.${currVal.name}(${currVal.authenticated === true ? `(req as any),` : ''}input, res);
                            } else {
                                res.status(412).send(defaultPreCondition.errorBody)
                            }`
                    : `
                            
                            this.${serviceName}.${currVal.name}(${currVal.authenticated === true ? `(req as any),` : ''}res);
                            
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

    generateSwaggerSpecCode(expressSection: IExpressSection, apiSection: IApiSection, api: IApiSpec) {
        const inputKeyList = Object.keys(api.input);

        if (api.type === ApiType.Get) {
            return `
            /**
             * @swagger
             * /${this.getApiName(expressSection.name)}/${this.getApiName(apiSection.name)}/${this.getApiName(api.name)}:
             *   get:
             *     security:
             *       - BearerAuth: []
             *     tags:
             *       - ${apiSection.name}
             *     parameters: ${inputKeyList.length == 0 ? '[]' : ''}
    ${inputKeyList
                    .map((item) => {
                        const apiObj: IApiDataField = api.input[item];
                        return `         *       - in: query
             *         name: ${item}
             *         required: ${apiObj.required}
             *         schema:
             *           type: ${this.getType(apiObj.type)}`;
                    })
                    .join("\n")}
             *     responses:
             *       200:
             *         description: Successful response
             *         content:
             *           application/json:
             *             schema:
             *               type: object
             */
            `;
        } else {
            return `
            /**
             * @swagger
             * /${this.getApiName(expressSection.name)}/${this.getApiName(apiSection.name)}/${this.getApiName(api.name)}:
             *   post:
             *     security:
             *       - BearerAuth: []
             *     tags:
             *       - ${apiSection.name}
             *     requestBody:
             *       required: true
             *       content:
             *         application/json:
             *           schema:
             *             type: object
             *             required: [${inputKeyList
                    .filter(inputKey => api.input[inputKey].required)
                    .map(item => `"${item}"`)
                    .join(", ")}]
             *             properties:
    ${inputKeyList
                    .map((item) => {
                        const apiObj: IApiDataField = api.input[item];
                        return `         *               ${item}:
             *                 type: ${this.getType(apiObj.type)}`;
                    })
                    .join("\n")}
             *     responses:
             *       201:
             *         description: Created successfully
             *         content:
             *           application/json:
             *             schema:
             *               type: object
             */
            `;
        }
    }


    getType(type: string) {
        const premitiveTypes = ["string", "number", "boolean", "object"];
        if (premitiveTypes.includes(type)) {
            return type;
        } else if (type.includes("[]")) {
            return "array"
        } else {
            return "object"
        }
    }





    getApiName(apiName: string) {
        return apiName.replace(/[A-Z]/g, m => "-" + m.toLowerCase()).replace(/^-/, '');
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
        console.log(field, "field")
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
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "express-jwt": "^8.4.1",
        "express-winston": "^4.2.0",
        "jsonwebtoken": "^9.0.0",
        "mongoose": "^6.8.1",
        "winston": "^3.8.2"
    },
    "devDependencies": {
        "@types/bcrypt": "^5.0.0",
        "@types/cors": "^2.8.13",
        "@types/debug": "^4.1.7",
        "@types/express": "^4.17.15",
        "@types/swagger-jsdoc": "^6.0.4",
        "@types/swagger-ui-express": "^4.1.8",
        "source-map-support": "^0.5.21",
        "swagger-jsdoc": "^6.2.8",
        "swagger-ui-express": "^5.0.1",
        "tslint": "^6.1.3",
        "typescript": "^4.9.4"
    }
}

const envFileCode = `

`;
const envPath = "./.env.${process.env.NODE_ENV || 'dev'}";

const appTsCode = `
  
  import express from 'express';
import * as http from 'http';

import cors from 'cors';
import debug from 'debug';

import {json, urlencoded} from 'body-parser';
import mongoose from 'mongoose';
import { CommonRoutesConfig } from './routes/common/common.routes.config';
import dotenv from "dotenv";
import UserRoutes from '../src-gen/api-routes/BaskyApi/User.routes';
dotenv.config({ path: \`${envPath}\` });
import { setupSwagger } from '../src/routes/swaggerConfig';
const app: express.Application = express();

app.use(cors({
  origin: '*', // ⚠️ Allow all origins (not recommended for production)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors());
const port = 8000;
const routes: Array<CommonRoutesConfig> = [];
routes.push(new UserRoutes(app))
const debugLog: debug.IDebugger = debug('app');
app.use((err: any, req:express.Request, res:express.Response, next:any) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
app.use(express.json());

app.use(urlencoded());
app.use(json());
mongoose.set('strictQuery', false);
const runningMessage = "Server running ats http://localhost:"+port;
app.get('/', (req: express.Request, res: express.Response) => {
    
    res.send("Hello World")
});


const server: http.Server = http.createServer(app);
setupSwagger(app);

server.listen(port, () => {
  console.log(process.env.NODE_ENV,process.env.API_URL,"process.env.API_URL")
    if(process.env.MONGO_DB_URL) {
    mongoose.connect(process.env.MONGO_DB_URL).then(mongoConnection => {
        console.log("Succesfully connected to the data base",routes)
    })
    }
    console.log(runningMessage);
    routes.forEach((route: CommonRoutesConfig) => {
        
    });
    
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


const swaggerConfigCode = `
  import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:8000", // Change this to match your environment
      },
    ],
  },
  // Specify the **patterns** for Swagger to scan all your route files
  apis: ["src-gen/api-routes/**/*.ts"], // Adjust based on your folder structure
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: any) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}


  
  `