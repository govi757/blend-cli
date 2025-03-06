// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendReact.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendReactParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, PATH_IDENTIFIER=13, IDENTIFIER=14, CAPITAL_IDENTIFIER=15, 
		WS=16;
	public static final int
		RULE_program = 0, RULE_moduleDefinition = 1, RULE_screenDefenition = 2, 
		RULE_componentDefenition = 3, RULE_layoutDefinition = 4, RULE_pageDefinition = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "moduleDefinition", "screenDefenition", "componentDefenition", 
			"layoutDefinition", "pageDefinition"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'screen'", "','", "'under'", "'component'", "'layout'", 
			"'('", "')'", "'{'", "'}'", "'page'", "'view'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, "PATH_IDENTIFIER", "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS"
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
	public String getGrammarFileName() { return "BlendReact.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendReactParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public List<ComponentDefenitionContext> componentDefenition() {
			return getRuleContexts(ComponentDefenitionContext.class);
		}
		public ComponentDefenitionContext componentDefenition(int i) {
			return getRuleContext(ComponentDefenitionContext.class,i);
		}
		public List<ScreenDefenitionContext> screenDefenition() {
			return getRuleContexts(ScreenDefenitionContext.class);
		}
		public ScreenDefenitionContext screenDefenition(int i) {
			return getRuleContext(ScreenDefenitionContext.class,i);
		}
		public List<LayoutDefinitionContext> layoutDefinition() {
			return getRuleContexts(LayoutDefinitionContext.class);
		}
		public LayoutDefinitionContext layoutDefinition(int i) {
			return getRuleContext(LayoutDefinitionContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			moduleDefinition();
			setState(16);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(13);
				componentDefenition();
				}
				}
				setState(18);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(19);
				screenDefenition();
				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(28);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(25);
				layoutDefinition();
				}
				}
				setState(30);
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
	public static class ModuleDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendReactParser.CAPITAL_IDENTIFIER, 0); }
		public ModuleDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDefinition; }
	}

	public final ModuleDefinitionContext moduleDefinition() throws RecognitionException {
		ModuleDefinitionContext _localctx = new ModuleDefinitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_moduleDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			match(T__0);
			setState(32);
			match(CAPITAL_IDENTIFIER);
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
	public static class ScreenDefenitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendReactParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendReactParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendReactParser.PATH_IDENTIFIER, 0); }
		public ScreenDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_screenDefenition; }
	}

	public final ScreenDefenitionContext screenDefenition() throws RecognitionException {
		ScreenDefenitionContext _localctx = new ScreenDefenitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_screenDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(T__1);
			setState(35);
			match(CAPITAL_IDENTIFIER);
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(36);
				match(T__2);
				setState(37);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(43);
			match(T__3);
			setState(44);
			match(PATH_IDENTIFIER);
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
	public static class ComponentDefenitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendReactParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendReactParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendReactParser.PATH_IDENTIFIER, 0); }
		public ComponentDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentDefenition; }
	}

	public final ComponentDefenitionContext componentDefenition() throws RecognitionException {
		ComponentDefenitionContext _localctx = new ComponentDefenitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_componentDefenition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(T__4);
			setState(47);
			match(CAPITAL_IDENTIFIER);
			setState(52);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(48);
				match(T__2);
				setState(49);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(54);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(55);
			match(T__3);
			setState(56);
			match(PATH_IDENTIFIER);
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
	public static class LayoutDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendReactParser.CAPITAL_IDENTIFIER, 0); }
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendReactParser.PATH_IDENTIFIER, 0); }
		public List<PageDefinitionContext> pageDefinition() {
			return getRuleContexts(PageDefinitionContext.class);
		}
		public PageDefinitionContext pageDefinition(int i) {
			return getRuleContext(PageDefinitionContext.class,i);
		}
		public List<LayoutDefinitionContext> layoutDefinition() {
			return getRuleContexts(LayoutDefinitionContext.class);
		}
		public LayoutDefinitionContext layoutDefinition(int i) {
			return getRuleContext(LayoutDefinitionContext.class,i);
		}
		public LayoutDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_layoutDefinition; }
	}

	public final LayoutDefinitionContext layoutDefinition() throws RecognitionException {
		LayoutDefinitionContext _localctx = new LayoutDefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_layoutDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			match(T__5);
			setState(59);
			match(CAPITAL_IDENTIFIER);
			setState(60);
			match(T__6);
			setState(61);
			match(PATH_IDENTIFIER);
			setState(62);
			match(T__7);
			setState(63);
			match(T__8);
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(64);
				pageDefinition();
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				{
				setState(70);
				layoutDefinition();
				}
				}
				setState(75);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(76);
			match(T__9);
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
	public static class PageDefinitionContext extends ParserRuleContext {
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendReactParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendReactParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendReactParser.PATH_IDENTIFIER, 0); }
		public PageDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageDefinition; }
	}

	public final PageDefinitionContext pageDefinition() throws RecognitionException {
		PageDefinitionContext _localctx = new PageDefinitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_pageDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(T__10);
			setState(79);
			match(CAPITAL_IDENTIFIER);
			setState(80);
			match(T__6);
			setState(81);
			match(PATH_IDENTIFIER);
			setState(82);
			match(T__7);
			setState(83);
			match(T__11);
			setState(84);
			match(T__6);
			setState(85);
			match(CAPITAL_IDENTIFIER);
			setState(86);
			match(T__7);
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
		"\u0004\u0001\u0010Y\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0005\u0000\u000f\b\u0000\n"+
		"\u0000\f\u0000\u0012\t\u0000\u0001\u0000\u0005\u0000\u0015\b\u0000\n\u0000"+
		"\f\u0000\u0018\t\u0000\u0001\u0000\u0005\u0000\u001b\b\u0000\n\u0000\f"+
		"\u0000\u001e\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0005\u0002\'\b\u0002\n\u0002\f\u0002*"+
		"\t\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0005\u00033\b\u0003\n\u0003\f\u00036\t\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004B\b\u0004\n\u0004"+
		"\f\u0004E\t\u0004\u0001\u0004\u0005\u0004H\b\u0004\n\u0004\f\u0004K\t"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n\u0000"+
		"\u0000Y\u0000\f\u0001\u0000\u0000\u0000\u0002\u001f\u0001\u0000\u0000"+
		"\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006.\u0001\u0000\u0000\u0000"+
		"\b:\u0001\u0000\u0000\u0000\nN\u0001\u0000\u0000\u0000\f\u0010\u0003\u0002"+
		"\u0001\u0000\r\u000f\u0003\u0006\u0003\u0000\u000e\r\u0001\u0000\u0000"+
		"\u0000\u000f\u0012\u0001\u0000\u0000\u0000\u0010\u000e\u0001\u0000\u0000"+
		"\u0000\u0010\u0011\u0001\u0000\u0000\u0000\u0011\u0016\u0001\u0000\u0000"+
		"\u0000\u0012\u0010\u0001\u0000\u0000\u0000\u0013\u0015\u0003\u0004\u0002"+
		"\u0000\u0014\u0013\u0001\u0000\u0000\u0000\u0015\u0018\u0001\u0000\u0000"+
		"\u0000\u0016\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000"+
		"\u0000\u0017\u001c\u0001\u0000\u0000\u0000\u0018\u0016\u0001\u0000\u0000"+
		"\u0000\u0019\u001b\u0003\b\u0004\u0000\u001a\u0019\u0001\u0000\u0000\u0000"+
		"\u001b\u001e\u0001\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000\u0000"+
		"\u001c\u001d\u0001\u0000\u0000\u0000\u001d\u0001\u0001\u0000\u0000\u0000"+
		"\u001e\u001c\u0001\u0000\u0000\u0000\u001f \u0005\u0001\u0000\u0000 !"+
		"\u0005\u000f\u0000\u0000!\u0003\u0001\u0000\u0000\u0000\"#\u0005\u0002"+
		"\u0000\u0000#(\u0005\u000f\u0000\u0000$%\u0005\u0003\u0000\u0000%\'\u0005"+
		"\u000f\u0000\u0000&$\u0001\u0000\u0000\u0000\'*\u0001\u0000\u0000\u0000"+
		"(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)+\u0001\u0000\u0000"+
		"\u0000*(\u0001\u0000\u0000\u0000+,\u0005\u0004\u0000\u0000,-\u0005\r\u0000"+
		"\u0000-\u0005\u0001\u0000\u0000\u0000./\u0005\u0005\u0000\u0000/4\u0005"+
		"\u000f\u0000\u000001\u0005\u0003\u0000\u000013\u0005\u000f\u0000\u0000"+
		"20\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u000042\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000057\u0001\u0000\u0000\u000064\u0001\u0000"+
		"\u0000\u000078\u0005\u0004\u0000\u000089\u0005\r\u0000\u00009\u0007\u0001"+
		"\u0000\u0000\u0000:;\u0005\u0006\u0000\u0000;<\u0005\u000f\u0000\u0000"+
		"<=\u0005\u0007\u0000\u0000=>\u0005\r\u0000\u0000>?\u0005\b\u0000\u0000"+
		"?C\u0005\t\u0000\u0000@B\u0003\n\u0005\u0000A@\u0001\u0000\u0000\u0000"+
		"BE\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000CD\u0001\u0000\u0000"+
		"\u0000DI\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000FH\u0003\b\u0004"+
		"\u0000GF\u0001\u0000\u0000\u0000HK\u0001\u0000\u0000\u0000IG\u0001\u0000"+
		"\u0000\u0000IJ\u0001\u0000\u0000\u0000JL\u0001\u0000\u0000\u0000KI\u0001"+
		"\u0000\u0000\u0000LM\u0005\n\u0000\u0000M\t\u0001\u0000\u0000\u0000NO"+
		"\u0005\u000b\u0000\u0000OP\u0005\u000f\u0000\u0000PQ\u0005\u0007\u0000"+
		"\u0000QR\u0005\r\u0000\u0000RS\u0005\b\u0000\u0000ST\u0005\f\u0000\u0000"+
		"TU\u0005\u0007\u0000\u0000UV\u0005\u000f\u0000\u0000VW\u0005\b\u0000\u0000"+
		"W\u000b\u0001\u0000\u0000\u0000\u0007\u0010\u0016\u001c(4CI";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}