import path from 'path';
import { FileHelper } from './fileHelper';
import { IDataField, IDataModule, IDataSection } from '../types/dataOperationTypes';
import { IBasicProject, IBasicSection } from '../types/basicOperationTypes';
const basicDataTypes = ["string","object","boolean","number","any"];
export default class DataHelper {
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

    doDataOperations(basicFileContent) {
        try {

            this.basicFileContent = basicFileContent;
            this.createDataSpec();
            this.parseSpec();
        } catch(e) {

        }
    }

    createDataSpec() {
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name.trim();
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const dataFolderPath = path.join(sectionFolderPath, 'data');
            section.dataModuleList.forEach(dataModule => {
                const dataFilePath = path.join(dataFolderPath, `${dataModule}.data`);
                if (!FileHelper.exists(dataFilePath)) {
                    FileHelper.writeFile(dataFilePath, `module ${dataModule}`);
                } else {
                }
            })
        })
    }

    parseSpec() {
        let sectionDataObjList = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            let mainDataObjList = [];
            const dataFolderPath = path.join(sectionFolderPath, 'data');
            console.log(dataFolderPath, "dataFolderPath")
            section.dataModuleList.forEach(module => {
                const filePath = path.join(dataFolderPath, `${module}.data`);
                const specCode = FileHelper.readFile(filePath)
                const dataRegex = /data\s+([a-zA-Z0-9_]+)\(\s*([\s\S]*?)\)/g;
                let dataMatch;
                let moduleDataObjList: any[] = [];

                while ((dataMatch = dataRegex.exec(specCode)) !== null) {
                    const dataName = dataMatch[1];
                    const fields = dataMatch[2]
                        .split(',')
                        .map((field) => field.trim())
                        .filter((field) => field) // Remove empty fields
                        .map((field) => {
                            const [name, typeWithRequired] = field.split(':').map((s) => s.trim());
                            const isRequired = !typeWithRequired.endsWith('?');
                            const type = isRequired
                                ? typeWithRequired
                                : typeWithRequired.slice(0, -1);

                            return {
                                name,
                                type,
                                required: isRequired,
                            };
                        });

                    const dataObj = {
                        name: dataName,
                        fields
                    }
                    moduleDataObjList.push(dataObj);
                }
                const moduleDataObj = {
                    name: module,
                    dataList: moduleDataObjList
                }
                mainDataObjList.push(moduleDataObj);
            })
            let sectionObj = {
                name: sectionName,
                sectionDataList: mainDataObjList
            }

            sectionDataObjList.push(sectionObj);
        });
        FileHelper.writeFile(`${this.configPath}/dataConfig.json`, JSON.stringify(sectionDataObjList));
    }


    parseJSONAndGenerateFiles() {
        try {
        const sectionDataList: IDataSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/dataConfig.json`));

        sectionDataList.forEach(async (sectionData) => {
            const sectionPath = path.join(this.folderPath, `module/${sectionData.name}`);
            sectionData.sectionDataList.forEach(async (moduleData) => {
                const dataPath = path.join(sectionPath, `data/${moduleData.name}.ts`);

                const imports = new Set<string>(); // Collect unique imports

                // Generate class definitions
                const classesCode = moduleData.dataList
                    .map((curItem) => {
                        // Collect imports for fields with types like "Module->ClassName"
                        curItem.fields.forEach((field) => {
                            const typeParts = field.type.split("->");
                            if (typeParts.length === 2) {
                                const [module, typeName] = typeParts;
                                const baseTypeName = typeName.endsWith("[]") ? typeName.slice(0, -2) : typeName;
                                imports.add(`import { ${baseTypeName} } from './${module}';`);
                            }
                        });

                        // Generate the class code
                        return `
    export class ${curItem.name} {
        constructor(
    ${curItem.fields
                                .map(
                                    (field) =>
                                        `        public ${field.name}: ${this.resolveType(field.type)}${!field.required ? '|undefined' : ''} = ${this.getDefaultValue(
                                            field,moduleData
                                        )},`
                                )
                                .join('\n')}
        ) {}
    
        static fromJSON(jsonObj: any): ${curItem.name} {
            return new ${curItem.name}(
    ${curItem.fields
                                .map((field) => this.generateFromJSONField(field))
                                .join(',\n')}
            );
        }
    
        public toJson(): object {
            return {
    ${curItem.fields
                                .map((field) => this.generateToJSONField(field))
                                .join('\n')}
            };
        }
    }
                        `;
                    })
                    .join('\n');

                // Combine imports and class definitions
                const finalCode = `
    ${Array.from(imports).join('\n')}
    
    ${classesCode}
    `;
                FileHelper.writeFile(dataPath, finalCode);
                this.basicProjectContent.sectionList.forEach(section => {
                    section.expressModuleList.forEach(expressModule => {
                        // if (expressModule.includedDataModuleList.includes(moduleData.name)) {
                        if(section.name==sectionData.name) {
                            const expressDataPath = `${this.folderPath}/module/${section.name}/${expressModule.name}/src-gen/data/${moduleData.name}.ts`
                            FileHelper.writeFile(expressDataPath, finalCode);
                        }
                            
                        // }
                    });

                    section.rnModuleList.forEach(rnModule => {
                        // if (expressModule.includedDataModuleList.includes(moduleData.name)) {
                        if(section.name==sectionData.name) {
                            const rnDataPath = `${this.folderPath}/module/${section.name}/react-native/${rnModule.name}/src-gen/data/${moduleData.name}.ts`
                            FileHelper.writeFile(rnDataPath, finalCode);
                        }
                            
                        // }
                    });
                })

            });
        });
    } catch(e) {
        
    }
    }

    resolveType(type: string): string {
        const typeParts = type.split("->");
        const baseType = typeParts.length === 2 ? typeParts[1] : type;
        return baseType.endsWith("[]") ? `${baseType.slice(0, -2)}[]` : baseType; // Handle array types
    }

    getDefaultValue(field: IDataField,curItem: IDataModule): string {
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
        
        if(!basicDataTypes.includes(field.type)) {
            const currentFieldType = curItem.dataList.find(item => item.name==field.type);
            if(!currentFieldType) {
                throw new Error(`unable to find out ${currentFieldType}`);
            } else {
                if(field.required) {
                    return `new ${currentFieldType.name}()`
                } else {
                    return undefined
                }
            }
        }
         else {


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

    }

    generateFromJSONField(field: IDataField): string {
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
        if(!basicDataTypes.includes(baseType)) {
            const baseTypeName = baseType.endsWith("[]") ? baseType.slice(0, -2) : baseType;
            return `            (jsonObj.${field.name} != null) ? ${baseTypeName}.fromJSON(jsonObj.${field.name}) : new ${baseTypeName}()`;
        }
        return `            (jsonObj.${field.name} !== null) ? jsonObj?.${field.name} : undefined`;
    }

    generateToJSONField(field: IDataField): string {
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
