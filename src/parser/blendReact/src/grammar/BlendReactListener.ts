// Generated from src/grammar/BlendReact.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendReactParser";
import { ModuleDefinitionContext } from "./BlendReactParser";
import { ScreenDefenitionContext } from "./BlendReactParser";
import { ComponentDefenitionContext } from "./BlendReactParser";
import { LayoutDefinitionContext } from "./BlendReactParser";
import { PageDefinitionContext } from "./BlendReactParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendReactParser`.
 */
export interface BlendReactListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendReactParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendReactParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendReactParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	enterScreenDefenition?: (ctx: ScreenDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.screenDefenition`.
	 * @param ctx the parse tree
	 */
	exitScreenDefenition?: (ctx: ScreenDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendReactParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	enterComponentDefenition?: (ctx: ComponentDefenitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.componentDefenition`.
	 * @param ctx the parse tree
	 */
	exitComponentDefenition?: (ctx: ComponentDefenitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendReactParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	enterLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.layoutDefinition`.
	 * @param ctx the parse tree
	 */
	exitLayoutDefinition?: (ctx: LayoutDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendReactParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	enterPageDefinition?: (ctx: PageDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendReactParser.pageDefinition`.
	 * @param ctx the parse tree
	 */
	exitPageDefinition?: (ctx: PageDefinitionContext) => void;
}

