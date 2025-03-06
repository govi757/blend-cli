// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendRN.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendRNParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, LAYOUT_TYPE=13, PATH_IDENTIFIER=14, IDENTIFIER=15, 
		CAPITAL_IDENTIFIER=16, WS=17;
	public static final int
		RULE_program = 0, RULE_moduleDefinition = 1, RULE_screenDefenition = 2, 
		RULE_layoutDefinition = 3, RULE_pageDefinition = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "moduleDefinition", "screenDefenition", "layoutDefinition", 
			"pageDefinition"
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

	@Override
	public String getGrammarFileName() { return "BlendRN.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendRNParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
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
			setState(10);
			moduleDefinition();
			setState(14);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__1) {
				{
				{
				setState(11);
				screenDefenition();
				}
				}
				setState(16);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(20);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(17);
				layoutDefinition();
				}
				}
				setState(22);
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
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendRNParser.CAPITAL_IDENTIFIER, 0); }
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
			setState(23);
			match(T__0);
			setState(24);
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
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRNParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRNParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
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
			setState(26);
			match(T__1);
			setState(27);
			match(CAPITAL_IDENTIFIER);
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(28);
				match(T__2);
				setState(29);
				match(CAPITAL_IDENTIFIER);
				}
				}
				setState(34);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(35);
			match(T__3);
			setState(36);
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
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendRNParser.CAPITAL_IDENTIFIER, 0); }
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
		public TerminalNode LAYOUT_TYPE() { return getToken(BlendRNParser.LAYOUT_TYPE, 0); }
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
		enterRule(_localctx, 6, RULE_layoutDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(T__4);
			setState(39);
			match(CAPITAL_IDENTIFIER);
			setState(40);
			match(T__5);
			setState(41);
			match(PATH_IDENTIFIER);
			setState(42);
			match(T__6);
			setState(43);
			match(T__7);
			setState(44);
			match(T__5);
			setState(45);
			match(LAYOUT_TYPE);
			setState(46);
			match(T__6);
			setState(47);
			match(T__8);
			setState(51);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__10) {
				{
				{
				setState(48);
				pageDefinition();
				}
				}
				setState(53);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(57);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(54);
				layoutDefinition();
				}
				}
				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(60);
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
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendRNParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendRNParser.CAPITAL_IDENTIFIER, i);
		}
		public TerminalNode PATH_IDENTIFIER() { return getToken(BlendRNParser.PATH_IDENTIFIER, 0); }
		public PageDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pageDefinition; }
	}

	public final PageDefinitionContext pageDefinition() throws RecognitionException {
		PageDefinitionContext _localctx = new PageDefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_pageDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(T__10);
			setState(63);
			match(CAPITAL_IDENTIFIER);
			setState(64);
			match(T__5);
			setState(65);
			match(PATH_IDENTIFIER);
			setState(66);
			match(T__6);
			setState(67);
			match(T__11);
			setState(68);
			match(T__5);
			setState(69);
			match(CAPITAL_IDENTIFIER);
			setState(70);
			match(T__6);
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
		"\u0004\u0001\u0011I\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0005\u0000\r\b\u0000\n\u0000\f\u0000\u0010\t\u0000"+
		"\u0001\u0000\u0005\u0000\u0013\b\u0000\n\u0000\f\u0000\u0016\t\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0005\u0002\u001f\b\u0002\n\u0002\f\u0002\"\t\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0005\u00032\b\u0003\n\u0003\f\u00035\t\u0003\u0001\u0003"+
		"\u0005\u00038\b\u0003\n\u0003\f\u0003;\t\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0000\u0000"+
		"\u0005\u0000\u0002\u0004\u0006\b\u0000\u0000H\u0000\n\u0001\u0000\u0000"+
		"\u0000\u0002\u0017\u0001\u0000\u0000\u0000\u0004\u001a\u0001\u0000\u0000"+
		"\u0000\u0006&\u0001\u0000\u0000\u0000\b>\u0001\u0000\u0000\u0000\n\u000e"+
		"\u0003\u0002\u0001\u0000\u000b\r\u0003\u0004\u0002\u0000\f\u000b\u0001"+
		"\u0000\u0000\u0000\r\u0010\u0001\u0000\u0000\u0000\u000e\f\u0001\u0000"+
		"\u0000\u0000\u000e\u000f\u0001\u0000\u0000\u0000\u000f\u0014\u0001\u0000"+
		"\u0000\u0000\u0010\u000e\u0001\u0000\u0000\u0000\u0011\u0013\u0003\u0006"+
		"\u0003\u0000\u0012\u0011\u0001\u0000\u0000\u0000\u0013\u0016\u0001\u0000"+
		"\u0000\u0000\u0014\u0012\u0001\u0000\u0000\u0000\u0014\u0015\u0001\u0000"+
		"\u0000\u0000\u0015\u0001\u0001\u0000\u0000\u0000\u0016\u0014\u0001\u0000"+
		"\u0000\u0000\u0017\u0018\u0005\u0001\u0000\u0000\u0018\u0019\u0005\u0010"+
		"\u0000\u0000\u0019\u0003\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0002"+
		"\u0000\u0000\u001b \u0005\u0010\u0000\u0000\u001c\u001d\u0005\u0003\u0000"+
		"\u0000\u001d\u001f\u0005\u0010\u0000\u0000\u001e\u001c\u0001\u0000\u0000"+
		"\u0000\u001f\"\u0001\u0000\u0000\u0000 \u001e\u0001\u0000\u0000\u0000"+
		" !\u0001\u0000\u0000\u0000!#\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000"+
		"\u0000#$\u0005\u0004\u0000\u0000$%\u0005\u000e\u0000\u0000%\u0005\u0001"+
		"\u0000\u0000\u0000&\'\u0005\u0005\u0000\u0000\'(\u0005\u0010\u0000\u0000"+
		"()\u0005\u0006\u0000\u0000)*\u0005\u000e\u0000\u0000*+\u0005\u0007\u0000"+
		"\u0000+,\u0005\b\u0000\u0000,-\u0005\u0006\u0000\u0000-.\u0005\r\u0000"+
		"\u0000./\u0005\u0007\u0000\u0000/3\u0005\t\u0000\u000002\u0003\b\u0004"+
		"\u000010\u0001\u0000\u0000\u000025\u0001\u0000\u0000\u000031\u0001\u0000"+
		"\u0000\u000034\u0001\u0000\u0000\u000049\u0001\u0000\u0000\u000053\u0001"+
		"\u0000\u0000\u000068\u0003\u0006\u0003\u000076\u0001\u0000\u0000\u0000"+
		"8;\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u00009:\u0001\u0000\u0000"+
		"\u0000:<\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000<=\u0005\n\u0000"+
		"\u0000=\u0007\u0001\u0000\u0000\u0000>?\u0005\u000b\u0000\u0000?@\u0005"+
		"\u0010\u0000\u0000@A\u0005\u0006\u0000\u0000AB\u0005\u000e\u0000\u0000"+
		"BC\u0005\u0007\u0000\u0000CD\u0005\f\u0000\u0000DE\u0005\u0006\u0000\u0000"+
		"EF\u0005\u0010\u0000\u0000FG\u0005\u0007\u0000\u0000G\t\u0001\u0000\u0000"+
		"\u0000\u0005\u000e\u0014 39";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}