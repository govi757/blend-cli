import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendApiLexer } from "../../parser/blendApi/src/grammar/BlendApiLexer";
import { BlendApiParser } from "../../parser/blendApi/src/grammar/BlendApiParser";
import { IApiMainSection, IApiSection, IApiSpec, IExpressSection } from "../../types/apiOperationTypes";

export default class BlendApiGrammarHelper {
    parseBlendApi(code: string) {
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendApiLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendApiParser(tokenStream);

        const mainModule = parser.program();
        const json: IExpressSection = {
            name: mainModule.moduleDefinition().CAPITAL_IDENTIFIER().text,
            apiSectionList: mainModule.sectionDefinition().map(item => {
                const apiSection: IApiSection = {
                    name: item.CAPITAL_IDENTIFIER().text, apiList: item.apiDefinition().map(api => {
                        const apiSpec: IApiSpec = {
                            input: {},
                            output: {},
                            name: api.IDENTIFIER().text,
                            type: api.HTTP_METHOD().text,
                            directOutput: api.outputDefinition()?.directOutputDefenition()?.type()? {
                                required: !api.outputDefinition()?.directOutputDefenition()?.type().text.includes("?"),
                                name: api.outputDefinition()?.directOutputDefenition()?.type().text?.replace("?", ""),
                            }:{},
                            authenticated: api?.authenticated()?.text=="authenticated"
                        }
                        api.inputDefinition()?.field()?.forEach(field => {
                            apiSpec.input[field.IDENTIFIER().text] = { type: field.type().text?.replace("?", ""), required: !field?.type().text.includes("?") };
                        })
                        api.outputDefinition()?.field()?.forEach(field => {
                            apiSpec.output[field.IDENTIFIER().text] = { type: field.type().text?.replace("?", ""), required: !field?.type().text.includes("?") };
                        })
                        return apiSpec;
                    })
                }
                return apiSection;
            }),
            includedDataModuleList: []
        }
        return { isValid: parser.numberOfSyntaxErrors === 0, json };
    }
}