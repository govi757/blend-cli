// Generated from src/grammar/BlendBasic.g4 by ANTLR 4.9.0-SNAPSHOT


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


export class BlendBasicLexer extends Lexer {
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
		"IDENTIFIER", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'section'", "'{'", "'}'", "'data-module'", "','", "'express-module'", 
		"'rn-module'", "'react-module'", "'mongo-module'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(BlendBasicLexer._LITERAL_NAMES, BlendBasicLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return BlendBasicLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(BlendBasicLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "BlendBasic.g4"; }

	// @Override
	public get ruleNames(): string[] { return BlendBasicLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return BlendBasicLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return BlendBasicLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return BlendBasicLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\rt\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x07\vi\n\v\f\v\x0E\vl\v\v" +
		"\x03\f\x06\fo\n\f\r\f\x0E\fp\x03\f\x03\f\x02\x02\x02\r\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x03\x02\x05\x05\x02C\\aac|\x06\x022;C\\aac" +
		"|\x05\x02\v\f\x0F\x0F\"\"\x02u\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
		"\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
		"\x02\x03\x19\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02\x02" +
		"\t%\x03\x02\x02\x02\v1\x03\x02\x02\x02\r3\x03\x02\x02\x02\x0FB\x03\x02" +
		"\x02\x02\x11L\x03\x02\x02\x02\x13Y\x03\x02\x02\x02\x15f\x03\x02\x02\x02" +
		"\x17n\x03\x02\x02\x02\x19\x1A\x07u\x02\x02\x1A\x1B\x07g\x02\x02\x1B\x1C" +
		"\x07e\x02\x02\x1C\x1D\x07v\x02\x02\x1D\x1E\x07k\x02\x02\x1E\x1F\x07q\x02" +
		"\x02\x1F \x07p\x02\x02 \x04\x03\x02\x02\x02!\"\x07}\x02\x02\"\x06\x03" +
		"\x02\x02\x02#$\x07\x7F\x02\x02$\b\x03\x02\x02\x02%&\x07f\x02\x02&\'\x07" +
		"c\x02\x02\'(\x07v\x02\x02()\x07c\x02\x02)*\x07/\x02\x02*+\x07o\x02\x02" +
		"+,\x07q\x02\x02,-\x07f\x02\x02-.\x07w\x02\x02./\x07n\x02\x02/0\x07g\x02" +
		"\x020\n\x03\x02\x02\x0212\x07.\x02\x022\f\x03\x02\x02\x0234\x07g\x02\x02" +
		"45\x07z\x02\x0256\x07r\x02\x0267\x07t\x02\x0278\x07g\x02\x0289\x07u\x02" +
		"\x029:\x07u\x02\x02:;\x07/\x02\x02;<\x07o\x02\x02<=\x07q\x02\x02=>\x07" +
		"f\x02\x02>?\x07w\x02\x02?@\x07n\x02\x02@A\x07g\x02\x02A\x0E\x03\x02\x02" +
		"\x02BC\x07t\x02\x02CD\x07p\x02\x02DE\x07/\x02\x02EF\x07o\x02\x02FG\x07" +
		"q\x02\x02GH\x07f\x02\x02HI\x07w\x02\x02IJ\x07n\x02\x02JK\x07g\x02\x02" +
		"K\x10\x03\x02\x02\x02LM\x07t\x02\x02MN\x07g\x02\x02NO\x07c\x02\x02OP\x07" +
		"e\x02\x02PQ\x07v\x02\x02QR\x07/\x02\x02RS\x07o\x02\x02ST\x07q\x02\x02" +
		"TU\x07f\x02\x02UV\x07w\x02\x02VW\x07n\x02\x02WX\x07g\x02\x02X\x12\x03" +
		"\x02\x02\x02YZ\x07o\x02\x02Z[\x07q\x02\x02[\\\x07p\x02\x02\\]\x07i\x02" +
		"\x02]^\x07q\x02\x02^_\x07/\x02\x02_`\x07o\x02\x02`a\x07q\x02\x02ab\x07" +
		"f\x02\x02bc\x07w\x02\x02cd\x07n\x02\x02de\x07g\x02\x02e\x14\x03\x02\x02" +
		"\x02fj\t\x02\x02\x02gi\t\x03\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02jk\x03\x02\x02\x02k\x16\x03\x02\x02\x02lj\x03\x02\x02" +
		"\x02mo\t\x04\x02\x02nm\x03\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02" +
		"\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rs\b\f\x02\x02s\x18\x03\x02\x02" +
		"\x02\x05\x02jp\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!BlendBasicLexer.__ATN) {
			BlendBasicLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(BlendBasicLexer._serializedATN));
		}

		return BlendBasicLexer.__ATN;
	}

}

