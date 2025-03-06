import path from 'path';
import { IBasicProject } from "../types/basicOperationTypes";
import { FileHelper } from './fileHelper';
import { ICollection, IDataBase, IMongoSection } from '../types/mongoOperationTypes';
import { CommonHelper } from './CommonHelper';
import BlendMongoGrammarHelper from './grammarHelper/BlendMongoGrammarHelper';

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
            let mainMongoObjList: IDataBase[] = [];
            const mongoFolderPath = path.join(sectionFolderPath, 'mongo');
            console.log(mongoFolderPath, "mongo")

            section.mongoModuleList.forEach(module => {
                const filePath = path.join(mongoFolderPath, `${module.name}.mongo`);
                const specCode = FileHelper.readFile(filePath);
                const mongoHelper = new BlendMongoGrammarHelper();
                const json = mongoHelper.parseBlendMongo(specCode);
                mainMongoObjList.push(json.json);

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


    parseJSONAndGenerateFiles() {
        try {
            const sectionMongoList: IMongoSection[] = JSON.parse(FileHelper.readFile(`${this.configPath}/mongoConfig.json`));
            sectionMongoList.map(sectionMongo => {
                const sectionPath = path.join(this.folderPath, `module/${sectionMongo.name}`);
                sectionMongo.sectionDbList.forEach(moduleDb => {
                    this.basicProjectContent.sectionList.forEach(section => {
                        section.expressModuleList.forEach(expressModule => {
                            if (section.name == sectionMongo.name) {
                                const expressDbPath = `${this.folderPath}/module/${section.name}/express/${section.name}-api/src-gen/models/${expressModule.name}/${moduleDb.dbName}`
                                moduleDb.collectionList.forEach(collection => {
                                    const expressCollectionPath = `${expressDbPath}/${collection.name}.ts`;
                                    const finalCode = this.generateCollectionCode(collection, moduleDb.dbName);
                                    FileHelper.writeFile(expressCollectionPath, finalCode);
                                })
                                const dbFilePath = `${this.folderPath}/module/${section.name}/express/${section.name}-api/src-gen/models/${expressModule.name}/Database.ts`;
                                const dbCode = this.generateDatabaseCodeFile(sectionMongo.sectionDbList);
                                FileHelper.writeFile(dbFilePath, dbCode);
                                const dbInterfaceFilePath = `${this.folderPath}/module/${section.name}/express/${section.name}-api/src-gen/models/${expressModule.name}/${moduleDb.dbName}/interfaces.ts`;
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
import { Schema, model, connect, Types } from 'mongoose';\n
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
        const code = 'import { ObjectId } from "mongoose";\n'+ collectionList.reduce((acc, collection) => {
            acc = acc +
                `
        export interface I${collection.name}_${dbName} {
            ${collection.fields.reduce((acc: any, currVal) => {
                    acc = acc + `${currVal.name}: ${currVal.type.replace("Types.","")},\n\t\t\t`;
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