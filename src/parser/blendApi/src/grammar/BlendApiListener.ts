// Generated from src/grammar/BlendApi.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendApiParser";
import { SectionDefinitionContext } from "./BlendApiParser";
import { ModuleDefinitionContext } from "./BlendApiParser";
import { ApiDefinitionContext } from "./BlendApiParser";
import { AuthenticatedContext } from "./BlendApiParser";
import { InputDefinitionContext } from "./BlendApiParser";
import { OutputDefinitionContext } from "./BlendApiParser";
import { DirectOutputDefenitionContext } from "./BlendApiParser";
import { FieldContext } from "./BlendApiParser";
import { TypeContext } from "./BlendApiParser";
import { PrimitiveTypeContext } from "./BlendApiParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendApiParser`.
 */
export interface BlendApiListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendApiParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.sectionDefinition`.
	 * @param ctx the parse tree
	 */
	enterSectionDefinition?: (ctx: SectionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.sectionDefinition`.
	 * @param ctx the parse tree
	 */
	exitSectionDefinition?: (ctx: SectionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.apiDefinition`.
	 * @param ctx the parse tree
	 */
	enterApiDefinition?: (ctx: ApiDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.apiDefinition`.
	 * @param ctx the parse tree
	 */
	exitApiDefinition?: (ctx: ApiDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.authenticated`.
	 * @param ctx the parse tree
	 */
	enterAuthenticated?: (ctx: AuthenticatedContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.authenticated`.
	 * @param ctx the parse tree
	 */
	exitAuthenticated?: (ctx: AuthenticatedContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.inputDefinition`.
	 * @param ctx the parse tree
	 */
	enterInputDefinition?: (ctx: InputDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.inputDefinition`.
	 * @param ctx the parse tree
	 */
	exitInputDefinition?: (ctx: InputDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.outputDefinition`.
	 * @param ctx the parse tree
	 */
	enterOutputDefinition?: (ctx: OutputDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.outputDefinition`.
	 * @param ctx the parse tree
	 */
	exitOutputDefinition?: (ctx: OutputDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.directOutputDefenition`.
	 * @param ctx the parse tree
	 */
	enterDirectOutputDefenition?: (ctx: DirectOutputDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.directOutputDefenition`.
	 * @param ctx the parse tree
	 */
	exitDirectOutputDefenition?: (ctx: DirectOutputDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendApiParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendApiParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

