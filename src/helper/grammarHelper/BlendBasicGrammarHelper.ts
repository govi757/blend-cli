import { CharStreams, CommonTokenStream } from "antlr4ts";
import { BlendBasicLexer } from "../../parser/blendbasic/src/grammar/BlendBasicLexer";
import { BlendBasicParser, SectionContext, ModuleContext, DataModuleContext, ExpressModuleContext, RnModuleContext, MongoModuleContext, ReactModuleContext } from "../../parser/blendbasic/src/grammar/BlendBasicParser";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import GrammarErrorHelper from "./GrammarErrorHelper";

export default class BlendBasicGrammarHelper extends AbstractParseTreeVisitor<any> {
    protected defaultResult() {
        return {}; // Avoid errors if visitChildren returns nothing
    }

    parseBlendBasic(code: string) {
        const inputStream = CharStreams.fromString(code);
        const lexer = new BlendBasicLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new BlendBasicParser(tokenStream);
        const sectionsList = parser.sections(); // Assuming the root rule is "program" that contains multiple sections
        const sections = sectionsList.section().map(section => this.visitSection(section));
        const basicJson = {
            name: "BlendBasicConfig",
            description: "Basic config for swing",
            createdAt: new Date().toISOString(),
            sectionList: sections
        };
        return {valid: parser.numberOfSyntaxErrors===0,basicJson};
    }

    visitSection(ctx: SectionContext): any {
        const sectionName = ctx.IDENTIFIER().text;

        // Lists for categorized modules
        const dataModuleList: string[] = [];
        const expressModuleList: any[] = [];
        const rnModuleList: any[] = [];
        const mongoModuleList: any[] = [];
        const reactModuleList: any[] = [];

        ctx.module().forEach(mod => {
            const resultList = this.visitModule(mod);
            console.log(resultList,"resultList")
            if (!resultList) return;
            resultList.map(result => {
                if (result.type === "data-module") {
                    dataModuleList.push(result.name);
                } else if (result.type === "express-module") {
                    expressModuleList.push({ name: result.name });
                } else if (result.type === "rn-module") {
                    rnModuleList.push({ name: result.name });
                } else if (result.type === "mongo-module") {
                    mongoModuleList.push({ name: result.name });
                }
                else if (result.type === "react-module") {
                    reactModuleList.push({ name: result.name });
                }
            })

            
        });

        return {
            name: sectionName,
            dataModuleList,
            expressModuleList,
            rnModuleList,
            mongoModuleList,
            reactModuleList
        };
    }

    visitModule(ctx: ModuleContext): any {
        // Handle multiple identifiers
        const moduleType = ctx.children?.[0].text; // First token is the type (e.g., data-module)
        console.log(moduleType,"moduleType")
        if(ctx.dataModule()) return this.visitDataModule(ctx.dataModule())
        if(ctx.expressModule()) return this.visitExpressModule(ctx.expressModule())
        if(ctx.rnModule()) return this.visitRnModule(ctx.rnModule())
        if(ctx.mongoModule()) return this.visitMongoModule(ctx.mongoModule())
        if(ctx.reactModule()) return this.visitReactModule(ctx.reactModule())
    }

    visitDataModule(ctx: DataModuleContext): any {
        return ctx.IDENTIFIER().map(id => ({ type: "data-module", name: id.text }));
    }
    
    visitExpressModule(ctx: ExpressModuleContext): any {
        return ctx.IDENTIFIER().map(id => ({ type: "express-module", name: id.text }));
    }
    
    visitRnModule(ctx: RnModuleContext): any {
        return ctx.IDENTIFIER().map(id => ({ type: "rn-module", name: id.text }));
    }
    
    visitMongoModule(ctx: MongoModuleContext): any {
        return ctx.IDENTIFIER().map(id => ({ type: "mongo-module", name: id.text }));
    }

    visitReactModule(ctx: ReactModuleContext): any {
        return ctx.IDENTIFIER().map(id => ({ type: "react-module", name: id.text }));
    }
    
}
