// Generated from src/grammar/BlendExpress.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendExpressListener } from "./BlendExpressListener";

export class BlendExpressParser extends Parser {
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
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly HTTP_METHOD = 21;
	public static readonly IDENTIFIER = 22;
	public static readonly CAPITAL_IDENTIFIER = 23;
	public static readonly WS = 24;
	public static readonly RULE_program = 0;
	public static readonly RULE_sectionDefinition = 1;
	public static readonly RULE_moduleDefinition = 2;
	public static readonly RULE_apiDefinition = 3;
	public static readonly RULE_authenticated = 4;
	public static readonly RULE_inputDefinition = 5;
	public static readonly RULE_outputDefinition = 6;
	public static readonly RULE_directOutputDefenition = 7;
	public static readonly RULE_field = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_primitiveType = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sectionDefinition", "moduleDefinition", "apiDefinition", "authenticated", 
		"inputDefinition", "outputDefinition", "directOutputDefenition", "field", 
		"type", "primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'{'", "'}'", "'module'", "'api'", "'('", "')'", 
		"'authenticated'", "'input('", "','", "'output('", "':'", "'[]'", "'?'", 
		"'->'", "'string'", "'number'", "'boolean'", "'any'", "'object'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"HTTP_METHOD", "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendExpressParser._LITERAL_NAMES, BlendExpressParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendExpressParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendExpress.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendExpressParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendExpressParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendExpressParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendExpressParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.moduleDefinition();
			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendExpressParser.T__0) {
				{
				{
				this.state = 23;
				this.sectionDefinition();
				}
				}
				this.state = 28;
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
	public sectionDefinition(): SectionDefinitionContext {
		let _localctx: SectionDefinitionContext = new SectionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, BlendExpressParser.RULE_sectionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.match(BlendExpressParser.T__0);
			this.state = 30;
			this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
			this.state = 31;
			this.match(BlendExpressParser.T__1);
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendExpressParser.T__4) {
				{
				{
				this.state = 32;
				this.apiDefinition();
				}
				}
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 38;
			this.match(BlendExpressParser.T__2);
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
		this.enterRule(_localctx, 4, BlendExpressParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(BlendExpressParser.T__3);
			this.state = 41;
			this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
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
	public apiDefinition(): ApiDefinitionContext {
		let _localctx: ApiDefinitionContext = new ApiDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendExpressParser.RULE_apiDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(BlendExpressParser.T__4);
			this.state = 44;
			this.match(BlendExpressParser.IDENTIFIER);
			this.state = 45;
			this.match(BlendExpressParser.T__5);
			this.state = 46;
			this.match(BlendExpressParser.HTTP_METHOD);
			this.state = 47;
			this.match(BlendExpressParser.T__6);
			this.state = 48;
			this.match(BlendExpressParser.T__1);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendExpressParser.T__7) {
				{
				this.state = 49;
				this.authenticated();
				}
			}

			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendExpressParser.T__8) {
				{
				this.state = 52;
				this.inputDefinition();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendExpressParser.T__10) {
				{
				this.state = 55;
				this.outputDefinition();
				}
			}

			this.state = 58;
			this.match(BlendExpressParser.T__2);
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
	public authenticated(): AuthenticatedContext {
		let _localctx: AuthenticatedContext = new AuthenticatedContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendExpressParser.RULE_authenticated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(BlendExpressParser.T__7);
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
	public inputDefinition(): InputDefinitionContext {
		let _localctx: InputDefinitionContext = new InputDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendExpressParser.RULE_inputDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(BlendExpressParser.T__8);
			this.state = 63;
			this.field();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendExpressParser.T__9) {
				{
				{
				this.state = 64;
				this.match(BlendExpressParser.T__9);
				this.state = 65;
				this.field();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(BlendExpressParser.T__6);
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
	public outputDefinition(): OutputDefinitionContext {
		let _localctx: OutputDefinitionContext = new OutputDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendExpressParser.RULE_outputDefinition);
		let _la: number;
		try {
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 73;
				this.match(BlendExpressParser.T__10);
				this.state = 74;
				this.field();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BlendExpressParser.T__9) {
					{
					{
					this.state = 75;
					this.match(BlendExpressParser.T__9);
					this.state = 76;
					this.field();
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
				this.match(BlendExpressParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 84;
				this.match(BlendExpressParser.T__10);
				this.state = 85;
				this.directOutputDefenition();
				this.state = 86;
				this.match(BlendExpressParser.T__6);
				}
				break;
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
	public directOutputDefenition(): DirectOutputDefenitionContext {
		let _localctx: DirectOutputDefenitionContext = new DirectOutputDefenitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BlendExpressParser.RULE_directOutputDefenition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.type();
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, BlendExpressParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(BlendExpressParser.IDENTIFIER);
			this.state = 93;
			this.match(BlendExpressParser.T__11);
			this.state = 94;
			this.type();
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, BlendExpressParser.RULE_type);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.primitiveType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.primitiveType();
				this.state = 98;
				this.match(BlendExpressParser.T__12);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 100;
				this.primitiveType();
				this.state = 101;
				this.match(BlendExpressParser.T__13);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 103;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				this.state = 104;
				this.match(BlendExpressParser.T__14);
				this.state = 105;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 106;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				this.state = 107;
				this.match(BlendExpressParser.T__14);
				this.state = 108;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				this.state = 109;
				this.match(BlendExpressParser.T__13);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 110;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				this.state = 111;
				this.match(BlendExpressParser.T__14);
				this.state = 112;
				this.match(BlendExpressParser.CAPITAL_IDENTIFIER);
				this.state = 113;
				this.match(BlendExpressParser.T__12);
				}
				break;
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, BlendExpressParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendExpressParser.T__15) | (1 << BlendExpressParser.T__16) | (1 << BlendExpressParser.T__17) | (1 << BlendExpressParser.T__18) | (1 << BlendExpressParser.T__19))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1Ay\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03\x02" +
		"\x07\x02\x1B\n\x02\f\x02\x0E\x02\x1E\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03$\n\x03\f\x03\x0E\x03\'\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x055\n\x05\x03\x05\x05\x058\n\x05\x03\x05\x05\x05;\n\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07E\n\x07\f" +
		"\x07\x0E\x07H\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\bP\n\b" +
		"\f\b\x0E\bS\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b[\n\b\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\vu" +
		"\n\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03\x02\x12\x16" +
		"\x02z\x02\x18\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02\x06*\x03\x02\x02" +
		"\x02\b-\x03\x02\x02\x02\n>\x03\x02\x02\x02\f@\x03\x02\x02\x02\x0EZ\x03" +
		"\x02\x02\x02\x10\\\x03\x02\x02\x02\x12^\x03\x02\x02\x02\x14t\x03\x02\x02" +
		"\x02\x16v\x03\x02\x02\x02\x18\x1C\x05\x06\x04\x02\x19\x1B\x05\x04\x03" +
		"\x02\x1A\x19\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C\x1A\x03\x02\x02" +
		"\x02\x1C\x1D\x03\x02\x02\x02\x1D\x03\x03\x02\x02\x02\x1E\x1C\x03\x02\x02" +
		"\x02\x1F \x07\x03\x02\x02 !\x07\x19\x02\x02!%\x07\x04\x02\x02\"$\x05\b" +
		"\x05\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03" +
		"\x02\x02\x02&(\x03\x02\x02\x02\'%\x03\x02\x02\x02()\x07\x05\x02\x02)\x05" +
		"\x03\x02\x02\x02*+\x07\x06\x02\x02+,\x07\x19\x02\x02,\x07\x03\x02\x02" +
		"\x02-.\x07\x07\x02\x02./\x07\x18\x02\x02/0\x07\b\x02\x0201\x07\x17\x02" +
		"\x0212\x07\t\x02\x0224\x07\x04\x02\x0235\x05\n\x06\x0243\x03\x02\x02\x02" +
		"45\x03\x02\x02\x0257\x03\x02\x02\x0268\x05\f\x07\x0276\x03\x02\x02\x02" +
		"78\x03\x02\x02\x028:\x03\x02\x02\x029;\x05\x0E\b\x02:9\x03\x02\x02\x02" +
		":;\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x07\x05\x02\x02=\t\x03\x02\x02" +
		"\x02>?\x07\n\x02\x02?\v\x03\x02\x02\x02@A\x07\v\x02\x02AF\x05\x12\n\x02" +
		"BC\x07\f\x02\x02CE\x05\x12\n\x02DB\x03\x02\x02\x02EH\x03\x02\x02\x02F" +
		"D\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02\x02\x02" +
		"IJ\x07\t\x02\x02J\r\x03\x02\x02\x02KL\x07\r\x02\x02LQ\x05\x12\n\x02MN" +
		"\x07\f\x02\x02NP\x05\x12\n\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x07" +
		"\t\x02\x02U[\x03\x02\x02\x02VW\x07\r\x02\x02WX\x05\x10\t\x02XY\x07\t\x02" +
		"\x02Y[\x03\x02\x02\x02ZK\x03\x02\x02\x02ZV\x03\x02\x02\x02[\x0F\x03\x02" +
		"\x02\x02\\]\x05\x14\v\x02]\x11\x03\x02\x02\x02^_\x07\x18\x02\x02_`\x07" +
		"\x0E\x02\x02`a\x05\x14\v\x02a\x13\x03\x02\x02\x02bu\x05\x16\f\x02cd\x05" +
		"\x16\f\x02de\x07\x0F\x02\x02eu\x03\x02\x02\x02fg\x05\x16\f\x02gh\x07\x10" +
		"\x02\x02hu\x03\x02\x02\x02ij\x07\x19\x02\x02jk\x07\x11\x02\x02ku\x07\x19" +
		"\x02\x02lm\x07\x19\x02\x02mn\x07\x11\x02\x02no\x07\x19\x02\x02ou\x07\x10" +
		"\x02\x02pq\x07\x19\x02\x02qr\x07\x11\x02\x02rs\x07\x19\x02\x02su\x07\x0F" +
		"\x02\x02tb\x03\x02\x02\x02tc\x03\x02\x02\x02tf\x03\x02\x02\x02ti\x03\x02" +
		"\x02\x02tl\x03\x02\x02\x02tp\x03\x02\x02\x02u\x15\x03\x02\x02\x02vw\t" +
		"\x02\x02\x02w\x17\x03\x02\x02\x02\v\x1C%47:FQZt";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendExpressParser.__ATN) {
			BlendExpressParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendExpressParser._serializedATN));
		}

		return BlendExpressParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public sectionDefinition(): SectionDefinitionContext[];
	public sectionDefinition(i: number): SectionDefinitionContext;
	public sectionDefinition(i?: number): SectionDefinitionContext | SectionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionDefinitionContext);
		} else {
			return this.getRuleContext(i, SectionDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class SectionDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendExpressParser.CAPITAL_IDENTIFIER, 0); }
	public apiDefinition(): ApiDefinitionContext[];
	public apiDefinition(i: number): ApiDefinitionContext;
	public apiDefinition(i?: number): ApiDefinitionContext | ApiDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ApiDefinitionContext);
		} else {
			return this.getRuleContext(i, ApiDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_sectionDefinition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterSectionDefinition) {
			listener.enterSectionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitSectionDefinition) {
			listener.exitSectionDefinition(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendExpressParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class ApiDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendExpressParser.IDENTIFIER, 0); }
	public HTTP_METHOD(): TerminalNode { return this.getToken(BlendExpressParser.HTTP_METHOD, 0); }
	public authenticated(): AuthenticatedContext | undefined {
		return this.tryGetRuleContext(0, AuthenticatedContext);
	}
	public inputDefinition(): InputDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InputDefinitionContext);
	}
	public outputDefinition(): OutputDefinitionContext | undefined {
		return this.tryGetRuleContext(0, OutputDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_apiDefinition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterApiDefinition) {
			listener.enterApiDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitApiDefinition) {
			listener.exitApiDefinition(this);
		}
	}
}


export class AuthenticatedContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_authenticated; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterAuthenticated) {
			listener.enterAuthenticated(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitAuthenticated) {
			listener.exitAuthenticated(this);
		}
	}
}


export class InputDefinitionContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_inputDefinition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterInputDefinition) {
			listener.enterInputDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitInputDefinition) {
			listener.exitInputDefinition(this);
		}
	}
}


export class OutputDefinitionContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public directOutputDefenition(): DirectOutputDefenitionContext | undefined {
		return this.tryGetRuleContext(0, DirectOutputDefenitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_outputDefinition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterOutputDefinition) {
			listener.enterOutputDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitOutputDefinition) {
			listener.exitOutputDefinition(this);
		}
	}
}


export class DirectOutputDefenitionContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_directOutputDefenition; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterDirectOutputDefenition) {
			listener.enterDirectOutputDefenition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitDirectOutputDefenition) {
			listener.exitDirectOutputDefenition(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendExpressParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_field; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public CAPITAL_IDENTIFIER(): TerminalNode[];
	public CAPITAL_IDENTIFIER(i: number): TerminalNode;
	public CAPITAL_IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(BlendExpressParser.CAPITAL_IDENTIFIER);
		} else {
			return this.getToken(BlendExpressParser.CAPITAL_IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_type; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendExpressParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: BlendExpressListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendExpressListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


