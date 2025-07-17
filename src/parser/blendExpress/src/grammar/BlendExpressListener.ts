// Generated from src/grammar/BlendExpress.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendExpressParser";
import { SectionDefinitionContext } from "./BlendExpressParser";
import { ModuleDefinitionContext } from "./BlendExpressParser";
import { ApiDefinitionContext } from "./BlendExpressParser";
import { AuthenticatedContext } from "./BlendExpressParser";
import { InputDefinitionContext } from "./BlendExpressParser";
import { OutputDefinitionContext } from "./BlendExpressParser";
import { DirectOutputDefenitionContext } from "./BlendExpressParser";
import { FieldContext } from "./BlendExpressParser";
import { TypeContext } from "./BlendExpressParser";
import { PrimitiveTypeContext } from "./BlendExpressParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendExpressParser`.
 */
export interface BlendExpressListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendExpressParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.sectionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSectionDefinition?: (ctx: SectionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.sectionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSectionDefinition?: (ctx: SectionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.apiDefinition`.
	 * @param ctx the parse tree
	 */
	enterApiDefinition?: (ctx: ApiDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.apiDefinition`.
	 * @param ctx the parse tree
	 */
	exitApiDefinition?: (ctx: ApiDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.authenticated`.
	 * @param ctx the parse tree
	 */
	enterAuthenticated?: (ctx: AuthenticatedContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.authenticated`.
	 * @param ctx the parse tree
	 */
	exitAuthenticated?: (ctx: AuthenticatedContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.inputDefinition`.
	 * @param ctx the parse tree
	 */
	enterInputDefinition?: (ctx: InputDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.inputDefinition`.
	 * @param ctx the parse tree
	 */
	exitInputDefinition?: (ctx: InputDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.outputDefinition`.
	 * @param ctx the parse tree
	 */
	enterOutputDefinition?: (ctx: OutputDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.outputDefinition`.
	 * @param ctx the parse tree
	 */
	exitOutputDefinition?: (ctx: OutputDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.directOutputDefenition`.
	 * @param ctx the parse tree
	 */
	enterDirectOutputDefenition?: (ctx: DirectOutputDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.directOutputDefenition`.
	 * @param ctx the parse tree
	 */
	exitDirectOutputDefenition?: (ctx: DirectOutputDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendExpressParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendExpressParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

