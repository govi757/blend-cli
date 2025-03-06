// Generated from src/grammar/BlendMongo.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./BlendMongoParser";
import { ModuleDefinitionContext } from "./BlendMongoParser";
import { CollectionDefinitionContext } from "./BlendMongoParser";
import { PropertyContext } from "./BlendMongoParser";
import { PropertyCharsContext } from "./BlendMongoParser";
import { ReferenceContext } from "./BlendMongoParser";
import { MongoCharsContext } from "./BlendMongoParser";
import { TypeContext } from "./BlendMongoParser";
import { BaseTypeContext } from "./BlendMongoParser";
import { PrimitiveTypeContext } from "./BlendMongoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendMongoParser`.
 */
export interface BlendMongoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendMongoParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.collectionDefinition`.
	 * @param ctx the parse tree
	 */
	enterCollectionDefinition?: (ctx: CollectionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.collectionDefinition`.
	 * @param ctx the parse tree
	 */
	exitCollectionDefinition?: (ctx: CollectionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.propertyChars`.
	 * @param ctx the parse tree
	 */
	enterPropertyChars?: (ctx: PropertyCharsContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.propertyChars`.
	 * @param ctx the parse tree
	 */
	exitPropertyChars?: (ctx: PropertyCharsContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.mongoChars`.
	 * @param ctx the parse tree
	 */
	enterMongoChars?: (ctx: MongoCharsContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.mongoChars`.
	 * @param ctx the parse tree
	 */
	exitMongoChars?: (ctx: MongoCharsContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `BlendMongoParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `BlendMongoParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

