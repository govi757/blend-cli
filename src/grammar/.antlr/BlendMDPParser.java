// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendMDP.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendMDPParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, IDENTIFIER=12, CAPITAL_IDENTIFIER=13, WS=14;
	public static final int
		RULE_program = 0, RULE_moduleDefinition = 1, RULE_parentDefinition = 2, 
		RULE_propsDefinition = 3, RULE_propsBodyDefinition = 4, RULE_primitiveType = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "moduleDefinition", "parentDefinition", "propsDefinition", 
			"propsBodyDefinition", "primitiveType"
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

	@Override
	public String getGrammarFileName() { return "BlendMDP.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendMDPParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public ParentDefinitionContext parentDefinition() {
			return getRuleContext(ParentDefinitionContext.class,0);
		}
		public PropsDefinitionContext propsDefinition() {
			return getRuleContext(PropsDefinitionContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(12);
			moduleDefinition();
			setState(13);
			parentDefinition();
			setState(14);
			propsDefinition();
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
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
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
			setState(16);
			match(T__0);
			setState(17);
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
	public static class ParentDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
		public ParentDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parentDefinition; }
	}

	public final ParentDefinitionContext parentDefinition() throws RecognitionException {
		ParentDefinitionContext _localctx = new ParentDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_parentDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			match(T__1);
			setState(20);
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
	public static class PropsDefinitionContext extends ParserRuleContext {
		public List<PropsBodyDefinitionContext> propsBodyDefinition() {
			return getRuleContexts(PropsBodyDefinitionContext.class);
		}
		public PropsBodyDefinitionContext propsBodyDefinition(int i) {
			return getRuleContext(PropsBodyDefinitionContext.class,i);
		}
		public PropsDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propsDefinition; }
	}

	public final PropsDefinitionContext propsDefinition() throws RecognitionException {
		PropsDefinitionContext _localctx = new PropsDefinitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_propsDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(T__2);
			setState(23);
			match(T__3);
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IDENTIFIER) {
				{
				{
				setState(24);
				propsBodyDefinition();
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(30);
			match(T__4);
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
	public static class PropsBodyDefinitionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendMDPParser.IDENTIFIER, 0); }
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMDPParser.CAPITAL_IDENTIFIER, 0); }
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public PropsBodyDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propsBodyDefinition; }
	}

	public final PropsBodyDefinitionContext propsBodyDefinition() throws RecognitionException {
		PropsBodyDefinitionContext _localctx = new PropsBodyDefinitionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_propsBodyDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(IDENTIFIER);
			setState(33);
			match(T__5);
			setState(36);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CAPITAL_IDENTIFIER:
				{
				setState(34);
				match(CAPITAL_IDENTIFIER);
				}
				break;
			case T__6:
			case T__7:
			case T__8:
			case T__9:
			case T__10:
				{
				setState(35);
				primitiveType();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class PrimitiveTypeContext extends ParserRuleContext {
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 3968L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		"\u0004\u0001\u000e)\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0005\u0003\u001a\b\u0003\n\u0003\f\u0003"+
		"\u001d\t\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004%\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n\u0000\u0001\u0001\u0000"+
		"\u0007\u000b$\u0000\f\u0001\u0000\u0000\u0000\u0002\u0010\u0001\u0000"+
		"\u0000\u0000\u0004\u0013\u0001\u0000\u0000\u0000\u0006\u0016\u0001\u0000"+
		"\u0000\u0000\b \u0001\u0000\u0000\u0000\n&\u0001\u0000\u0000\u0000\f\r"+
		"\u0003\u0002\u0001\u0000\r\u000e\u0003\u0004\u0002\u0000\u000e\u000f\u0003"+
		"\u0006\u0003\u0000\u000f\u0001\u0001\u0000\u0000\u0000\u0010\u0011\u0005"+
		"\u0001\u0000\u0000\u0011\u0012\u0005\r\u0000\u0000\u0012\u0003\u0001\u0000"+
		"\u0000\u0000\u0013\u0014\u0005\u0002\u0000\u0000\u0014\u0015\u0005\r\u0000"+
		"\u0000\u0015\u0005\u0001\u0000\u0000\u0000\u0016\u0017\u0005\u0003\u0000"+
		"\u0000\u0017\u001b\u0005\u0004\u0000\u0000\u0018\u001a\u0003\b\u0004\u0000"+
		"\u0019\u0018\u0001\u0000\u0000\u0000\u001a\u001d\u0001\u0000\u0000\u0000"+
		"\u001b\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000"+
		"\u001c\u001e\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000"+
		"\u001e\u001f\u0005\u0005\u0000\u0000\u001f\u0007\u0001\u0000\u0000\u0000"+
		" !\u0005\f\u0000\u0000!$\u0005\u0006\u0000\u0000\"%\u0005\r\u0000\u0000"+
		"#%\u0003\n\u0005\u0000$\"\u0001\u0000\u0000\u0000$#\u0001\u0000\u0000"+
		"\u0000%\t\u0001\u0000\u0000\u0000&\'\u0007\u0000\u0000\u0000\'\u000b\u0001"+
		"\u0000\u0000\u0000\u0002\u001b$";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}