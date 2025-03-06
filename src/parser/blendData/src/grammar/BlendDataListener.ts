// Generated from src/grammar/BlendData.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendDataParser";
import { ModuleDefinitionContext } from "./BlendDataParser";
import { DataDefinitionContext } from "./BlendDataParser";
import { FieldContext } from "./BlendDataParser";
import { TypeContext } from "./BlendDataParser";
import { BaseTypeContext } from "./BlendDataParser";
import { PrimitiveTypeContext } from "./BlendDataParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendDataParser`.
 */
export interface BlendDataListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendDataParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.dataDefinition`.
	 * @param ctx the parse tree
	 */
	enterDataDefinition?: (ctx: DataDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.dataDefinition`.
	 * @param ctx the parse tree
	 */
	exitDataDefinition?: (ctx: DataDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendDataParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendDataParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

