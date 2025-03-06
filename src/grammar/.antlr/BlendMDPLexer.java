// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendMDP.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class BlendMDPLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, IDENTIFIER=12, CAPITAL_IDENTIFIER=13, WS=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'parent'", "'props'", "'{'", "'}'", "':'", "'string'", 
			"'number'", "'boolean'", "'any'", "'object'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"IDENTIFIER", "CAPITAL_IDENTIFIER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public BlendMDPLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "BlendMDP.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000em\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0005\u000b[\b\u000b"+
		"\n\u000b\f\u000b^\t\u000b\u0001\f\u0001\f\u0005\fb\b\f\n\f\f\fe\t\f\u0001"+
		"\r\u0004\rh\b\r\u000b\r\f\ri\u0001\r\u0001\r\u0000\u0000\u000e\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u0001\u0000"+
		"\u0004\u0002\u0000__az\u0004\u000009AZ__az\u0001\u0000AZ\u0003\u0000\t"+
		"\n\r\r  o\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0001\u001d\u0001\u0000\u0000\u0000\u0003$\u0001\u0000\u0000\u0000\u0005"+
		"+\u0001\u0000\u0000\u0000\u00071\u0001\u0000\u0000\u0000\t3\u0001\u0000"+
		"\u0000\u0000\u000b5\u0001\u0000\u0000\u0000\r7\u0001\u0000\u0000\u0000"+
		"\u000f>\u0001\u0000\u0000\u0000\u0011E\u0001\u0000\u0000\u0000\u0013M"+
		"\u0001\u0000\u0000\u0000\u0015Q\u0001\u0000\u0000\u0000\u0017X\u0001\u0000"+
		"\u0000\u0000\u0019_\u0001\u0000\u0000\u0000\u001bg\u0001\u0000\u0000\u0000"+
		"\u001d\u001e\u0005m\u0000\u0000\u001e\u001f\u0005o\u0000\u0000\u001f "+
		"\u0005d\u0000\u0000 !\u0005u\u0000\u0000!\"\u0005l\u0000\u0000\"#\u0005"+
		"e\u0000\u0000#\u0002\u0001\u0000\u0000\u0000$%\u0005p\u0000\u0000%&\u0005"+
		"a\u0000\u0000&\'\u0005r\u0000\u0000\'(\u0005e\u0000\u0000()\u0005n\u0000"+
		"\u0000)*\u0005t\u0000\u0000*\u0004\u0001\u0000\u0000\u0000+,\u0005p\u0000"+
		"\u0000,-\u0005r\u0000\u0000-.\u0005o\u0000\u0000./\u0005p\u0000\u0000"+
		"/0\u0005s\u0000\u00000\u0006\u0001\u0000\u0000\u000012\u0005{\u0000\u0000"+
		"2\b\u0001\u0000\u0000\u000034\u0005}\u0000\u00004\n\u0001\u0000\u0000"+
		"\u000056\u0005:\u0000\u00006\f\u0001\u0000\u0000\u000078\u0005s\u0000"+
		"\u000089\u0005t\u0000\u00009:\u0005r\u0000\u0000:;\u0005i\u0000\u0000"+
		";<\u0005n\u0000\u0000<=\u0005g\u0000\u0000=\u000e\u0001\u0000\u0000\u0000"+
		">?\u0005n\u0000\u0000?@\u0005u\u0000\u0000@A\u0005m\u0000\u0000AB\u0005"+
		"b\u0000\u0000BC\u0005e\u0000\u0000CD\u0005r\u0000\u0000D\u0010\u0001\u0000"+
		"\u0000\u0000EF\u0005b\u0000\u0000FG\u0005o\u0000\u0000GH\u0005o\u0000"+
		"\u0000HI\u0005l\u0000\u0000IJ\u0005e\u0000\u0000JK\u0005a\u0000\u0000"+
		"KL\u0005n\u0000\u0000L\u0012\u0001\u0000\u0000\u0000MN\u0005a\u0000\u0000"+
		"NO\u0005n\u0000\u0000OP\u0005y\u0000\u0000P\u0014\u0001\u0000\u0000\u0000"+
		"QR\u0005o\u0000\u0000RS\u0005b\u0000\u0000ST\u0005j\u0000\u0000TU\u0005"+
		"e\u0000\u0000UV\u0005c\u0000\u0000VW\u0005t\u0000\u0000W\u0016\u0001\u0000"+
		"\u0000\u0000X\\\u0007\u0000\u0000\u0000Y[\u0007\u0001\u0000\u0000ZY\u0001"+
		"\u0000\u0000\u0000[^\u0001\u0000\u0000\u0000\\Z\u0001\u0000\u0000\u0000"+
		"\\]\u0001\u0000\u0000\u0000]\u0018\u0001\u0000\u0000\u0000^\\\u0001\u0000"+
		"\u0000\u0000_c\u0007\u0002\u0000\u0000`b\u0007\u0001\u0000\u0000a`\u0001"+
		"\u0000\u0000\u0000be\u0001\u0000\u0000\u0000ca\u0001\u0000\u0000\u0000"+
		"cd\u0001\u0000\u0000\u0000d\u001a\u0001\u0000\u0000\u0000ec\u0001\u0000"+
		"\u0000\u0000fh\u0007\u0003\u0000\u0000gf\u0001\u0000\u0000\u0000hi\u0001"+
		"\u0000\u0000\u0000ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000kl\u0006\r\u0000\u0000l\u001c\u0001\u0000\u0000"+
		"\u0000\u0004\u0000\\ci\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}