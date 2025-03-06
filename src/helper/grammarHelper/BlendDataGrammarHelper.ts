import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendDataLexer } from "../../parser/blendData/src/grammar/BlendDataLexer";
import { BlendDataParser, DataDefinitionContext, FieldContext } from "../../parser/blendData/src/grammar/BlendDataParser";

export default class BlendDataGrammarHelper {
       parseBlendData(code: string) {
            const inputStream = CharStreams.fromString(code);
            const lexer = new BlendDataLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new BlendDataParser(tokenStream);
            const mainSection = parser.program(); // Assuming the root rule is "program" that contains multiple sections
            const dataDefenitionList = mainSection.dataDefinition();
            let hasError = false;
          
            const dataSet = new Set();
            const moduleDataObject = {
                name: mainSection.moduleDefinition().CAPITAL_IDENTIFIER().text,
                dataList:   dataDefenitionList.map((dataDefinition: DataDefinitionContext) => {
                    const dataName = dataDefinition.CAPITAL_IDENTIFIER().text;
                    if(dataSet.has(dataName)) {
                        hasError = true;
                        console.log(`Duplicate Data ${dataName} found`)
                    }
                    dataSet.add(dataDefinition.CAPITAL_IDENTIFIER().text)
                    const fieldSet = new Set();
                    return {
                        name: dataDefinition.CAPITAL_IDENTIFIER().text,
                        fields: dataDefinition.field().map((field: FieldContext) => {
                            const fieldName = field.IDENTIFIER().text;
                                if(fieldSet.has(fieldName)) {
                                    hasError = true;
                                    console.log(`Field Data ${fieldName} found in ${dataName}`)
                                }
                                fieldSet.add(fieldName);
                            return {
                                name: fieldName,
                                requred: !field.type().text.includes("?"),
                                type: field.type().text.replace("?",""),
                            }
                        })
                    }
                    
                    
                })
            }
            
            return {valid: parser.numberOfSyntaxErrors===0&&!hasError,moduleDataObject};
        }
}