// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendExpress.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendExpressParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, HTTP_METHOD=21, IDENTIFIER=22, CAPITAL_IDENTIFIER=23, 
		WS=24;
	public static final int
		RULE_program = 0, RULE_sectionDefinition = 1, RULE_moduleDefinition = 2, 
		RULE_apiDefinition = 3, RULE_authenticated = 4, RULE_inputDefinition = 5, 
		RULE_outputDefinition = 6, RULE_directOutputDefenition = 7, RULE_field = 8, 
		RULE_type = 9, RULE_primitiveType = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "sectionDefinition", "moduleDefinition", "apiDefinition", 
			"authenticated", "inputDefinition", "outputDefinition", "directOutputDefenition", 
			"field", "type", "primitiveType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'section'", "'{'", "'}'", "'module'", "'api'", "'('", "')'", "'authenticated'", 
			"'input('", "','", "'output('", "':'", "'[]'", "'?'", "'->'", "'string'", 
			"'number'", "'boolean'", "'any'", "'object'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "HTTP_METHOD", 
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
	public String getGrammarFileName() { return "BlendExpress.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendExpressParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public List<SectionDefinitionContext> sectionDefinition() {
			return getRuleContexts(SectionDefinitionContext.class);
		}
		public SectionDefinitionContext sectionDefinition(int i) {
			return getRuleContext(SectionDefinitionContext.class,i);
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
			setState(22);
			moduleDefinition();
			setState(26);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__0) {
				{
				{
				setState(23);
				sectionDefinition();
				}
				}
				setState(28);
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
	public static class SectionDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendExpressParser.CAPITAL_IDENTIFIER, 0); }
		public List<ApiDefinitionContext> apiDefinition() {
			return getRuleContexts(ApiDefinitionContext.class);
		}
		public ApiDefinitionContext apiDefinition(int i) {
			return getRuleContext(ApiDefinitionContext.class,i);
		}
		public SectionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sectionDefinition; }
	}

	public final SectionDefinitionContext sectionDefinition() throws RecognitionException {
		SectionDefinitionContext _localctx = new SectionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sectionDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(T__0);
			setState(30);
			match(CAPITAL_IDENTIFIER);
			setState(31);
			match(T__1);
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(32);
				apiDefinition();
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(38);
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
	public static class ModuleDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendExpressParser.CAPITAL_IDENTIFIER, 0); }
		public ModuleDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_moduleDefinition; }
	}

	public final ModuleDefinitionContext moduleDefinition() throws RecognitionException {
		ModuleDefinitionContext _localctx = new ModuleDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_moduleDefinition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(T__3);
			setState(41);
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
	public static class ApiDefinitionContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendExpressParser.IDENTIFIER, 0); }
		public TerminalNode HTTP_METHOD() { return getToken(BlendExpressParser.HTTP_METHOD, 0); }
		public AuthenticatedContext authenticated() {
			return getRuleContext(AuthenticatedContext.class,0);
		}
		public InputDefinitionContext inputDefinition() {
			return getRuleContext(InputDefinitionContext.class,0);
		}
		public OutputDefinitionContext outputDefinition() {
			return getRuleContext(OutputDefinitionContext.class,0);
		}
		public ApiDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_apiDefinition; }
	}

	public final ApiDefinitionContext apiDefinition() throws RecognitionException {
		ApiDefinitionContext _localctx = new ApiDefinitionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_apiDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(T__4);
			setState(44);
			match(IDENTIFIER);
			setState(45);
			match(T__5);
			setState(46);
			match(HTTP_METHOD);
			setState(47);
			match(T__6);
			setState(48);
			match(T__1);
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(49);
				authenticated();
				}
			}

			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(52);
				inputDefinition();
				}
			}

			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__10) {
				{
				setState(55);
				outputDefinition();
				}
			}

			setState(58);
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
	public static class AuthenticatedContext extends ParserRuleContext {
		public AuthenticatedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_authenticated; }
	}

	public final AuthenticatedContext authenticated() throws RecognitionException {
		AuthenticatedContext _localctx = new AuthenticatedContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_authenticated);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
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

	@SuppressWarnings("CheckReturnValue")
	public static class InputDefinitionContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public InputDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inputDefinition; }
	}

	public final InputDefinitionContext inputDefinition() throws RecognitionException {
		InputDefinitionContext _localctx = new InputDefinitionContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_inputDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(T__8);
			setState(63);
			field();
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(64);
				match(T__9);
				setState(65);
				field();
				}
				}
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71);
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

	@SuppressWarnings("CheckReturnValue")
	public static class OutputDefinitionContext extends ParserRuleContext {
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public DirectOutputDefenitionContext directOutputDefenition() {
			return getRuleContext(DirectOutputDefenitionContext.class,0);
		}
		public OutputDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_outputDefinition; }
	}

	public final OutputDefinitionContext outputDefinition() throws RecognitionException {
		OutputDefinitionContext _localctx = new OutputDefinitionContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_outputDefinition);
		int _la;
		try {
			setState(88);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(73);
				match(T__10);
				setState(74);
				field();
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__9) {
					{
					{
					setState(75);
					match(T__9);
					setState(76);
					field();
					}
					}
					setState(81);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(82);
				match(T__6);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(84);
				match(T__10);
				setState(85);
				directOutputDefenition();
				setState(86);
				match(T__6);
				}
				break;
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
	public static class DirectOutputDefenitionContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public DirectOutputDefenitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_directOutputDefenition; }
	}

	public final DirectOutputDefenitionContext directOutputDefenition() throws RecognitionException {
		DirectOutputDefenitionContext _localctx = new DirectOutputDefenitionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_directOutputDefenition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(90);
			type();
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
	public static class FieldContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendExpressParser.IDENTIFIER, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public FieldContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field; }
	}

	public final FieldContext field() throws RecognitionException {
		FieldContext _localctx = new FieldContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(92);
			match(IDENTIFIER);
			setState(93);
			match(T__11);
			setState(94);
			type();
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
	public static class TypeContext extends ParserRuleContext {
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public List<TerminalNode> CAPITAL_IDENTIFIER() { return getTokens(BlendExpressParser.CAPITAL_IDENTIFIER); }
		public TerminalNode CAPITAL_IDENTIFIER(int i) {
			return getToken(BlendExpressParser.CAPITAL_IDENTIFIER, i);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_type);
		try {
			setState(114);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(96);
				primitiveType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(97);
				primitiveType();
				setState(98);
				match(T__12);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(100);
				primitiveType();
				setState(101);
				match(T__13);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(103);
				match(CAPITAL_IDENTIFIER);
				setState(104);
				match(T__14);
				setState(105);
				match(CAPITAL_IDENTIFIER);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(106);
				match(CAPITAL_IDENTIFIER);
				setState(107);
				match(T__14);
				setState(108);
				match(CAPITAL_IDENTIFIER);
				setState(109);
				match(T__13);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(110);
				match(CAPITAL_IDENTIFIER);
				setState(111);
				match(T__14);
				setState(112);
				match(CAPITAL_IDENTIFIER);
				setState(113);
				match(T__12);
				}
				break;
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
		enterRule(_localctx, 20, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(116);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2031616L) != 0)) ) {
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
		"\u0004\u0001\u0018w\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0001\u0000\u0005"+
		"\u0000\u0019\b\u0000\n\u0000\f\u0000\u001c\t\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u00033\b\u0003\u0001\u0003\u0003\u00036\b\u0003\u0001\u0003\u0003"+
		"\u00039\b\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005C\b\u0005\n\u0005"+
		"\f\u0005F\t\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0005\u0006N\b\u0006\n\u0006\f\u0006Q\t\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003"+
		"\u0006Y\b\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0003\ts\b\t\u0001\n\u0001\n\u0001\n\u0000\u0000\u000b\u0000\u0002"+
		"\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0000\u0001\u0001\u0000\u0010"+
		"\u0014x\u0000\u0016\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000\u0000"+
		"\u0000\u0004(\u0001\u0000\u0000\u0000\u0006+\u0001\u0000\u0000\u0000\b"+
		"<\u0001\u0000\u0000\u0000\n>\u0001\u0000\u0000\u0000\fX\u0001\u0000\u0000"+
		"\u0000\u000eZ\u0001\u0000\u0000\u0000\u0010\\\u0001\u0000\u0000\u0000"+
		"\u0012r\u0001\u0000\u0000\u0000\u0014t\u0001\u0000\u0000\u0000\u0016\u001a"+
		"\u0003\u0004\u0002\u0000\u0017\u0019\u0003\u0002\u0001\u0000\u0018\u0017"+
		"\u0001\u0000\u0000\u0000\u0019\u001c\u0001\u0000\u0000\u0000\u001a\u0018"+
		"\u0001\u0000\u0000\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b\u0001"+
		"\u0001\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0005\u0001\u0000\u0000\u001e\u001f\u0005\u0017\u0000\u0000\u001f#\u0005"+
		"\u0002\u0000\u0000 \"\u0003\u0006\u0003\u0000! \u0001\u0000\u0000\u0000"+
		"\"%\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000"+
		"\u0000$&\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0005\u0003"+
		"\u0000\u0000\'\u0003\u0001\u0000\u0000\u0000()\u0005\u0004\u0000\u0000"+
		")*\u0005\u0017\u0000\u0000*\u0005\u0001\u0000\u0000\u0000+,\u0005\u0005"+
		"\u0000\u0000,-\u0005\u0016\u0000\u0000-.\u0005\u0006\u0000\u0000./\u0005"+
		"\u0015\u0000\u0000/0\u0005\u0007\u0000\u000002\u0005\u0002\u0000\u0000"+
		"13\u0003\b\u0004\u000021\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u0000"+
		"35\u0001\u0000\u0000\u000046\u0003\n\u0005\u000054\u0001\u0000\u0000\u0000"+
		"56\u0001\u0000\u0000\u000068\u0001\u0000\u0000\u000079\u0003\f\u0006\u0000"+
		"87\u0001\u0000\u0000\u000089\u0001\u0000\u0000\u00009:\u0001\u0000\u0000"+
		"\u0000:;\u0005\u0003\u0000\u0000;\u0007\u0001\u0000\u0000\u0000<=\u0005"+
		"\b\u0000\u0000=\t\u0001\u0000\u0000\u0000>?\u0005\t\u0000\u0000?D\u0003"+
		"\u0010\b\u0000@A\u0005\n\u0000\u0000AC\u0003\u0010\b\u0000B@\u0001\u0000"+
		"\u0000\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001"+
		"\u0000\u0000\u0000EG\u0001\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000"+
		"GH\u0005\u0007\u0000\u0000H\u000b\u0001\u0000\u0000\u0000IJ\u0005\u000b"+
		"\u0000\u0000JO\u0003\u0010\b\u0000KL\u0005\n\u0000\u0000LN\u0003\u0010"+
		"\b\u0000MK\u0001\u0000\u0000\u0000NQ\u0001\u0000\u0000\u0000OM\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PR\u0001\u0000\u0000\u0000QO\u0001"+
		"\u0000\u0000\u0000RS\u0005\u0007\u0000\u0000SY\u0001\u0000\u0000\u0000"+
		"TU\u0005\u000b\u0000\u0000UV\u0003\u000e\u0007\u0000VW\u0005\u0007\u0000"+
		"\u0000WY\u0001\u0000\u0000\u0000XI\u0001\u0000\u0000\u0000XT\u0001\u0000"+
		"\u0000\u0000Y\r\u0001\u0000\u0000\u0000Z[\u0003\u0012\t\u0000[\u000f\u0001"+
		"\u0000\u0000\u0000\\]\u0005\u0016\u0000\u0000]^\u0005\f\u0000\u0000^_"+
		"\u0003\u0012\t\u0000_\u0011\u0001\u0000\u0000\u0000`s\u0003\u0014\n\u0000"+
		"ab\u0003\u0014\n\u0000bc\u0005\r\u0000\u0000cs\u0001\u0000\u0000\u0000"+
		"de\u0003\u0014\n\u0000ef\u0005\u000e\u0000\u0000fs\u0001\u0000\u0000\u0000"+
		"gh\u0005\u0017\u0000\u0000hi\u0005\u000f\u0000\u0000is\u0005\u0017\u0000"+
		"\u0000jk\u0005\u0017\u0000\u0000kl\u0005\u000f\u0000\u0000lm\u0005\u0017"+
		"\u0000\u0000ms\u0005\u000e\u0000\u0000no\u0005\u0017\u0000\u0000op\u0005"+
		"\u000f\u0000\u0000pq\u0005\u0017\u0000\u0000qs\u0005\r\u0000\u0000r`\u0001"+
		"\u0000\u0000\u0000ra\u0001\u0000\u0000\u0000rd\u0001\u0000\u0000\u0000"+
		"rg\u0001\u0000\u0000\u0000rj\u0001\u0000\u0000\u0000rn\u0001\u0000\u0000"+
		"\u0000s\u0013\u0001\u0000\u0000\u0000tu\u0007\u0000\u0000\u0000u\u0015"+
		"\u0001\u0000\u0000\u0000\t\u001a#258DOXr";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}