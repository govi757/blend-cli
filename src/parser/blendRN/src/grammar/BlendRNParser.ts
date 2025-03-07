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
	public static readonly T__12 = 13;
	public static readonly LAYOUT_TYPE = 14;
	public static readonly PATH_IDENTIFIER = 15;
	public static readonly IDENTIFIER = 16;
	public static readonly CAPITAL_IDENTIFIER = 17;
	public static readonly WS = 18;
	public static readonly RULE_program = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_screenDefenition = 2;
	public static readonly RULE_componentDefenition = 3;
	public static readonly RULE_layoutDefinition = 4;
	public static readonly RULE_pageDefinition = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "moduleDefinition", "screenDefenition", "componentDefenition", 
		"layoutDefinition", "pageDefinition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'screen'", "','", "'under'", "'component'", "'layout'", 
		"'('", "')'", "'type'", "'{'", "'}'", "'page'", "'view'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"LAYOUT_TYPE", "PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", 
		"WS",
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
			this.state = 12;
			this.moduleDefinition();
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__4) {
				{
				{
				this.state = 13;
				this.componentDefenition();
				}
				}
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__1) {
				{
				{
				this.state = 19;
				this.screenDefenition();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__5) {
				{
				{
				this.state = 25;
				this.layoutDefinition();
				}
				}
				this.state = 30;
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
			this.state = 31;
			this.match(BlendRNParser.T__0);
			this.state = 32;
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
			this.state = 34;
			this.match(BlendRNParser.T__1);
			this.state = 35;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__2) {
				{
				{
				this.state = 36;
				this.match(BlendRNParser.T__2);
				this.state = 37;
				this.match(BlendRNParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 43;
			this.match(BlendRNParser.T__3);
			this.state = 44;
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
	public componentDefenition(): ComponentDefenitionContext {
		let _localctx: ComponentDefenitionContext = new ComponentDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendRNParser.RULE_componentDefenition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(BlendRNParser.T__4);
			this.state = 47;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__2) {
				{
				{
				this.state = 48;
				this.match(BlendRNParser.T__2);
				this.state = 49;
				this.match(BlendRNParser.CAPITAL_IDENTIFIER);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this.match(BlendRNParser.T__3);
			this.state = 56;
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
		this.enterRule(_localctx, 8, BlendRNParser.RULE_layoutDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(BlendRNParser.T__5);
			this.state = 59;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 60;
			this.match(BlendRNParser.T__6);
			this.state = 61;
			this.match(BlendRNParser.PATH_IDENTIFIER);
			this.state = 62;
			this.match(BlendRNParser.T__7);
			this.state = 63;
			this.match(BlendRNParser.T__8);
			this.state = 64;
			this.match(BlendRNParser.T__6);
			this.state = 65;
			this.match(BlendRNParser.LAYOUT_TYPE);
			this.state = 66;
			this.match(BlendRNParser.T__7);
			this.state = 67;
			this.match(BlendRNParser.T__9);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__11) {
				{
				{
				this.state = 68;
				this.pageDefinition();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendRNParser.T__5) {
				{
				{
				this.state = 74;
				this.layoutDefinition();
				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(BlendRNParser.T__10);
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
		this.enterRule(_localctx, 10, BlendRNParser.RULE_pageDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(BlendRNParser.T__11);
			this.state = 83;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 84;
			this.match(BlendRNParser.T__6);
			this.state = 85;
			this.match(BlendRNParser.PATH_IDENTIFIER);
			this.state = 86;
			this.match(BlendRNParser.T__7);
			this.state = 87;
			this.match(BlendRNParser.T__12);
			this.state = 88;
			this.match(BlendRNParser.T__6);
			this.state = 89;
			this.match(BlendRNParser.CAPITAL_IDENTIFIER);
			this.state = 90;
			this.match(BlendRNParser.T__7);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14_\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x02" +
		"\x07\x02\x17\n\x02\f\x02\x0E\x02\x1A\v\x02\x03\x02\x07\x02\x1D\n\x02\f" +
		"\x02\x0E\x02 \v\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04)\n\x04\f\x04\x0E\x04,\v\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x055\n\x05\f\x05\x0E\x058\v\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06H\n\x06\f\x06\x0E\x06K\v\x06\x03\x06" +
		"\x07\x06N\n\x06\f\x06\x0E\x06Q\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x02" +
		"\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x02\x02_\x02" +
		"\x0E\x03\x02\x02\x02\x04!\x03\x02\x02\x02\x06$\x03\x02\x02\x02\b0\x03" +
		"\x02\x02\x02\n<\x03\x02\x02\x02\fT\x03\x02\x02\x02\x0E\x12\x05\x04\x03" +
		"\x02\x0F\x11\x05\b\x05\x02\x10\x0F\x03\x02\x02\x02\x11\x14\x03\x02\x02" +
		"\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x18\x03\x02\x02" +
		"\x02\x14\x12\x03\x02\x02\x02\x15\x17\x05\x06\x04\x02\x16\x15\x03\x02\x02" +
		"\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02" +
		"\x02\x19\x1E\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1D\x05\n\x06" +
		"\x02\x1C\x1B\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02" +
		"\x02\x1E\x1F\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02" +
		"\x02!\"\x07\x03\x02\x02\"#\x07\x13\x02\x02#\x05\x03\x02\x02\x02$%\x07" +
		"\x04\x02\x02%*\x07\x13\x02\x02&\'\x07\x05\x02\x02\')\x07\x13\x02\x02(" +
		"&\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02\x02" +
		"+-\x03\x02\x02\x02,*\x03\x02\x02\x02-.\x07\x06\x02\x02./\x07\x11\x02\x02" +
		"/\x07\x03\x02\x02\x0201\x07\x07\x02\x0216\x07\x13\x02\x0223\x07\x05\x02" +
		"\x0235\x07\x13\x02\x0242\x03\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02" +
		"\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x07\x06\x02" +
		"\x02:;\x07\x11\x02\x02;\t\x03\x02\x02\x02<=\x07\b\x02\x02=>\x07\x13\x02" +
		"\x02>?\x07\t\x02\x02?@\x07\x11\x02\x02@A\x07\n\x02\x02AB\x07\v\x02\x02" +
		"BC\x07\t\x02\x02CD\x07\x10\x02\x02DE\x07\n\x02\x02EI\x07\f\x02\x02FH\x05" +
		"\f\x07\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03" +
		"\x02\x02\x02JO\x03\x02\x02\x02KI\x03\x02\x02\x02LN\x05\n\x06\x02ML\x03" +
		"\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02PR\x03" +
		"\x02\x02\x02QO\x03\x02\x02\x02RS\x07\r\x02\x02S\v\x03\x02\x02\x02TU\x07" +
		"\x0E\x02\x02UV\x07\x13\x02\x02VW\x07\t\x02\x02WX\x07\x11\x02\x02XY\x07" +
		"\n\x02\x02YZ\x07\x0F\x02\x02Z[\x07\t\x02\x02[\\\x07\x13\x02\x02\\]\x07" +
		"\n\x02\x02]\r\x03\x02\x02\x02\t\x12\x18\x1E*6IO";
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
	public componentDefenition(): ComponentDefenitionContext[];
	public componentDefenition(i: number): ComponentDefenitionContext;
	public componentDefenition(i?: number): ComponentDefenitionContext | ComponentDefenitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentDefenitionContext);
		} else {
			return this.getRuleContext(i, ComponentDefenitionContext);
		}
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


export class ComponentDefenitionContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return BlendRNParser.RULE_componentDefenition; }
	// @Override
	public enterRule(listener: BlendRNListener): void {
		if (listener.enterComponentDefenition) {
			listener.enterComponentDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendRNListener): void {
		if (listener.exitComponentDefenition) {
			listener.exitComponentDefenition(this);
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


