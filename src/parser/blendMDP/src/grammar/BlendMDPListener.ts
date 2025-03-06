// Generated from src/grammar/BlendMDP.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendMDPParser";
import { ModuleDefinitionContext } from "./BlendMDPParser";
import { ParentDefinitionContext } from "./BlendMDPParser";
import { PropsDefinitionContext } from "./BlendMDPParser";
import { PropsBodyDefinitionContext } from "./BlendMDPParser";
import { PrimitiveTypeContext } from "./BlendMDPParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendMDPParser`.
 */
export interface BlendMDPListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendMDPParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMDPParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMDPParser.parentDefinition`.
	 * @param ctx the parse tree
	 */
	enterParentDefinition?: (ctx: ParentDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.parentDefinition`.
	 * @param ctx the parse tree
	 */
	exitParentDefinition?: (ctx: ParentDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMDPParser.propsDefinition`.
	 * @param ctx the parse tree
	 */
	enterPropsDefinition?: (ctx: PropsDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.propsDefinition`.
	 * @param ctx the parse tree
	 */
	exitPropsDefinition?: (ctx: PropsDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMDPParser.propsBodyDefinition`.
	 * @param ctx the parse tree
	 */
	enterPropsBodyDefinition?: (ctx: PropsBodyDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.propsBodyDefinition`.
	 * @param ctx the parse tree
	 */
	exitPropsBodyDefinition?: (ctx: PropsBodyDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMDPParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMDPParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

