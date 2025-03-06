import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendMongoLexer } from "../../parser/blendMongo/src/grammar/BlendMongoLexer";
import { BlendMongoParser } from "../../parser/blendMongo/src/grammar/BlendMongoParser";
import { IDataBase } from "../../types/mongoOperationTypes";
import { BlendRNLexer } from "../../parser/blendRN/src/grammar/BlendRNLexer";
import { LayoutDefinitionContext, ProgramContext } from "../../parser/blendReact/src/grammar/BlendReactParser";
import path from "path";
import { BlendReactLexer } from "../../parser/blendReact/src/grammar/BlendReactLexer";
import { BlendReactParser } from "../../parser/blendReact/src/grammar/BlendReactParser";
import { IReactLayout, IReactModule, IReactScreen } from "../../types/frontendOperationTypes";

export default class BlendReactGrammarHelper {
    parseBlendReact(code: string){
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendReactLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendReactParser(tokenStream);
        const program = parser.program();
        let screenList: IReactScreen[] = [];
        let componentList: IReactScreen[] = [];
        program.screenDefenition().forEach(screen => {
            screen.CAPITAL_IDENTIFIER().forEach(screenName => {
                screenList.push({name: screenName.text,path: screen.PATH_IDENTIFIER().text.replace(/"/g, '')});
            })
        });
        program.componentDefenition().forEach(screen => {
            screen.CAPITAL_IDENTIFIER().forEach(screenName => {
                componentList.push({name: screenName.text,path: screen.PATH_IDENTIFIER().text.replace(/"/g, '')});
            })
        });
        const layout: IReactLayout[] = parseAndCreateLayoutAndScreen(program);
        function parseAndCreateLayoutAndScreen(prgrm: ProgramContext|LayoutDefinitionContext): IReactLayout[] {
            return prgrm.layoutDefinition().map(layout => {
                const layoutList = parseAndCreateLayoutAndScreen(layout);
                const pageList: IReactLayout[] = layout.pageDefinition().map(page => {
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
                }
            });
        }
        
        const json:IReactModule = {
            componentList,
            screenList,
            layout,
            name: program.moduleDefinition().CAPITAL_IDENTIFIER().text.toLocaleLowerCase()
        }

        return {
            valid: parser.numberOfSyntaxErrors==0,
            json
        }
        
    }

    
}