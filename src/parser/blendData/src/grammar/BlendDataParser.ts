// Generated from src/grammar/BlendData.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendDataListener } from "./BlendDataListener";

export class BlendDataParser extends Parser {
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
	public static readonly IDENTIFIER = 14;
	public static readonly CAPITAL_IDENTIFIER = 15;
	public static readonly WS = 16;
	public static readonly RULE_program = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_dataDefinition = 2;
	public static readonly RULE_field = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_baseType = 5;
	public static readonly RULE_primitiveType = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "moduleDefinition", "dataDefinition", "field", "type", "baseType", 
		"primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'data'", "'('", "','", "')'", "':'", "'[]'", "'?'", 
		"'->'", "'string'", "'number'", "'boolean'", "'any'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"IDENTIFIER", "CAPITAL_IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendDataParser._LITERAL_NAMES, BlendDataParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendDataParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendData.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendDataParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendDataParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendDataParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendDataParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.moduleDefinition();
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 15;
				this.dataDefinition();
				}
				}
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BlendDataParser.T__1);
			this.state = 20;
			this.match(BlendDataParser.EOF);
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
		this.enterRule(_localctx, 2, BlendDataParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.match(BlendDataParser.T__0);
			this.state = 23;
			this.match(BlendDataParser.CAPITAL_IDENTIFIER);
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
	public dataDefinition(): DataDefinitionContext {
		let _localctx: DataDefinitionContext = new DataDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendDataParser.RULE_dataDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(BlendDataParser.T__1);
			this.state = 26;
			this.match(BlendDataParser.CAPITAL_IDENTIFIER);
			this.state = 27;
			this.match(BlendDataParser.T__2);
			this.state = 28;
			this.field();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendDataParser.T__3) {
				{
				{
				this.state = 29;
				this.match(BlendDataParser.T__3);
				this.state = 30;
				this.field();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(BlendDataParser.T__4);
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
		this.enterRule(_localctx, 6, BlendDataParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(BlendDataParser.IDENTIFIER);
			this.state = 39;
			this.match(BlendDataParser.T__5);
			this.state = 40;
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
		this.enterRule(_localctx, 8, BlendDataParser.RULE_type);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.baseType();
				this.state = 44;
				this.match(BlendDataParser.T__6);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				this.baseType();
				this.state = 47;
				this.match(BlendDataParser.T__7);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.baseType();
				this.state = 50;
				this.match(BlendDataParser.T__8);
				this.state = 51;
				this.baseType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this.baseType();
				this.state = 54;
				this.match(BlendDataParser.T__8);
				this.state = 55;
				this.baseType();
				this.state = 56;
				this.match(BlendDataParser.T__7);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 58;
				this.baseType();
				this.state = 59;
				this.match(BlendDataParser.T__8);
				this.state = 60;
				this.baseType();
				this.state = 61;
				this.match(BlendDataParser.T__6);
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
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendDataParser.RULE_baseType);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case BlendDataParser.T__9:
			case BlendDataParser.T__10:
			case BlendDataParser.T__11:
			case BlendDataParser.T__12:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.primitiveType();
				}
				break;
			case BlendDataParser.CAPITAL_IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.match(BlendDataParser.CAPITAL_IDENTIFIER);
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendDataParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendDataParser.T__9) | (1 << BlendDataParser.T__10) | (1 << BlendDataParser.T__11) | (1 << BlendDataParser.T__12))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x12J\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x06\x02\x13\n\x02\r\x02\x0E\x02\x14\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\"\n\x04\f\x04\x0E\x04%\v\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06B\n\x06\x03" +
		"\x07\x03\x07\x05\x07F\n\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x03\x03\x02\f\x0F\x02J\x02" +
		"\x10\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b" +
		"(\x03\x02\x02\x02\nA\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EG\x03\x02\x02" +
		"\x02\x10\x12\x05\x04\x03\x02\x11\x13\x05\x06\x04\x02\x12\x11\x03\x02\x02" +
		"\x02\x13\x14\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02" +
		"\x02\x15\x16\x03\x02\x02\x02\x16\x17\x07\x02\x02\x03\x17\x03\x03\x02\x02" +
		"\x02\x18\x19\x07\x03\x02\x02\x19\x1A\x07\x11\x02\x02\x1A\x05\x03\x02\x02" +
		"\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x07\x11\x02\x02\x1D\x1E\x07\x05\x02" +
		"\x02\x1E#\x05\b\x05\x02\x1F \x07\x06\x02\x02 \"\x05\b\x05\x02!\x1F\x03" +
		"\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$&" +
		"\x03\x02\x02\x02%#\x03\x02\x02\x02&\'\x07\x07\x02\x02\'\x07\x03\x02\x02" +
		"\x02()\x07\x10\x02\x02)*\x07\b\x02\x02*+\x05\n\x06\x02+\t\x03\x02\x02" +
		"\x02,B\x05\f\x07\x02-.\x05\f\x07\x02./\x07\t\x02\x02/B\x03\x02\x02\x02" +
		"01\x05\f\x07\x0212\x07\n\x02\x022B\x03\x02\x02\x0234\x05\f\x07\x0245\x07" +
		"\v\x02\x0256\x05\f\x07\x026B\x03\x02\x02\x0278\x05\f\x07\x0289\x07\v\x02" +
		"\x029:\x05\f\x07\x02:;\x07\n\x02\x02;B\x03\x02\x02\x02<=\x05\f\x07\x02" +
		"=>\x07\v\x02\x02>?\x05\f\x07\x02?@\x07\t\x02\x02@B\x03\x02\x02\x02A,\x03" +
		"\x02\x02\x02A-\x03\x02\x02\x02A0\x03\x02\x02\x02A3\x03\x02\x02\x02A7\x03" +
		"\x02\x02\x02A<\x03\x02\x02\x02B\v\x03\x02\x02\x02CF\x05\x0E\b\x02DF\x07" +
		"\x11\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02F\r\x03\x02\x02\x02GH" +
		"\t\x02\x02\x02H\x0F\x03\x02\x02\x02\x06\x14#AE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendDataParser.__ATN) {
			BlendDataParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendDataParser._serializedATN));
		}

		return BlendDataParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public EOF(): TerminalNode { return this.getToken(BlendDataParser.EOF, 0); }
	public dataDefinition(): DataDefinitionContext[];
	public dataDefinition(i: number): DataDefinitionContext;
	public dataDefinition(i?: number): DataDefinitionContext | DataDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataDefinitionContext);
		} else {
			return this.getRuleContext(i, DataDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class DataDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
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
	public get ruleIndex(): number { return BlendDataParser.RULE_dataDefinition; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterDataDefinition) {
			listener.enterDataDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitDataDefinition) {
			listener.exitDataDefinition(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendDataParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_field; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext[];
	public baseType(i: number): BaseTypeContext;
	public baseType(i?: number): BaseTypeContext | BaseTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BaseTypeContext);
		} else {
			return this.getRuleContext(i, BaseTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_type; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public CAPITAL_IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_baseType; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendDataParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: BlendDataListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendDataListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


