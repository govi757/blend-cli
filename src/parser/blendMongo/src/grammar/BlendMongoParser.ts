// Generated from src/grammar/BlendMongo.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { BlendMongoListener } from "./BlendMongoListener";

export class BlendMongoParser extends Parser {
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
	public static readonly IDENTIFIER = 20;
	public static readonly CAPITAL_IDENTIFIER = 21;
	public static readonly WS = 22;
	public static readonly RULE_program = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_collectionDefinition = 2;
	public static readonly RULE_property = 3;
	public static readonly RULE_propertyChars = 4;
	public static readonly RULE_reference = 5;
	public static readonly RULE_mongoChars = 6;
	public static readonly RULE_type = 7;
	public static readonly RULE_baseType = 8;
	public static readonly RULE_primitiveType = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "moduleDefinition", "collectionDefinition", "property", "propertyChars", 
		"reference", "mongoChars", "type", "baseType", "primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'module'", "'collection'", "'{'", "','", "'}'", "'property'", 
		"':'", "'('", "')'", "'reference'", "'unique'", "'index'", "'[]'", "'?'", 
		"'String'", "'Number'", "'Boolean'", "'any'", "'Object'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", 
		"CAPITAL_IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendMongoParser._LITERAL_NAMES, BlendMongoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendMongoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "BlendMongo.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendMongoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendMongoParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(BlendMongoParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, BlendMongoParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.moduleDefinition();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 21;
				this.collectionDefinition();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === BlendMongoParser.T__1);
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
		this.enterRule(_localctx, 2, BlendMongoParser.RULE_moduleDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(BlendMongoParser.T__0);
			this.state = 27;
			this.match(BlendMongoParser.CAPITAL_IDENTIFIER);
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
	public collectionDefinition(): CollectionDefinitionContext {
		let _localctx: CollectionDefinitionContext = new CollectionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, BlendMongoParser.RULE_collectionDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.match(BlendMongoParser.T__1);
			this.state = 30;
			this.match(BlendMongoParser.CAPITAL_IDENTIFIER);
			this.state = 31;
			this.match(BlendMongoParser.T__2);
			this.state = 32;
			this.property();
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 33;
					this.match(BlendMongoParser.T__3);
					this.state = 34;
					this.property();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendMongoParser.T__3) {
				{
				this.state = 40;
				this.match(BlendMongoParser.T__3);
				this.state = 41;
				this.reference();
				this.state = 46;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === BlendMongoParser.T__3) {
					{
					{
					this.state = 42;
					this.match(BlendMongoParser.T__3);
					this.state = 43;
					this.reference();
					}
					}
					this.state = 48;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 51;
			this.match(BlendMongoParser.T__4);
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, BlendMongoParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(BlendMongoParser.T__5);
			this.state = 54;
			this.match(BlendMongoParser.IDENTIFIER);
			this.state = 55;
			this.match(BlendMongoParser.T__6);
			this.state = 56;
			this.type();
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendMongoParser.T__7) {
				{
				this.state = 57;
				this.propertyChars();
				}
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
	public propertyChars(): PropertyCharsContext {
		let _localctx: PropertyCharsContext = new PropertyCharsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, BlendMongoParser.RULE_propertyChars);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(BlendMongoParser.T__7);
			this.state = 61;
			this.mongoChars();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === BlendMongoParser.T__3) {
				{
				{
				this.state = 62;
				this.match(BlendMongoParser.T__3);
				this.state = 63;
				this.mongoChars();
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this.match(BlendMongoParser.T__8);
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, BlendMongoParser.RULE_reference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(BlendMongoParser.T__9);
			this.state = 72;
			this.match(BlendMongoParser.IDENTIFIER);
			this.state = 73;
			this.match(BlendMongoParser.T__6);
			this.state = 74;
			this.match(BlendMongoParser.CAPITAL_IDENTIFIER);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === BlendMongoParser.T__7) {
				{
				this.state = 75;
				this.propertyChars();
				}
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
	public mongoChars(): MongoCharsContext {
		let _localctx: MongoCharsContext = new MongoCharsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, BlendMongoParser.RULE_mongoChars);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			_la = this._input.LA(1);
			if (!(_la === BlendMongoParser.T__10 || _la === BlendMongoParser.T__11)) {
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
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, BlendMongoParser.RULE_type);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.baseType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.baseType();
				this.state = 82;
				this.match(BlendMongoParser.T__12);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 84;
				this.baseType();
				this.state = 85;
				this.match(BlendMongoParser.T__13);
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
		this.enterRule(_localctx, 16, BlendMongoParser.RULE_baseType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.primitiveType();
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
		this.enterRule(_localctx, 18, BlendMongoParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << BlendMongoParser.T__14) | (1 << BlendMongoParser.T__15) | (1 << BlendMongoParser.T__16) | (1 << BlendMongoParser.T__17) | (1 << BlendMongoParser.T__18))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18`\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x06\x02" +
		"\x19\n\x02\r\x02\x0E\x02\x1A\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04&\n\x04\f\x04\x0E\x04)\v\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04/\n\x04\f\x04\x0E\x042\v\x04\x05\x044" +
		"\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"=\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06C\n\x06\f\x06\x0E\x06F" +
		"\v\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"O\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tZ\n" +
		"\t\x03\n\x03\n\x03\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x04\x03\x02\r\x0E" +
		"\x03\x02\x11\x15\x02^\x02\x16\x03\x02\x02\x02\x04\x1C\x03\x02\x02\x02" +
		"\x06\x1F\x03\x02\x02\x02\b7\x03\x02\x02\x02\n>\x03\x02\x02\x02\fI\x03" +
		"\x02\x02\x02\x0EP\x03\x02\x02\x02\x10Y\x03\x02\x02\x02\x12[\x03\x02\x02" +
		"\x02\x14]\x03\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x19\x05\x06\x04" +
		"\x02\x18\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x18\x03\x02\x02" +
		"\x02\x1A\x1B\x03\x02\x02\x02\x1B\x03\x03\x02\x02\x02\x1C\x1D\x07\x03\x02" +
		"\x02\x1D\x1E\x07\x17\x02\x02\x1E\x05\x03\x02\x02\x02\x1F \x07\x04\x02" +
		"\x02 !\x07\x17\x02\x02!\"\x07\x05\x02\x02\"\'\x05\b\x05\x02#$\x07\x06" +
		"\x02\x02$&\x05\b\x05\x02%#\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02" +
		"\x02\x02\'(\x03\x02\x02\x02(3\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07" +
		"\x06\x02\x02+0\x05\f\x07\x02,-\x07\x06\x02\x02-/\x05\f\x07\x02.,\x03\x02" +
		"\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0214\x03\x02" +
		"\x02\x0220\x03\x02\x02\x023*\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02" +
		"\x02\x0256\x07\x07\x02\x026\x07\x03\x02\x02\x0278\x07\b\x02\x0289\x07" +
		"\x16\x02\x029:\x07\t\x02\x02:<\x05\x10\t\x02;=\x05\n\x06\x02<;\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=\t\x03\x02\x02\x02>?\x07\n\x02\x02?D\x05\x0E" +
		"\b\x02@A\x07\x06\x02\x02AC\x05\x0E\b\x02B@\x03\x02\x02\x02CF\x03\x02\x02" +
		"\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02FD\x03\x02\x02" +
		"\x02GH\x07\v\x02\x02H\v\x03\x02\x02\x02IJ\x07\f\x02\x02JK\x07\x16\x02" +
		"\x02KL\x07\t\x02\x02LN\x07\x17\x02\x02MO\x05\n\x06\x02NM\x03\x02\x02\x02" +
		"NO\x03\x02\x02\x02O\r\x03\x02\x02\x02PQ\t\x02\x02\x02Q\x0F\x03\x02\x02" +
		"\x02RZ\x05\x12\n\x02ST\x05\x12\n\x02TU\x07\x0F\x02\x02UZ\x03\x02\x02\x02" +
		"VW\x05\x12\n\x02WX\x07\x10\x02\x02XZ\x03\x02\x02\x02YR\x03\x02\x02\x02" +
		"YS\x03\x02\x02\x02YV\x03\x02\x02\x02Z\x11\x03\x02\x02\x02[\\\x05\x14\v" +
		"\x02\\\x13\x03\x02\x02\x02]^\t\x03\x02\x02^\x15\x03\x02\x02\x02\n\x1A" +
		"\'03<DNY";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendMongoParser.__ATN) {
			BlendMongoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendMongoParser._serializedATN));
		}

		return BlendMongoParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext {
		return this.getRuleContext(0, ModuleDefinitionContext);
	}
	public collectionDefinition(): CollectionDefinitionContext[];
	public collectionDefinition(i: number): CollectionDefinitionContext;
	public collectionDefinition(i?: number): CollectionDefinitionContext | CollectionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CollectionDefinitionContext);
		} else {
			return this.getRuleContext(i, CollectionDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_program; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class CollectionDefinitionContext extends ParserRuleContext {
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public reference(): ReferenceContext[];
	public reference(i: number): ReferenceContext;
	public reference(i?: number): ReferenceContext | ReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReferenceContext);
		} else {
			return this.getRuleContext(i, ReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_collectionDefinition; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterCollectionDefinition) {
			listener.enterCollectionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitCollectionDefinition) {
			listener.exitCollectionDefinition(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendMongoParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public propertyChars(): PropertyCharsContext | undefined {
		return this.tryGetRuleContext(0, PropertyCharsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_property; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
}


export class PropertyCharsContext extends ParserRuleContext {
	public mongoChars(): MongoCharsContext[];
	public mongoChars(i: number): MongoCharsContext;
	public mongoChars(i?: number): MongoCharsContext | MongoCharsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MongoCharsContext);
		} else {
			return this.getRuleContext(i, MongoCharsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_propertyChars; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterPropertyChars) {
			listener.enterPropertyChars(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitPropertyChars) {
			listener.exitPropertyChars(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(BlendMongoParser.IDENTIFIER, 0); }
	public CAPITAL_IDENTIFIER(): TerminalNode { return this.getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
	public propertyChars(): PropertyCharsContext | undefined {
		return this.tryGetRuleContext(0, PropertyCharsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_reference; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class MongoCharsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_mongoChars; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterMongoChars) {
			listener.enterMongoChars(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitMongoChars) {
			listener.exitMongoChars(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext {
		return this.getRuleContext(0, BaseTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_type; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext {
		return this.getRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return BlendMongoParser.RULE_baseType; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
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
	public get ruleIndex(): number { return BlendMongoParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: BlendMongoListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: BlendMongoListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
}


