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
public class BlendRNLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, LAYOUT_TYPE=13, PATH_IDENTIFIER=14, IDENTIFIER=15, 
		CAPITAL_IDENTIFIER=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "LAYOUT_TYPE", "PATH_IDENTIFIER", "IDENTIFIER", 
			"CAPITAL_IDENTIFIER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'screen'", "','", "'under'", "'layout'", "'('", "')'", 
			"'type'", "'{'", "'}'", "'page'", "'view'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "LAYOUT_TYPE", "PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", 
			"WS"
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


	public BlendRNLexer(CharStream input) {
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
		"\u0004\u0000\u0011\u0081\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0003\fc\b\f\u0001\r\u0001\r\u0004\rg\b\r\u000b\r\f\rh\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0005\u000eo\b\u000e\n\u000e\f\u000e"+
		"r\t\u000e\u0001\u000f\u0001\u000f\u0005\u000fv\b\u000f\n\u000f\f\u000f"+
		"y\t\u000f\u0001\u0010\u0004\u0010|\b\u0010\u000b\u0010\f\u0010}\u0001"+
		"\u0010\u0001\u0010\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011\u0001"+
		"\u0000\u0005\u0004\u0000/9AZ__az\u0002\u0000__az\u0004\u000009AZ__az\u0001"+
		"\u0000AZ\u0003\u0000\t\n\r\r  \u0085\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0001#\u0001\u0000"+
		"\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u00051\u0001\u0000\u0000\u0000"+
		"\u00073\u0001\u0000\u0000\u0000\t9\u0001\u0000\u0000\u0000\u000b@\u0001"+
		"\u0000\u0000\u0000\rB\u0001\u0000\u0000\u0000\u000fD\u0001\u0000\u0000"+
		"\u0000\u0011I\u0001\u0000\u0000\u0000\u0013K\u0001\u0000\u0000\u0000\u0015"+
		"M\u0001\u0000\u0000\u0000\u0017R\u0001\u0000\u0000\u0000\u0019b\u0001"+
		"\u0000\u0000\u0000\u001bd\u0001\u0000\u0000\u0000\u001dl\u0001\u0000\u0000"+
		"\u0000\u001fs\u0001\u0000\u0000\u0000!{\u0001\u0000\u0000\u0000#$\u0005"+
		"m\u0000\u0000$%\u0005o\u0000\u0000%&\u0005d\u0000\u0000&\'\u0005u\u0000"+
		"\u0000\'(\u0005l\u0000\u0000()\u0005e\u0000\u0000)\u0002\u0001\u0000\u0000"+
		"\u0000*+\u0005s\u0000\u0000+,\u0005c\u0000\u0000,-\u0005r\u0000\u0000"+
		"-.\u0005e\u0000\u0000./\u0005e\u0000\u0000/0\u0005n\u0000\u00000\u0004"+
		"\u0001\u0000\u0000\u000012\u0005,\u0000\u00002\u0006\u0001\u0000\u0000"+
		"\u000034\u0005u\u0000\u000045\u0005n\u0000\u000056\u0005d\u0000\u0000"+
		"67\u0005e\u0000\u000078\u0005r\u0000\u00008\b\u0001\u0000\u0000\u0000"+
		"9:\u0005l\u0000\u0000:;\u0005a\u0000\u0000;<\u0005y\u0000\u0000<=\u0005"+
		"o\u0000\u0000=>\u0005u\u0000\u0000>?\u0005t\u0000\u0000?\n\u0001\u0000"+
		"\u0000\u0000@A\u0005(\u0000\u0000A\f\u0001\u0000\u0000\u0000BC\u0005)"+
		"\u0000\u0000C\u000e\u0001\u0000\u0000\u0000DE\u0005t\u0000\u0000EF\u0005"+
		"y\u0000\u0000FG\u0005p\u0000\u0000GH\u0005e\u0000\u0000H\u0010\u0001\u0000"+
		"\u0000\u0000IJ\u0005{\u0000\u0000J\u0012\u0001\u0000\u0000\u0000KL\u0005"+
		"}\u0000\u0000L\u0014\u0001\u0000\u0000\u0000MN\u0005p\u0000\u0000NO\u0005"+
		"a\u0000\u0000OP\u0005g\u0000\u0000PQ\u0005e\u0000\u0000Q\u0016\u0001\u0000"+
		"\u0000\u0000RS\u0005v\u0000\u0000ST\u0005i\u0000\u0000TU\u0005e\u0000"+
		"\u0000UV\u0005w\u0000\u0000V\u0018\u0001\u0000\u0000\u0000WX\u0005S\u0000"+
		"\u0000XY\u0005t\u0000\u0000YZ\u0005a\u0000\u0000Z[\u0005c\u0000\u0000"+
		"[c\u0005k\u0000\u0000\\]\u0005D\u0000\u0000]^\u0005r\u0000\u0000^_\u0005"+
		"a\u0000\u0000_`\u0005w\u0000\u0000`a\u0005e\u0000\u0000ac\u0005r\u0000"+
		"\u0000bW\u0001\u0000\u0000\u0000b\\\u0001\u0000\u0000\u0000c\u001a\u0001"+
		"\u0000\u0000\u0000df\u0005\"\u0000\u0000eg\u0007\u0000\u0000\u0000fe\u0001"+
		"\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000"+
		"hi\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jk\u0005\"\u0000\u0000"+
		"k\u001c\u0001\u0000\u0000\u0000lp\u0007\u0001\u0000\u0000mo\u0007\u0002"+
		"\u0000\u0000nm\u0001\u0000\u0000\u0000or\u0001\u0000\u0000\u0000pn\u0001"+
		"\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000q\u001e\u0001\u0000\u0000"+
		"\u0000rp\u0001\u0000\u0000\u0000sw\u0007\u0003\u0000\u0000tv\u0007\u0002"+
		"\u0000\u0000ut\u0001\u0000\u0000\u0000vy\u0001\u0000\u0000\u0000wu\u0001"+
		"\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000x \u0001\u0000\u0000\u0000"+
		"yw\u0001\u0000\u0000\u0000z|\u0007\u0004\u0000\u0000{z\u0001\u0000\u0000"+
		"\u0000|}\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000}~\u0001\u0000"+
		"\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0080\u0006\u0010\u0000"+
		"\u0000\u0080\"\u0001\u0000\u0000\u0000\u0006\u0000bhpw}\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}