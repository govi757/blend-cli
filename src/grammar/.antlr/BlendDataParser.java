// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendData.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendDataParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, IDENTIFIER=14, CAPITAL_IDENTIFIER=15, 
		WS=16;
	public static final int
		RULE_program = 0, RULE_moduleDefinition = 1, RULE_dataDefinition = 2, 
		RULE_field = 3, RULE_type = 4, RULE_baseType = 5, RULE_primitiveType = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "moduleDefinition", "dataDefinition", "field", "type", "baseType", 
			"primitiveType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'data'", "'('", "','", "')'", "':'", "'[]'", "'?'", 
			"'->'", "'string'", "'number'", "'boolean'", "'any'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "IDENTIFIER", "CAPITAL_IDENTIFIER", "WS"
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
	public String getGrammarFileName() { return "BlendData.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendDataParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public TerminalNode EOF() { return getToken(BlendDataParser.EOF, 0); }
		public List<DataDefinitionContext> dataDefinition() {
			return getRuleContexts(DataDefinitionContext.class);
		}
		public DataDefinitionContext dataDefinition(int i) {
			return getRuleContext(DataDefinitionContext.class,i);
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
			setState(14);
			moduleDefinition();
			setState(16); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(15);
				dataDefinition();
				}
				}
				setState(18); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__1 );
			setState(20);
			match(EOF);
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
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
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
			setState(22);
			match(T__0);
			setState(23);
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
	public static class DataDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
		public List<FieldContext> field() {
			return getRuleContexts(FieldContext.class);
		}
		public FieldContext field(int i) {
			return getRuleContext(FieldContext.class,i);
		}
		public DataDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataDefinition; }
	}

	public final DataDefinitionContext dataDefinition() throws RecognitionException {
		DataDefinitionContext _localctx = new DataDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_dataDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(25);
			match(T__1);
			setState(26);
			match(CAPITAL_IDENTIFIER);
			setState(27);
			match(T__2);
			setState(28);
			field();
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(29);
				match(T__3);
				setState(30);
				field();
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(36);
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
	public static class FieldContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendDataParser.IDENTIFIER, 0); }
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
		enterRule(_localctx, 6, RULE_field);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(IDENTIFIER);
			setState(39);
			match(T__5);
			setState(40);
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
		public List<BaseTypeContext> baseType() {
			return getRuleContexts(BaseTypeContext.class);
		}
		public BaseTypeContext baseType(int i) {
			return getRuleContext(BaseTypeContext.class,i);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_type);
		try {
			setState(63);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(42);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(43);
				baseType();
				setState(44);
				match(T__6);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				baseType();
				setState(47);
				match(T__7);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(49);
				baseType();
				setState(50);
				match(T__8);
				setState(51);
				baseType();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(53);
				baseType();
				setState(54);
				match(T__8);
				setState(55);
				baseType();
				setState(56);
				match(T__7);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(58);
				baseType();
				setState(59);
				match(T__8);
				setState(60);
				baseType();
				setState(61);
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
	public static class BaseTypeContext extends ParserRuleContext {
		public PrimitiveTypeContext primitiveType() {
			return getRuleContext(PrimitiveTypeContext.class,0);
		}
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendDataParser.CAPITAL_IDENTIFIER, 0); }
		public BaseTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseType; }
	}

	public final BaseTypeContext baseType() throws RecognitionException {
		BaseTypeContext _localctx = new BaseTypeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_baseType);
		try {
			setState(67);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__9:
			case T__10:
			case T__11:
			case T__12:
				enterOuterAlt(_localctx, 1);
				{
				setState(65);
				primitiveType();
				}
				break;
			case CAPITAL_IDENTIFIER:
				enterOuterAlt(_localctx, 2);
				{
				setState(66);
				match(CAPITAL_IDENTIFIER);
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
	public static class PrimitiveTypeContext extends ParserRuleContext {
		public PrimitiveTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitiveType; }
	}

	public final PrimitiveTypeContext primitiveType() throws RecognitionException {
		PrimitiveTypeContext _localctx = new PrimitiveTypeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15360L) != 0)) ) {
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
		"\u0004\u0001\u0010H\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0004"+
		"\u0000\u0011\b\u0000\u000b\u0000\f\u0000\u0012\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002 \b\u0002\n\u0002\f\u0002"+
		"#\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004@\b\u0004"+
		"\u0001\u0005\u0001\u0005\u0003\u0005D\b\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0000\u0000\u0007\u0000\u0002\u0004\u0006\b\n\f\u0000\u0001"+
		"\u0001\u0000\n\rH\u0000\u000e\u0001\u0000\u0000\u0000\u0002\u0016\u0001"+
		"\u0000\u0000\u0000\u0004\u0019\u0001\u0000\u0000\u0000\u0006&\u0001\u0000"+
		"\u0000\u0000\b?\u0001\u0000\u0000\u0000\nC\u0001\u0000\u0000\u0000\fE"+
		"\u0001\u0000\u0000\u0000\u000e\u0010\u0003\u0002\u0001\u0000\u000f\u0011"+
		"\u0003\u0004\u0002\u0000\u0010\u000f\u0001\u0000\u0000\u0000\u0011\u0012"+
		"\u0001\u0000\u0000\u0000\u0012\u0010\u0001\u0000\u0000\u0000\u0012\u0013"+
		"\u0001\u0000\u0000\u0000\u0013\u0014\u0001\u0000\u0000\u0000\u0014\u0015"+
		"\u0005\u0000\u0000\u0001\u0015\u0001\u0001\u0000\u0000\u0000\u0016\u0017"+
		"\u0005\u0001\u0000\u0000\u0017\u0018\u0005\u000f\u0000\u0000\u0018\u0003"+
		"\u0001\u0000\u0000\u0000\u0019\u001a\u0005\u0002\u0000\u0000\u001a\u001b"+
		"\u0005\u000f\u0000\u0000\u001b\u001c\u0005\u0003\u0000\u0000\u001c!\u0003"+
		"\u0006\u0003\u0000\u001d\u001e\u0005\u0004\u0000\u0000\u001e \u0003\u0006"+
		"\u0003\u0000\u001f\u001d\u0001\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000"+
		"!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000\u0000\"$\u0001\u0000"+
		"\u0000\u0000#!\u0001\u0000\u0000\u0000$%\u0005\u0005\u0000\u0000%\u0005"+
		"\u0001\u0000\u0000\u0000&\'\u0005\u000e\u0000\u0000\'(\u0005\u0006\u0000"+
		"\u0000()\u0003\b\u0004\u0000)\u0007\u0001\u0000\u0000\u0000*@\u0003\n"+
		"\u0005\u0000+,\u0003\n\u0005\u0000,-\u0005\u0007\u0000\u0000-@\u0001\u0000"+
		"\u0000\u0000./\u0003\n\u0005\u0000/0\u0005\b\u0000\u00000@\u0001\u0000"+
		"\u0000\u000012\u0003\n\u0005\u000023\u0005\t\u0000\u000034\u0003\n\u0005"+
		"\u00004@\u0001\u0000\u0000\u000056\u0003\n\u0005\u000067\u0005\t\u0000"+
		"\u000078\u0003\n\u0005\u000089\u0005\b\u0000\u00009@\u0001\u0000\u0000"+
		"\u0000:;\u0003\n\u0005\u0000;<\u0005\t\u0000\u0000<=\u0003\n\u0005\u0000"+
		"=>\u0005\u0007\u0000\u0000>@\u0001\u0000\u0000\u0000?*\u0001\u0000\u0000"+
		"\u0000?+\u0001\u0000\u0000\u0000?.\u0001\u0000\u0000\u0000?1\u0001\u0000"+
		"\u0000\u0000?5\u0001\u0000\u0000\u0000?:\u0001\u0000\u0000\u0000@\t\u0001"+
		"\u0000\u0000\u0000AD\u0003\f\u0006\u0000BD\u0005\u000f\u0000\u0000CA\u0001"+
		"\u0000\u0000\u0000CB\u0001\u0000\u0000\u0000D\u000b\u0001\u0000\u0000"+
		"\u0000EF\u0007\u0000\u0000\u0000F\r\u0001\u0000\u0000\u0000\u0004\u0012"+
		"!?C";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}