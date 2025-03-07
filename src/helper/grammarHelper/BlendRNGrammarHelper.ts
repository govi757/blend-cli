import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendMongoLexer } from "../../parser/blendMongo/src/grammar/BlendMongoLexer";
import { BlendMongoParser } from "../../parser/blendMongo/src/grammar/BlendMongoParser";
import { IDataBase } from "../../types/mongoOperationTypes";
import { BlendRNLexer } from "../../parser/blendRN/src/grammar/BlendRNLexer";
import { BlendRNParser, LayoutDefinitionContext, ProgramContext } from "../../parser/blendRN/src/grammar/BlendRNParser";
import path from "path";
import { IRNComponent, IRNLayout, IRNModule, IRNScreen } from "../../types/frontendOperationTypes";

export default class BlendRNGrammarHelper {
    parseBlendRN(code: string){
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendRNLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendRNParser(tokenStream);
        const program = parser.program();
        let screenList: IRNScreen[] = [];
        let componentList: IRNComponent[] = [];
        program.screenDefenition().forEach(screen => {
            screen.CAPITAL_IDENTIFIER().forEach(screenName => {
                screenList.push({name: screenName.text,path: screen.PATH_IDENTIFIER().text.replace(/"/g, '')});
            })
        });

        program.componentDefenition().forEach(component => {
            component.CAPITAL_IDENTIFIER().forEach(componentName => {
                componentList.push({name: componentName.text,path: component.PATH_IDENTIFIER().text.replace(/"/g, '')});
            })
        });
        const layout: IRNLayout[] = parseAndCreateLayoutAndScreen(program);
        function parseAndCreateLayoutAndScreen(prgrm: ProgramContext|LayoutDefinitionContext): IRNLayout[] {
            return prgrm.layoutDefinition().map(layout => {
                const layoutList = parseAndCreateLayoutAndScreen(layout);
                const pageList: IRNLayout[] = layout.pageDefinition().map(page => {
                    return {
                        name: page.CAPITAL_IDENTIFIER()[0].text,
                        route: page.PATH_IDENTIFIER().text.replace(/"/g, ''),
                        element: page.CAPITAL_IDENTIFIER()[1].text
                    }
                })
                return {
                    name: layout.CAPITAL_IDENTIFIER().text,
                    route: layout.PATH_IDENTIFIER().text.replace(/"/g, ''),
                    children: [...layoutList,...pageList],
                    type: layout.LAYOUT_TYPE().text
                }
            });
        }
        
        const json:IRNModule = {
            componentList,
            screenList,
            layout,
            name: program.moduleDefinition().CAPITAL_IDENTIFIER().text
        }

        return {
            valid: parser.numberOfSyntaxErrors==0,
            json
        }
        
    }

    
}