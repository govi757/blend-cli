// Generated from src/grammar/BlendMDP.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendMDPListener } from "./BlendMDPListener";

export class BlendMDPParser extends Parser {
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
	public static readonly IDENTIFIER = 12;
	public static readonly CAPITAL_IDENTIFIER = 13;
	public static readonly WS = 14;
	public static readonly RULE_program = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_parentDefinition = 2;
	public static readonly RULE_propsDefinition = 3;
	public static readonly RULE_propsBodyDefinition = 4;
	public static readonly RULE_primitiveType = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "moduleDefinition", "parentDefinition", "propsDefinition", 
		"propsBodyDefinition", "primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'parent'", "'props'", "'{'", "'}'", "':'", "'string'", 
		"'number'", "'boolean'", "'any'", "'object'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "CAPITAL_IDENTIFIER", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendMDPParser._LITERAL_NAMES, BlendMDPParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendMDPParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendMDP.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendMDPParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendMDPParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendMDPParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendMDPParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 12;
			this.moduleDefinition();
			this.state = 13;
			this.parentDefinition();
			this.state = 14;
			this.propsDefinition();
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
		this.enterRule(_localctx, 2, BlendMDPParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.match(BlendMDPParser.T__0);
			this.state = 17;
			this.match(BlendMDPParser.CAPITAL_IDENTIFIER);
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
	public parentDefinition(): ParentDefinitionContext {
		let _localctx: ParentDefinitionContext = new ParentDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendMDPParser.RULE_parentDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.match(BlendMDPParser.T__1);
			this.state = 20;
			this.match(BlendMDPParser.CAPITAL_IDENTIFIER);
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
	public propsDefinition(): PropsDefinitionContext {
		let _localctx: PropsDefinitionContext = new PropsDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendMDPParser.RULE_propsDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(BlendMDPParser.T__2);
			this.state = 23;
			this.match(BlendMDPParser.T__3);
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendMDPParser.IDENTIFIER) {
				{
				{
				this.state = 24;
				this.propsBodyDefinition();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
			this.match(BlendMDPParser.T__4);
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
	public propsBodyDefinition(): PropsBodyDefinitionContext {
		let _localctx: PropsBodyDefinitionContext = new PropsBodyDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendMDPParser.RULE_propsBodyDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(BlendMDPParser.IDENTIFIER);
			this.state = 33;
			this.match(BlendMDPParser.T__5);
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BlendMDPParser.CAPITAL_IDENTIFIER:
				{
				this.state = 34;
				this.match(BlendMDPParser.CAPITAL_IDENTIFIER);
				}
				break;
			case BlendMDPParser.T__6:
			case BlendMDPParser.T__7:
			case BlendMDPParser.T__8:
			case BlendMDPParser.T__9:
			case BlendMDPParser.T__10:
				{
				this.state = 35;
				this.primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendMDPParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendMDPParser.T__6) | (1 << BlendMDPParser.T__7) | (1 << BlendMDPParser.T__8) | (1 << BlendMDPParser.T__9) | (1 << BlendMDPParser.T__10))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10+\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x1C\n\x05\f\x05\x0E\x05" +
		"\x1F\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\'\n" +
		"\x06\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x02\x03\x03\x02\t\r\x02&\x02\x0E\x03\x02\x02\x02\x04\x12" +
		"\x03\x02\x02\x02\x06\x15\x03\x02\x02\x02\b\x18\x03\x02\x02\x02\n\"\x03" +
		"\x02\x02\x02\f(\x03\x02\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x05\x06" +
		"\x04\x02\x10\x11\x05\b\x05\x02\x11\x03\x03\x02\x02\x02\x12\x13\x07\x03" +
		"\x02\x02\x13\x14\x07\x0F\x02\x02\x14\x05\x03\x02\x02\x02\x15\x16\x07\x04" +
		"\x02\x02\x16\x17\x07\x0F\x02\x02\x17\x07\x03\x02\x02\x02\x18\x19\x07\x05" +
		"\x02\x02\x19\x1D\x07\x06\x02\x02\x1A\x1C\x05\n\x06\x02\x1B\x1A\x03\x02" +
		"\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02" +
		"\x02\x02\x1E \x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 !\x07\x07\x02\x02" +
		"!\t\x03\x02\x02\x02\"#\x07\x0E\x02\x02#&\x07\b\x02\x02$\'\x07\x0F\x02" +
		"\x02%\'\x05\f\x07\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'\v\x03\x02" +
		"\x02\x02()\t\x02\x02\x02)\r\x03\x02\x02\x02\x04\x1D&";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendMDPParser.__ATN) {
			BlendMDPParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendMDPParser._serializedATN));
		}

		return BlendMDPParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public parentDefinition(): ParentDefinitionContext {
		return this.getRuleContext(0, ParentDefinitionContext);
	}
	public propsDefinition(): PropsDefinitionContext {
		return this.getRuleContext(0, PropsDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class ParentDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_parentDefinition; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterParentDefinition) {
			listener.enterParentDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitParentDefinition) {
			listener.exitParentDefinition(this);
		}
	}
}


export class PropsDefinitionContext extends ParserRuleContext {
	public propsBodyDefinition(): PropsBodyDefinitionContext[];
	public propsBodyDefinition(i: number): PropsBodyDefinitionContext;
	public propsBodyDefinition(i?: number): PropsBodyDefinitionContext | PropsBodyDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropsBodyDefinitionContext);
		} else {
			return this.getRuleContext(i, PropsBodyDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_propsDefinition; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterPropsDefinition) {
			listener.enterPropsDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitPropsDefinition) {
			listener.exitPropsDefinition(this);
		}
	}
}


export class PropsBodyDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendMDPParser.IDENTIFIER, 0); }
	public CAPITAL_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_propsBodyDefinition; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterPropsBodyDefinition) {
			listener.enterPropsBodyDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitPropsBodyDefinition) {
			listener.exitPropsBodyDefinition(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMDPParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: BlendMDPListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMDPListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


