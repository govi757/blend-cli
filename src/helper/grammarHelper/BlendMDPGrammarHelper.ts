import { CharStreams, CommonTokenStream } from "antlr4ts";
import {  } from "../../parser/blendbasic/src/grammar/BlendBasicLexer";
import {  SectionContext, ModuleContext, DataModuleContext, ExpressModuleContext, RnModuleContext, MongoModuleContext, ReactModuleContext } from "../../parser/blendbasic/src/grammar/BlendBasicParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { BlendMDPLexer } from "../../parser/blendMDP/src/grammar/BlendMDPLexer";
import { BlendMDPParser } from "../../parser/blendMDP/src/grammar/BlendMDPParser";

export default class BlendMDPGrammarHelper extends AbstractParseTreeVisitor<any> {
    protected defaultResult() {
        return {}; // Avoid errors if visitChildren returns nothing
    }

    parseBlendMDP(code: string) {
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendMDPLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendMDPParser(tokenStream);
        const program = parser.program(); 
        
        const mdpJson = {
            name: program.moduleDefinition().CAPITAL_IDENTIFIER().text,
            propsList: program.propsDefinition().propsBodyDefinition().map(propsBody => {
                return {
                    name: propsBody.IDENTIFIER().text,
                    type: propsBody.CAPITAL_IDENTIFIER().text
                }
            })
        };
        return {valid: parser.numberOfSyntaxErrors===0,mdpJson};
    }

    
}
