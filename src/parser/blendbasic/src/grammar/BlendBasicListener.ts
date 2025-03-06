// Generated from src/grammar/BlendBasic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SectionsContext } from "./BlendBasicParser";
import { SectionContext } from "./BlendBasicParser";
import { ModuleContext } from "./BlendBasicParser";
import { DataModuleContext } from "./BlendBasicParser";
import { ExpressModuleContext } from "./BlendBasicParser";
import { RnModuleContext } from "./BlendBasicParser";
import { ReactModuleContext } from "./BlendBasicParser";
import { MongoModuleContext } from "./BlendBasicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BlendBasicParser`.
 */
export interface BlendBasicListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `BlendBasicParser.sections`.
	 * @param ctx the parse tree
	 */
	enterSections?: (ctx: SectionsContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.sections`.
	 * @param ctx the parse tree
	 */
	exitSections?: (ctx: SectionsContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.dataModule`.
	 * @param ctx the parse tree
	 */
	enterDataModule?: (ctx: DataModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.dataModule`.
	 * @param ctx the parse tree
	 */
	exitDataModule?: (ctx: DataModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.expressModule`.
	 * @param ctx the parse tree
	 */
	enterExpressModule?: (ctx: ExpressModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.expressModule`.
	 * @param ctx the parse tree
	 */
	exitExpressModule?: (ctx: ExpressModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.rnModule`.
	 * @param ctx the parse tree
	 */
	enterRnModule?: (ctx: RnModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.rnModule`.
	 * @param ctx the parse tree
	 */
	exitRnModule?: (ctx: RnModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.reactModule`.
	 * @param ctx the parse tree
	 */
	enterReactModule?: (ctx: ReactModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.reactModule`.
	 * @param ctx the parse tree
	 */
	exitReactModule?: (ctx: ReactModuleContext) => void;

	/**
	 * Enter a parse tree produced by `BlendBasicParser.mongoModule`.
	 * @param ctx the parse tree
	 */
	enterMongoModule?: (ctx: MongoModuleContext) => void;
	/**
	 * Exit a parse tree produced by `BlendBasicParser.mongoModule`.
	 * @param ctx the parse tree
	 */
	exitMongoModule?: (ctx: MongoModuleContext) => void;
}

