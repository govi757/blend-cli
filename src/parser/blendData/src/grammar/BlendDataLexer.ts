// Generated from src/grammar/BlendData.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class BlendDataLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "IDENTIFIER", "CAPITAL_IDENTIFIER", 
		"WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendDataLexer._LITERAL_NAMES, BlendDataLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendDataLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(BlendDataLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "BlendData.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendDataLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendDataLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return BlendDataLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return BlendDataLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12n\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x07\x0F\\\n\x0F\f\x0F\x0E\x0F_\v\x0F\x03\x10\x03\x10" +
		"\x07\x10c\n\x10\f\x10\x0E\x10f\v\x10\x03\x11\x06\x11i\n\x11\r\x11\x0E" +
		"\x11j\x03\x11\x03\x11\x02\x02\x02\x12\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"\x03\x02\x06\x04\x02aac|\x06\x022;C\\aac|\x03\x02C\\\x05\x02\v\f\x0F\x0F" +
		"\"\"\x02p\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x03#\x03\x02\x02\x02\x05*\x03\x02\x02\x02" +
		"\x07/\x03\x02\x02\x02\t1\x03\x02\x02\x02\v3\x03\x02\x02\x02\r5\x03\x02" +
		"\x02\x02\x0F7\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13<\x03\x02\x02\x02" +
		"\x15?\x03\x02\x02\x02\x17F\x03\x02\x02\x02\x19M\x03\x02\x02\x02\x1BU\x03" +
		"\x02\x02\x02\x1DY\x03\x02\x02\x02\x1F`\x03\x02\x02\x02!h\x03\x02\x02\x02" +
		"#$\x07o\x02\x02$%\x07q\x02\x02%&\x07f\x02\x02&\'\x07w\x02\x02\'(\x07n" +
		"\x02\x02()\x07g\x02\x02)\x04\x03\x02\x02\x02*+\x07f\x02\x02+,\x07c\x02" +
		"\x02,-\x07v\x02\x02-.\x07c\x02\x02.\x06\x03\x02\x02\x02/0\x07*\x02\x02" +
		"0\b\x03\x02\x02\x0212\x07.\x02\x022\n\x03\x02\x02\x0234\x07+\x02\x024" +
		"\f\x03\x02\x02\x0256\x07<\x02\x026\x0E\x03\x02\x02\x0278\x07]\x02\x02" +
		"89\x07_\x02\x029\x10\x03\x02\x02\x02:;\x07A\x02\x02;\x12\x03\x02\x02\x02" +
		"<=\x07/\x02\x02=>\x07@\x02\x02>\x14\x03\x02\x02\x02?@\x07u\x02\x02@A\x07" +
		"v\x02\x02AB\x07t\x02\x02BC\x07k\x02\x02CD\x07p\x02\x02DE\x07i\x02\x02" +
		"E\x16\x03\x02\x02\x02FG\x07p\x02\x02GH\x07w\x02\x02HI\x07o\x02\x02IJ\x07" +
		"d\x02\x02JK\x07g\x02\x02KL\x07t\x02\x02L\x18\x03\x02\x02\x02MN\x07d\x02" +
		"\x02NO\x07q\x02\x02OP\x07q\x02\x02PQ\x07n\x02\x02QR\x07g\x02\x02RS\x07" +
		"c\x02\x02ST\x07p\x02\x02T\x1A\x03\x02\x02\x02UV\x07c\x02\x02VW\x07p\x02" +
		"\x02WX\x07{\x02\x02X\x1C\x03\x02\x02\x02Y]\t\x02\x02\x02Z\\\t\x03\x02" +
		"\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02" +
		"\x02\x02^\x1E\x03\x02\x02\x02_]\x03\x02\x02\x02`d\t\x04\x02\x02ac\t\x03" +
		"\x02\x02ba\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02" +
		"\x02\x02e \x03\x02\x02\x02fd\x03\x02\x02\x02gi\t\x05\x02\x02hg\x03\x02" +
		"\x02\x02ij\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\b\x11\x02\x02m\"\x03\x02\x02\x02\x06\x02]dj\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendDataLexer.__ATN) {
			BlendDataLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendDataLexer._serializedATN));
		}

		return BlendDataLexer.__ATN;
	}

}

