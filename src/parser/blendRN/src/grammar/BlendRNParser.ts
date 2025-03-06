// Generated from src/grammar/BlendRN.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendRNListener } from "./BlendRNListener";

export class BlendRNParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly LAYOUT_TYPE = 13;
	public static readonly PATH_IDENTIFIER = 14;
	public static readonly IDENTIFIER = 15;
	public static readonly CAPITAL_IDENTIFIER = 16;
	public static readonly WS = 17;
	public static readonly RULE_program = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_screenDefenition = 2;
	public static readonly RULE_layoutDefinition = 3;
	public static readonly RULE_pageDefinition = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "moduleDefinition", "screenDefenition", "layoutDefinition", 
		"pageDefinition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'screen'", "','", "'under'", "'layout'", "'('", 
		"')'", "'type'", "'{'", "'}'", "'page'", "'view'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "LAYOUT_TYPE", 
		"PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendRNParser._LITERAL_NAMES, BlendRNParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendRNParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendRN.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendRNParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendRNParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendRNParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendRNParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.moduleDefinition();
			this.state = 14;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__1) {
				{
				{
				this.state = 11;
				this.screenDefenition();
				}
				}
				this.state = 16;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__4) {
				{
				{
				this.state = 17;
				this.layoutDefinition();
				}
				}
				this.state = 22;
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
	public moduleDefinition(): ModuleDefinitionContext {
		let _localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BlendRNParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(BlendRNParser.T__0);
			this.state = 24;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
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
	public screenDefenition(): ScreenDefenitionContext {
		let _localctx: ScreenDefenitionContext = new ScreenDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendRNParser.RULE_screenDefenition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(BlendRNParser.T__1);
			this.state = 27;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__2) {
				{
				{
				this.state = 28;
				this.match(BlendRNParser.T__2);
				this.state = 29;
				this.match(BlendRNParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this.match(BlendRNParser.T__3);
			this.state = 36;
			this.match(BlendRNParser.PATH_IDENTIFIER);
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
	public layoutDefinition(): LayoutDefinitionContext {
		let _localctx: LayoutDefinitionContext = new LayoutDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendRNParser.RULE_layoutDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(BlendRNParser.T__4);
			this.state = 39;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 40;
			this.match(BlendRNParser.T__5);
			this.state = 41;
			this.match(BlendRNParser.PATH_IDENTIFIER);
			this.state = 42;
			this.match(BlendRNParser.T__6);
			this.state = 43;
			this.match(BlendRNParser.T__7);
			this.state = 44;
			this.match(BlendRNParser.T__5);
			this.state = 45;
			this.match(BlendRNParser.LAYOUT_TYPE);
			this.state = 46;
			this.match(BlendRNParser.T__6);
			this.state = 47;
			this.match(BlendRNParser.T__8);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__10) {
				{
				{
				this.state = 48;
				this.pageDefinition();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__4) {
				{
				{
				this.state = 54;
				this.layoutDefinition();
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			this.match(BlendRNParser.T__9);
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
	public pageDefinition(): PageDefinitionContext {
		let _localctx: PageDefinitionContext = new PageDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendRNParser.RULE_pageDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(BlendRNParser.T__10);
			this.state = 63;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 64;
			this.match(BlendRNParser.T__5);
			this.state = 65;
			this.match(BlendRNParser.PATH_IDENTIFIER);
			this.state = 66;
			this.match(BlendRNParser.T__6);
			this.state = 67;
			this.match(BlendRNParser.T__11);
			this.state = 68;
			this.match(BlendRNParser.T__5);
			this.state = 69;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 70;
			this.match(BlendRNParser.T__6);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13K\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x07\x02\x0F\n\x02\f\x02\x0E\x02\x12\v\x02\x03\x02\x07\x02\x15" +
		"\n\x02\f\x02\x0E\x02\x18\v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04!\n\x04\f\x04\x0E\x04$\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x07\x054\n\x05\f\x05\x0E\x057\v\x05\x03\x05\x07\x05" +
		":\n\x05\f\x05\x0E\x05=\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02" +
		"\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02J\x02\f\x03\x02\x02" +
		"\x02\x04\x19\x03\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b(\x03\x02\x02\x02" +
		"\n@\x03\x02\x02\x02\f\x10\x05\x04\x03\x02\r\x0F\x05\x06\x04\x02\x0E\r" +
		"\x03\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x11" +
		"\x03\x02\x02\x02\x11\x16\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x13\x15" +
		"\x05\b\x05\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14" +
		"\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x03\x03\x02\x02\x02\x18\x16" +
		"\x03\x02\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1B\x07\x12\x02\x02\x1B\x05" +
		"\x03\x02\x02\x02\x1C\x1D\x07\x04\x02\x02\x1D\"\x07\x12\x02\x02\x1E\x1F" +
		"\x07\x05\x02\x02\x1F!\x07\x12\x02\x02 \x1E\x03\x02\x02\x02!$\x03\x02\x02" +
		"\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#%\x03\x02\x02\x02$\"\x03\x02" +
		"\x02\x02%&\x07\x06\x02\x02&\'\x07\x10\x02\x02\'\x07\x03\x02\x02\x02()" +
		"\x07\x07\x02\x02)*\x07\x12\x02\x02*+\x07\b\x02\x02+,\x07\x10\x02\x02," +
		"-\x07\t\x02\x02-.\x07\n\x02\x02./\x07\b\x02\x02/0\x07\x0F\x02\x0201\x07" +
		"\t\x02\x0215\x07\v\x02\x0224\x05\n\x06\x0232\x03\x02\x02\x0247\x03\x02" +
		"\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x026;\x03\x02\x02\x0275\x03\x02" +
		"\x02\x028:\x05\b\x05\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02" +
		"\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\f" +
		"\x02\x02?\t\x03\x02\x02\x02@A\x07\r\x02\x02AB\x07\x12\x02\x02BC\x07\b" +
		"\x02\x02CD\x07\x10\x02\x02DE\x07\t\x02\x02EF\x07\x0E\x02\x02FG\x07\b\x02" +
		"\x02GH\x07\x12\x02\x02HI\x07\t\x02\x02I\v\x03\x02\x02\x02\x07\x10\x16" +
		"\"5;";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendRNParser.__ATN) {
			BlendRNParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendRNParser._serializedATN));
		}

		return BlendRNParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public screenDefenition(): ScreenDefenitionContext[];
	public screenDefenition(i: number): ScreenDefenitionContext;
	public screenDefenition(i?: number): ScreenDefenitionContext | ScreenDefenitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScreenDefenitionContext);
		} else {
			return this.getRuleContext(i, ScreenDefenitionContext);
		}
	}
	public layoutDefinition(): LayoutDefinitionContext[];
	public layoutDefinition(i: number): LayoutDefinitionContext;
	public layoutDefinition(i?: number): LayoutDefinitionContext | LayoutDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LayoutDefinitionContext);
		} else {
			return this.getRuleContext(i, LayoutDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRNParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendRNParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRNParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class ScreenDefenitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRNParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRNParser.CAPITAL_IDENTIFIER, i);
		}
	}
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRNParser.RULE_screenDefenition; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterScreenDefenition) {
			listener.enterScreenDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitScreenDefenition) {
			listener.exitScreenDefenition(this);
		}
	}
}


export class LayoutDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendRNParser.CAPITAL_IDENTIFIER, 0); }
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
	public LAYOUT_TYPE(): TerminalNode { return this.getToken(BlendRNParser.LAYOUT_TYPE, 0); }
	public pageDefinition(): PageDefinitionContext[];
	public pageDefinition(i: number): PageDefinitionContext;
	public pageDefinition(i?: number): PageDefinitionContext | PageDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PageDefinitionContext);
		} else {
			return this.getRuleContext(i, PageDefinitionContext);
		}
	}
	public layoutDefinition(): LayoutDefinitionContext[];
	public layoutDefinition(i: number): LayoutDefinitionContext;
	public layoutDefinition(i?: number): LayoutDefinitionContext | LayoutDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LayoutDefinitionContext);
		} else {
			return this.getRuleContext(i, LayoutDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRNParser.RULE_layoutDefinition; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterLayoutDefinition) {
			listener.enterLayoutDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitLayoutDefinition) {
			listener.exitLayoutDefinition(this);
		}
	}
}


export class PageDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendRNParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendRNParser.CAPITAL_IDENTIFIER, i);
		}
	}
	public PATH_IDENTIFIER(): TerminalNode { return this.getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendRNParser.RULE_pageDefinition; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterPageDefinition) {
			listener.enterPageDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitPageDefinition) {
			listener.exitPageDefinition(this);
		}
	}
}


