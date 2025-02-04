import path from 'path';
import { IBasicProject } from "../types/basicOperationTypes";
import { FileHelper } from './fileHelper';
import { ICollection, IDataBase, IMongoSection } from '../types/mongoOperationTypes';
import { CommonHelper } from './CommonHelper';

export default class MongoHelper {
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

    doMongoOperations(basicFileContent: string) {
        // Normalize and trim the content to handle extra spaces
        this.basicFileContent = basicFileContent.replace(/\s+/g, ' ').trim();
        this.createMongoSpec();
        this.parseSpec();
    }

    createMongoSpec() {
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            const mongoFolderPath = path.join(sectionFolderPath, 'mongo');
            FileHelper.ensureDir(mongoFolderPath);
            section.mongoModuleList.forEach(module => {
                const mongoFilePath = path.join(mongoFolderPath, `${module.name}.mongo`);
                if (!FileHelper.exists(mongoFilePath)) {
                    FileHelper.writeFile(mongoFilePath, `module ${module.name}`);
                    console.log(`Created mongo file: ${mongoFilePath}`);
                } else {
                }
            })
        })
    }

    parseSpec() {
        let sectionMongoObjList = [];
        this.basicProjectContent.sectionList.forEach(section => {
            const sectionName = section.name;
            const sectionFolderPath = path.join(this.folderPath, 'spec', sectionName);
            let mainMongoObjList = [];
            const mongoFolderPath = path.join(sectionFolderPath, 'mongo');
            console.log(mongoFolderPath, "mongo")

            section.mongoModuleList.forEach(module => {
                const filePath = path.join(mongoFolderPath, `${module.name}.mongo`);
                const specCode = FileHelper.readFile(filePath)
                const mongoRegex = /collection\s+(\w+)\s*\{\s*([\s\S]*?)\s*\}/g;

                const mongoErrorStatus = this.validateMongoSpec(specCode);
                if(mongoErrorStatus.isValid) {

                let mongoMatch;
                let moduleMongoObjList: any[] = [];

                while ((mongoMatch = mongoRegex.exec(specCode)) !== null) {
                    const mongoName = mongoMatch[1];
                    const fields = mongoMatch[2]
                        .split(',')
                        .map((field) => field.trim())
                        .filter((field) => field) // Remove empty fields
                        .map((field) => {
                            const propertyRegex = /property\s+(\w+):\s+(\w+)(\(\w+\))*\s*/;
                            const referenceRegex = /reference\s+(\w+):\s*(\w+)/;
                            let property: any = {};
                            let match;

                            if (match = field.match(propertyRegex)) {
                                const [, name, type] = match;

                                property = { name, type };

                                const attributes = field.match(/\((\w+)\)/g);
                                if (attributes) {
                                    attributes.forEach(param => {
                                        const key = param.replace(/[()]/g, '');
                                        property[key] = true;
                                    });
                                }
                            }
                            else if ((match = field.match(referenceRegex))) {
                                const [, name, ref] = match;
                                property = { name, type: "Object", ref };
                            }
                            return property
                        });

                    const dataObj = {
                        name: mongoName,
                        fields
                    }
                    moduleMongoObjList.push(dataObj);
                }
                const moduleDataObj = {
                    dbName: module.name,
                    collectionList: moduleMongoObjList
                }
                mainMongoObjList.push(moduleDataObj);
            } else {
                console.log(mongoErrorStatus.errors,"Errors")
            }
            })
            let sectionObj = {
                name: sectionName,
                sectionDbList: mainMongoObjList
            }

            sectionMongoObjList.push(sectionObj);
        }
        )
        FileHelper.writeFile(`${this.configPath}/mongoConfig.json`, JSON.stringify(sectionMongoObjList));
    }

    validateMongoSpec(specCode: string): { isValid: boolean; errors: string[] } {
        const errors: string[] = [];
    
        const lines = specCode.split("\n").map(line => line.trim());
        let lineNumber = 0;
    
        const collectionRegex = /collection\s+(\w+)\s*\{\s*([\s\S]*?)\s*\}/g;
        let collectionMatch;
    
        while ((collectionMatch = collectionRegex.exec(specCode)) !== null) {
            const collectionName = collectionMatch[1];
            const fieldsBlock = collectionMatch[2].trim();
            
            // Find the line number where the collection starts
            lineNumber = lines.findIndex(line => line.includes(`collection ${collectionName}`)) + 1;
    
            if (!fieldsBlock) {
                errors.push(`Line ${lineNumber}: Collection '${collectionName}' must have at least one field.`);
                continue;
            }
    
            const fieldLines = fieldsBlock.split(',').map(line => line.trim()).filter(line => line);
    
            fieldLines.forEach(field => {
                lineNumber = lines.findIndex(line => line.includes(field)) + 1;
    
                const propertyRegex = /^property\s+(\w+):\s+(\w+)(\(([\w,]+)\))*\s*$/;
                const referenceRegex = /^reference\s+(\w+):\s*(\w+)\s*$/;
    
                let match;
                if ((match = field.match(propertyRegex))) {
                    const [, name, type, , attributes] = match;
    
                    if (!name || !type) {
                        errors.push(`Line ${lineNumber}: Invalid property syntax in collection '${collectionName}'.`);
                    }
    
                    if (attributes) {
                        const validAttributes = ["unique", "index", "required"];
                        const attrList = attributes.split(',');
                        attrList.forEach(attr => {
                            if (!validAttributes.includes(attr.trim())) {
                                errors.push(`Line ${lineNumber}: Invalid attribute '${attr.trim()}' in property '${name}' of collection '${collectionName}'.`);
                            }
                        });
                    }
                } else if ((match = field.match(referenceRegex))) {
                    const [, name, ref] = match;
                    
                    if (!name || !ref) {
                        errors.push(`Line ${lineNumber}: Invalid reference syntax in collection '${collectionName}'.`);
                    }
                } else {
                    errors.push(`Line ${lineNumber}: Invalid field definition in collection '${collectionName}': '${field}'`);
                }
            });
        }
    
        return { isValid: errors.length === 0, errors };
    }
    

    parseJSONAndGenerateFiles() {
        try {
            const sectionMongoList: IMongoSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/mongoConfig.json`));
            sectionMongoList.map(sectionMongo => {
                const sectionPath = path.join(this.folderPath, `module/${sectionMongo.name}`);
                sectionMongo.sectionDbList.forEach(moduleDb => {
                    this.basicProjectContent.sectionList.forEach(section => {
                        section.expressModuleList.forEach(expressModule => {
                            if (section.name == sectionMongo.name) {
                                const expressDbPath = `${this.folderPath}/module/${section.name}/${expressModule.name}/src-gen/models/${moduleDb.dbName}`
                                moduleDb.collectionList.forEach(collection => {
                                    const expressCollectionPath = `${expressDbPath}/${collection.name}.ts`;
                                    const finalCode = this.generateCollectionCode(collection, moduleDb.dbName);
                                    FileHelper.writeFile(expressCollectionPath, finalCode);
                                })
                                const dbFilePath = `${this.folderPath}/module/${section.name}/${expressModule.name}/src-gen/models/Database.ts`;
                                const dbCode = this.generateDatabaseCodeFile(sectionMongo.sectionDbList);
                                FileHelper.writeFile(dbFilePath, dbCode);
                                const dbInterfaceFilePath = `${this.folderPath}/module/${section.name}/${expressModule.name}/src-gen/models/${moduleDb.dbName}/interfaces.ts`;
                                const interfaceCode = this.generateCollectionInterfaceCode(moduleDb.collectionList, moduleDb.dbName);
                                FileHelper.writeFile(dbInterfaceFilePath, interfaceCode);

                            }
                        });
                    })
                })
            })
        } catch (e) {

        }
    }


    generateCollectionCode(collection: ICollection, dbName: string) {
        const interfaceName: string = `I${collection.name}_${dbName}`;
        const code = `
import Database from '../Database';
import { Schema, model, connect, ObjectId } from 'mongoose';\n
import {${interfaceName}} from './interfaces';
const ${collection.name}Schema = new Schema<${interfaceName}>({
    ${collection.fields.reduce((acc: any, currVal) => {
            acc = acc + `${currVal.name}: {type: ${currVal.type} ${currVal.required ? ',required:true' : ''} ${currVal.index ? ",index:true" : ""}${currVal.unique ? ',unique:true' : ''}${currVal.ref ? `,ref:"${currVal.ref}"` : ''}},\n\t`;
            return acc;
        }, "")
            }
});

const ${collection.name} = Database.${dbName}Db.model<${interfaceName}>('${collection.name}', ${collection.name}Schema);

export default ${collection.name};
`
        return code;
    }


    generateCollectionInterfaceCode(collectionList: ICollection[], dbName: string) {
        const code = collectionList.reduce((acc, collection) => {
            acc = acc +
                `
        export interface I${collection.name}_${dbName} {
            ${collection.fields.reduce((acc: any, currVal) => {
                    acc = acc + `${currVal.name}: ${currVal.type},\n\t\t\t`;
                    return acc;
                }, "")
                }
        };\n
            `
            return acc;
        }, "")
        return code;
    }


    generateDatabaseCodeFile(dbList: IDataBase[]) {
        const code = `
import mongoose from "mongoose";

export default class Database {
${dbList.reduce((acc, db) => {
            acc = acc + `static ${db.dbName}Db = mongoose.connection.useDb('${CommonHelper.hyphenSepratedString(db.dbName)}'); \n`
            return acc;
        }, '')}
}
        `

        return code;
    }
}