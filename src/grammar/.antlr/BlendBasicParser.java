// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendBasic.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendBasicParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		IDENTIFIER=10, WS=11;
	public static final int
		RULE_sections = 0, RULE_section = 1, RULE_module = 2, RULE_dataModule = 3, 
		RULE_expressModule = 4, RULE_rnModule = 5, RULE_reactModule = 6, RULE_mongoModule = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"sections", "section", "module", "dataModule", "expressModule", "rnModule", 
			"reactModule", "mongoModule"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'section'", "'{'", "'}'", "'data-module'", "','", "'express-module'", 
			"'rn-module'", "'react-module'", "'mongo-module'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, "IDENTIFIER", 
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

	@Override
	public String getGrammarFileName() { return "BlendBasic.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendBasicParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SectionsContext extends ParserRuleContext {
		public List<SectionContext> section() {
			return getRuleContexts(SectionContext.class);
		}
		public SectionContext section(int i) {
			return getRuleContext(SectionContext.class,i);
		}
		public SectionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sections; }
	}

	public final SectionsContext sections() throws RecognitionException {
		SectionsContext _localctx = new SectionsContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sections);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				section();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SectionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendBasicParser.IDENTIFIER, 0); }
		public List<ModuleContext> module() {
			return getRuleContexts(ModuleContext.class);
		}
		public ModuleContext module(int i) {
			return getRuleContext(ModuleContext.class,i);
		}
		public SectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_section; }
	}

	public final SectionContext section() throws RecognitionException {
		SectionContext _localctx = new SectionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_section);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(T__0);
			setState(22);
			match(IDENTIFIER);
			setState(23);
			match(T__1);
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 976L) != 0)) {
				{
				{
				setState(24);
				module();
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(30);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ModuleContext extends ParserRuleContext {
		public DataModuleContext dataModule() {
			return getRuleContext(DataModuleContext.class,0);
		}
		public ExpressModuleContext expressModule() {
			return getRuleContext(ExpressModuleContext.class,0);
		}
		public RnModuleContext rnModule() {
			return getRuleContext(RnModuleContext.class,0);
		}
		public MongoModuleContext mongoModule() {
			return getRuleContext(MongoModuleContext.class,0);
		}
		public ReactModuleContext reactModule() {
			return getRuleContext(ReactModuleContext.class,0);
		}
		public ModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_module; }
	}

	public final ModuleContext module() throws RecognitionException {
		ModuleContext _localctx = new ModuleContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_module);
		try {
			setState(37);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__3:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				dataModule();
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				expressModule();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 3);
				{
				setState(34);
				rnModule();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 4);
				{
				setState(35);
				mongoModule();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 5);
				{
				setState(36);
				reactModule();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DataModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public DataModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataModule; }
	}

	public final DataModuleContext dataModule() throws RecognitionException {
		DataModuleContext _localctx = new DataModuleContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_dataModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(T__3);
			setState(40);
			match(IDENTIFIER);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(41);
				match(T__4);
				setState(42);
				match(IDENTIFIER);
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public ExpressModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressModule; }
	}

	public final ExpressModuleContext expressModule() throws RecognitionException {
		ExpressModuleContext _localctx = new ExpressModuleContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_expressModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(T__5);
			setState(49);
			match(IDENTIFIER);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(50);
				match(T__4);
				setState(51);
				match(IDENTIFIER);
				}
				}
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RnModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public RnModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rnModule; }
	}

	public final RnModuleContext rnModule() throws RecognitionException {
		RnModuleContext _localctx = new RnModuleContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_rnModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57);
			match(T__6);
			setState(58);
			match(IDENTIFIER);
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(59);
				match(T__4);
				setState(60);
				match(IDENTIFIER);
				}
				}
				setState(65);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReactModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public ReactModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reactModule; }
	}

	public final ReactModuleContext reactModule() throws RecognitionException {
		ReactModuleContext _localctx = new ReactModuleContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_reactModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(T__7);
			setState(67);
			match(IDENTIFIER);
			setState(72);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(68);
				match(T__4);
				setState(69);
				match(IDENTIFIER);
				}
				}
				setState(74);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MongoModuleContext extends ParserRuleContext {
		public List<TerminalNode> IDENTIFIER() { return getTokens(BlendBasicParser.IDENTIFIER); }
		public TerminalNode IDENTIFIER(int i) {
			return getToken(BlendBasicParser.IDENTIFIER, i);
		}
		public MongoModuleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mongoModule; }
	}

	public final MongoModuleContext mongoModule() throws RecognitionException {
		MongoModuleContext _localctx = new MongoModuleContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_mongoModule);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__8);
			setState(76);
			match(IDENTIFIER);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(77);
				match(T__4);
				setState(78);
				match(IDENTIFIER);
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000bU\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u001a\b\u0001\n\u0001"+
		"\f\u0001\u001d\t\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002&\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0005\u0003,\b\u0003\n\u0003\f\u0003"+
		"/\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004"+
		"5\b\u0004\n\u0004\f\u00048\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0005\u0005>\b\u0005\n\u0005\f\u0005A\t\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006G\b\u0006\n\u0006\f\u0006"+
		"J\t\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007"+
		"P\b\u0007\n\u0007\f\u0007S\t\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0000\u0000W\u0000\u0011\u0001\u0000\u0000\u0000"+
		"\u0002\u0015\u0001\u0000\u0000\u0000\u0004%\u0001\u0000\u0000\u0000\u0006"+
		"\'\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000\u0000\n9\u0001\u0000\u0000"+
		"\u0000\fB\u0001\u0000\u0000\u0000\u000eK\u0001\u0000\u0000\u0000\u0010"+
		"\u0012\u0003\u0002\u0001\u0000\u0011\u0010\u0001\u0000\u0000\u0000\u0012"+
		"\u0013\u0001\u0000\u0000\u0000\u0013\u0011\u0001\u0000\u0000\u0000\u0013"+
		"\u0014\u0001\u0000\u0000\u0000\u0014\u0001\u0001\u0000\u0000\u0000\u0015"+
		"\u0016\u0005\u0001\u0000\u0000\u0016\u0017\u0005\n\u0000\u0000\u0017\u001b"+
		"\u0005\u0002\u0000\u0000\u0018\u001a\u0003\u0004\u0002\u0000\u0019\u0018"+
		"\u0001\u0000\u0000\u0000\u001a\u001d\u0001\u0000\u0000\u0000\u001b\u0019"+
		"\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u001e"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001e\u001f"+
		"\u0005\u0003\u0000\u0000\u001f\u0003\u0001\u0000\u0000\u0000 &\u0003\u0006"+
		"\u0003\u0000!&\u0003\b\u0004\u0000\"&\u0003\n\u0005\u0000#&\u0003\u000e"+
		"\u0007\u0000$&\u0003\f\u0006\u0000% \u0001\u0000\u0000\u0000%!\u0001\u0000"+
		"\u0000\u0000%\"\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000%$\u0001"+
		"\u0000\u0000\u0000&\u0005\u0001\u0000\u0000\u0000\'(\u0005\u0004\u0000"+
		"\u0000(-\u0005\n\u0000\u0000)*\u0005\u0005\u0000\u0000*,\u0005\n\u0000"+
		"\u0000+)\u0001\u0000\u0000\u0000,/\u0001\u0000\u0000\u0000-+\u0001\u0000"+
		"\u0000\u0000-.\u0001\u0000\u0000\u0000.\u0007\u0001\u0000\u0000\u0000"+
		"/-\u0001\u0000\u0000\u000001\u0005\u0006\u0000\u000016\u0005\n\u0000\u0000"+
		"23\u0005\u0005\u0000\u000035\u0005\n\u0000\u000042\u0001\u0000\u0000\u0000"+
		"58\u0001\u0000\u0000\u000064\u0001\u0000\u0000\u000067\u0001\u0000\u0000"+
		"\u00007\t\u0001\u0000\u0000\u000086\u0001\u0000\u0000\u00009:\u0005\u0007"+
		"\u0000\u0000:?\u0005\n\u0000\u0000;<\u0005\u0005\u0000\u0000<>\u0005\n"+
		"\u0000\u0000=;\u0001\u0000\u0000\u0000>A\u0001\u0000\u0000\u0000?=\u0001"+
		"\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@\u000b\u0001\u0000\u0000"+
		"\u0000A?\u0001\u0000\u0000\u0000BC\u0005\b\u0000\u0000CH\u0005\n\u0000"+
		"\u0000DE\u0005\u0005\u0000\u0000EG\u0005\n\u0000\u0000FD\u0001\u0000\u0000"+
		"\u0000GJ\u0001\u0000\u0000\u0000HF\u0001\u0000\u0000\u0000HI\u0001\u0000"+
		"\u0000\u0000I\r\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000KL\u0005"+
		"\t\u0000\u0000LQ\u0005\n\u0000\u0000MN\u0005\u0005\u0000\u0000NP\u0005"+
		"\n\u0000\u0000OM\u0001\u0000\u0000\u0000PS\u0001\u0000\u0000\u0000QO\u0001"+
		"\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000R\u000f\u0001\u0000\u0000"+
		"\u0000SQ\u0001\u0000\u0000\u0000\b\u0013\u001b%-6?HQ";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}