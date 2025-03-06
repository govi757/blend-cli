// Generated from src/grammar/BlendMDP.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class BlendMDPLexer extends Lexer {
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
		"T__9", "T__10", "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendMDPLexer._LITERAL_NAMES, BlendMDPLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendMDPLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(BlendMDPLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "BlendMDP.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendMDPLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendMDPLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return BlendMDPLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return BlendMDPLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10o\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x07\r]\n\r\f\r\x0E\r`\v\r\x03\x0E\x03\x0E\x07\x0Ed\n\x0E" +
		"\f\x0E\x0E\x0Eg\v\x0E\x03\x0F\x06\x0Fj\n\x0F\r\x0F\x0E\x0Fk\x03\x0F\x03" +
		"\x0F\x02\x02\x02\x10\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02\x06\x04\x02aac|\x06\x022;C\\aac|" +
		"\x03\x02C\\\x05\x02\v\f\x0F\x0F\"\"\x02q\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05&\x03\x02\x02\x02\x07-\x03\x02" +
		"\x02\x02\t3\x03\x02\x02\x02\v5\x03\x02\x02\x02\r7\x03\x02\x02\x02\x0F" +
		"9\x03\x02\x02\x02\x11@\x03\x02\x02\x02\x13G\x03\x02\x02\x02\x15O\x03\x02" +
		"\x02\x02\x17S\x03\x02\x02\x02\x19Z\x03\x02\x02\x02\x1Ba\x03\x02\x02\x02" +
		"\x1Di\x03\x02\x02\x02\x1F \x07o\x02\x02 !\x07q\x02\x02!\"\x07f\x02\x02" +
		"\"#\x07w\x02\x02#$\x07n\x02\x02$%\x07g\x02\x02%\x04\x03\x02\x02\x02&\'" +
		"\x07r\x02\x02\'(\x07c\x02\x02()\x07t\x02\x02)*\x07g\x02\x02*+\x07p\x02" +
		"\x02+,\x07v\x02\x02,\x06\x03\x02\x02\x02-.\x07r\x02\x02./\x07t\x02\x02" +
		"/0\x07q\x02\x0201\x07r\x02\x0212\x07u\x02\x022\b\x03\x02\x02\x0234\x07" +
		"}\x02\x024\n\x03\x02\x02\x0256\x07\x7F\x02\x026\f\x03\x02\x02\x0278\x07" +
		"<\x02\x028\x0E\x03\x02\x02\x029:\x07u\x02\x02:;\x07v\x02\x02;<\x07t\x02" +
		"\x02<=\x07k\x02\x02=>\x07p\x02\x02>?\x07i\x02\x02?\x10\x03\x02\x02\x02" +
		"@A\x07p\x02\x02AB\x07w\x02\x02BC\x07o\x02\x02CD\x07d\x02\x02DE\x07g\x02" +
		"\x02EF\x07t\x02\x02F\x12\x03\x02\x02\x02GH\x07d\x02\x02HI\x07q\x02\x02" +
		"IJ\x07q\x02\x02JK\x07n\x02\x02KL\x07g\x02\x02LM\x07c\x02\x02MN\x07p\x02" +
		"\x02N\x14\x03\x02\x02\x02OP\x07c\x02\x02PQ\x07p\x02\x02QR\x07{\x02\x02" +
		"R\x16\x03\x02\x02\x02ST\x07q\x02\x02TU\x07d\x02\x02UV\x07l\x02\x02VW\x07" +
		"g\x02\x02WX\x07e\x02\x02XY\x07v\x02\x02Y\x18\x03\x02\x02\x02Z^\t\x02\x02" +
		"\x02[]\t\x03\x02\x02\\[\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02" +
		"\x02^_\x03\x02\x02\x02_\x1A\x03\x02\x02\x02`^\x03\x02\x02\x02ae\t\x04" +
		"\x02\x02bd\t\x03\x02\x02cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02" +
		"\x02\x02ef\x03\x02\x02\x02f\x1C\x03\x02\x02\x02ge\x03\x02\x02\x02hj\t" +
		"\x05\x02\x02ih\x03\x02\x02\x02jk\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03" +
		"\x02\x02\x02lm\x03\x02\x02\x02mn\b\x0F\x02\x02n\x1E\x03\x02\x02\x02\x06" +
		"\x02^ek\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendMDPLexer.__ATN) {
			BlendMDPLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendMDPLexer._serializedATN));
		}

		return BlendMDPLexer.__ATN;
	}

}

