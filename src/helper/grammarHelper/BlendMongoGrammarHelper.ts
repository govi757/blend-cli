import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendMongoLexer } from "../../parser/blendMongo/src/grammar/BlendMongoLexer";
import { BlendMongoParser } from "../../parser/blendMongo/src/grammar/BlendMongoParser";
import { IDataBase } from "../../types/mongoOperationTypes";

export default class BlendMongoGrammarHelper {
    parseBlendMongo(code: string){
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendMongoLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendMongoParser(tokenStream);
        const program = parser.program();
        const moduleDefinition = program.moduleDefinition();
        const collectionDefinitionList = program.collectionDefinition();
        const json: IDataBase = {
            dbName: moduleDefinition.CAPITAL_IDENTIFIER().text,
            collectionList: collectionDefinitionList.map(collectionDefinition => {
                const propertyFields = collectionDefinition.property().map(property => {
                    return {
                        name: property.IDENTIFIER().text,
                        type: property.type().text,
                        unique: property.propertyChars()?.mongoChars()?property.propertyChars()?.mongoChars()?.findIndex(item => item.text === "unique") !=-1: undefined,
                        index: property.propertyChars()?.mongoChars()?property.propertyChars()?.mongoChars()?.findIndex(item => item.text === "index") !=-1: undefined,
                        // ref: collectionDefinition.reference()?collectionDefinition.reference()?.CAPITAL_IDENTIFIER().text:undefined,
                    }
                });

                const referenceFields = collectionDefinition.reference()?.map(reference => {
                    return {
                        name: reference.IDENTIFIER().text,
                        type: 'Types.ObjectId',
                        unique: reference.propertyChars()?.mongoChars()?reference.propertyChars()?.mongoChars()?.findIndex(item => item.text === "unique") !=-1: undefined,
                        index: reference.propertyChars()?.mongoChars()?reference.propertyChars()?.mongoChars()?.findIndex(item => item.text === "index") !=-1: undefined,
                        ref: reference?.CAPITAL_IDENTIFIER().text,
                    }
                });
                return {
                    name: collectionDefinition.CAPITAL_IDENTIFIER().text,
                    fields: [...propertyFields,...referenceFields]
                }
            })
            
        }

        return {
            isValid: parser.numberOfSyntaxErrors>0,
            json: json
        }
    }
}