// Generated from src/grammar/BlendRN.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendRNParser";
import { ModuleDefinitionContext } from "./BlendRNParser";
import { ScreenDefenitionContext } from "./BlendRNParser";
import { ComponentDefenitionContext } from "./BlendRNParser";
import { LayoutDefinitionContext } from "./BlendRNParser";
import { PageDefinitionContext } from "./BlendRNParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendRNParser`.
 */
export interface BlendRNListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendRNParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRNParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRNParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	enterScreenDefenition?: (ctx: ScreenDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	exitScreenDefenition?: (ctx: ScreenDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRNParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	enterComponentDefenition?: (ctx: ComponentDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	exitComponentDefenition?: (ctx: ComponentDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRNParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	enterLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	exitLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendRNParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	enterPageDefinition?: (ctx: PageDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendRNParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	exitPageDefinition?: (ctx: PageDefinitionContext) => void;
}

