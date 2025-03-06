// Generated from src/grammar/BlendBasic.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { BlendBasicListener } from "./BlendBasicListener";

export class BlendBasicParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly IDENTIFIER = 10;
	public static readonly WS = 11;
	public static readonly RULE_sections = 0;
	public static readonly RULE_section = 1;
	public static readonly RULE_module = 2;
	public static readonly RULE_dataModule = 3;
	public static readonly RULE_expressModule = 4;
	public static readonly RULE_rnModule = 5;
	public static readonly RULE_reactModule = 6;
	public static readonly RULE_mongoModule = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sections", "section", "module", "dataModule", "expressModule", "rnModule", 
		"reactModule", "mongoModule",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'{'", "'}'", "'data-module'", "','", "'express-module'", 
		"'rn-module'", "'react-module'", "'mongo-module'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendBasicParser._LITERAL_NAMES, BlendBasicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendBasicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendBasic.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendBasicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendBasicParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendBasicParser._ATN, this);
	}
	// @RuleVersion(0)
	public sections(): SectionsContext {
		let _localctx: SectionsContext = new SectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendBasicParser.RULE_sections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.section();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BlendBasicParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BlendBasicParser.RULE_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.match(BlendBasicParser.T__0);
			this.state = 22;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 23;
			this.match(BlendBasicParser.T__1);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendBasicParser.T__3) | (1 << BlendBasicParser.T__5) | (1 << BlendBasicParser.T__6) | (1 << BlendBasicParser.T__7) | (1 << BlendBasicParser.T__8))) !== 0)) {
				{
				{
				this.state = 24;
				this.module();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(BlendBasicParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendBasicParser.RULE_module);
		try {
			this.state = 37;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BlendBasicParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.dataModule();
				}
				break;
			case BlendBasicParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.expressModule();
				}
				break;
			case BlendBasicParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 34;
				this.rnModule();
				}
				break;
			case BlendBasicParser.T__8:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 35;
				this.mongoModule();
				}
				break;
			case BlendBasicParser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 36;
				this.reactModule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataModule(): DataModuleContext {
		let _localctx: DataModuleContext = new DataModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendBasicParser.RULE_dataModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(BlendBasicParser.T__3);
			this.state = 40;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendBasicParser.T__4) {
				{
				{
				this.state = 41;
				this.match(BlendBasicParser.T__4);
				this.state = 42;
				this.match(BlendBasicParser.IDENTIFIER);
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressModule(): ExpressModuleContext {
		let _localctx: ExpressModuleContext = new ExpressModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendBasicParser.RULE_expressModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(BlendBasicParser.T__5);
			this.state = 49;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendBasicParser.T__4) {
				{
				{
				this.state = 50;
				this.match(BlendBasicParser.T__4);
				this.state = 51;
				this.match(BlendBasicParser.IDENTIFIER);
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rnModule(): RnModuleContext {
		let _localctx: RnModuleContext = new RnModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendBasicParser.RULE_rnModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(BlendBasicParser.T__6);
			this.state = 58;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendBasicParser.T__4) {
				{
				{
				this.state = 59;
				this.match(BlendBasicParser.T__4);
				this.state = 60;
				this.match(BlendBasicParser.IDENTIFIER);
				}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reactModule(): ReactModuleContext {
		let _localctx: ReactModuleContext = new ReactModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendBasicParser.RULE_reactModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(BlendBasicParser.T__7);
			this.state = 67;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendBasicParser.T__4) {
				{
				{
				this.state = 68;
				this.match(BlendBasicParser.T__4);
				this.state = 69;
				this.match(BlendBasicParser.IDENTIFIER);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mongoModule(): MongoModuleContext {
		let _localctx: MongoModuleContext = new MongoModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BlendBasicParser.RULE_mongoModule);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(BlendBasicParser.T__8);
			this.state = 76;
			this.match(BlendBasicParser.IDENTIFIER);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendBasicParser.T__4) {
				{
				{
				this.state = 77;
				this.match(BlendBasicParser.T__4);
				this.state = 78;
				this.match(BlendBasicParser.IDENTIFIER);
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\rW\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03\x0E\x03\x1F\v\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04(\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05.\n\x05\f\x05\x0E\x051\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x067\n\x06\f\x06\x0E\x06:\v\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07@\n\x07\f\x07\x0E\x07C\v\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bI\n\b\f\b\x0E\bL\v\b\x03\t\x03\t\x03\t\x03\t\x07\t" +
		"R\n\t\f\t\x0E\tU\v\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02Y\x02\x13\x03\x02\x02\x02\x04" +
		"\x17\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b)\x03\x02\x02\x02\n2\x03\x02" +
		"\x02\x02\f;\x03\x02\x02\x02\x0ED\x03\x02\x02\x02\x10M\x03\x02\x02\x02" +
		"\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02" +
		"\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02" +
		"\x17\x18\x07\x03\x02\x02\x18\x19\x07\f\x02\x02\x19\x1D\x07\x04\x02\x02" +
		"\x1A\x1C\x05\x06\x04\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02" +
		"\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E \x03\x02\x02\x02" +
		"\x1F\x1D\x03\x02\x02\x02 !\x07\x05\x02\x02!\x05\x03\x02\x02\x02\"(\x05" +
		"\b\x05\x02#(\x05\n\x06\x02$(\x05\f\x07\x02%(\x05\x10\t\x02&(\x05\x0E\b" +
		"\x02\'\"\x03\x02\x02\x02\'#\x03\x02\x02\x02\'$\x03\x02\x02\x02\'%\x03" +
		"\x02\x02\x02\'&\x03\x02\x02\x02(\x07\x03\x02\x02\x02)*\x07\x06\x02\x02" +
		"*/\x07\f\x02\x02+,\x07\x07\x02\x02,.\x07\f\x02\x02-+\x03\x02\x02\x02." +
		"1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x020\t\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0223\x07\b\x02\x0238\x07\f\x02\x0245\x07\x07\x02\x025" +
		"7\x07\f\x02\x0264\x03\x02\x02\x027:\x03\x02\x02\x0286\x03\x02\x02\x02" +
		"89\x03\x02\x02\x029\v\x03\x02\x02\x02:8\x03\x02\x02\x02;<\x07\t\x02\x02" +
		"<A\x07\f\x02\x02=>\x07\x07\x02\x02>@\x07\f\x02\x02?=\x03\x02\x02\x02@" +
		"C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02B\r\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02DE\x07\n\x02\x02EJ\x07\f\x02\x02FG\x07\x07\x02\x02G" +
		"I\x07\f\x02\x02HF\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02" +
		"JK\x03\x02\x02\x02K\x0F\x03\x02\x02\x02LJ\x03\x02\x02\x02MN\x07\v\x02" +
		"\x02NS\x07\f\x02\x02OP\x07\x07\x02\x02PR\x07\f\x02\x02QO\x03\x02\x02\x02" +
		"RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02T\x11\x03\x02\x02" +
		"\x02US\x03\x02\x02\x02\n\x15\x1D\'/8AJS";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendBasicParser.__ATN) {
			BlendBasicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendBasicParser._serializedATN));
		}

		return BlendBasicParser.__ATN;
	}

}

export class SectionsContext extends ParserRuleContext {
	public section(): SectionContext[];
	public section(i: number): SectionContext;
	public section(i?: number): SectionContext | SectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionContext);
		} else {
			return this.getRuleContext(i, SectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_sections; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterSections) {
			listener.enterSections(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitSections) {
			listener.exitSections(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendBasicParser.IDENTIFIER, 0); }
	public module(): ModuleContext[];
	public module(i: number): ModuleContext;
	public module(i?: number): ModuleContext | ModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleContext);
		} else {
			return this.getRuleContext(i, ModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_section; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public dataModule(): DataModuleContext | undefined {
		return this.tryGetRuleContext(0, DataModuleContext);
	}
	public expressModule(): ExpressModuleContext | undefined {
		return this.tryGetRuleContext(0, ExpressModuleContext);
	}
	public rnModule(): RnModuleContext | undefined {
		return this.tryGetRuleContext(0, RnModuleContext);
	}
	public mongoModule(): MongoModuleContext | undefined {
		return this.tryGetRuleContext(0, MongoModuleContext);
	}
	public reactModule(): ReactModuleContext | undefined {
		return this.tryGetRuleContext(0, ReactModuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_module; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
}


export class DataModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendBasicParser.IDENTIFIER);
		} else {
			return this.getToken(BlendBasicParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_dataModule; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterDataModule) {
			listener.enterDataModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitDataModule) {
			listener.exitDataModule(this);
		}
	}
}


export class ExpressModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendBasicParser.IDENTIFIER);
		} else {
			return this.getToken(BlendBasicParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_expressModule; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterExpressModule) {
			listener.enterExpressModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitExpressModule) {
			listener.exitExpressModule(this);
		}
	}
}


export class RnModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendBasicParser.IDENTIFIER);
		} else {
			return this.getToken(BlendBasicParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_rnModule; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterRnModule) {
			listener.enterRnModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitRnModule) {
			listener.exitRnModule(this);
		}
	}
}


export class ReactModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendBasicParser.IDENTIFIER);
		} else {
			return this.getToken(BlendBasicParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_reactModule; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterReactModule) {
			listener.enterReactModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitReactModule) {
			listener.exitReactModule(this);
		}
	}
}


export class MongoModuleContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendBasicParser.IDENTIFIER);
		} else {
			return this.getToken(BlendBasicParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendBasicParser.RULE_mongoModule; }
	// @Override
	public enterRule(listener: BlendBasicListener): void {
		if (listener.enterMongoModule) {
			listener.enterMongoModule(this);
		}
	}
	// @Override
	public exitRule(listener: BlendBasicListener): void {
		if (listener.exitMongoModule) {
			listener.exitMongoModule(this);
		}
	}
}


