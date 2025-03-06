// Generated from /Users/govindve/govi/Projects/NodeProjects/blend-cli/src/grammar/BlendMongo.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class BlendMongoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, IDENTIFIER=20, CAPITAL_IDENTIFIER=21, WS=22;
	public static final int
		RULE_program = 0, RULE_moduleDefinition = 1, RULE_collectionDefinition = 2, 
		RULE_property = 3, RULE_propertyChars = 4, RULE_reference = 5, RULE_mongoChars = 6, 
		RULE_type = 7, RULE_baseType = 8, RULE_primitiveType = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "moduleDefinition", "collectionDefinition", "property", "propertyChars", 
			"reference", "mongoChars", "type", "baseType", "primitiveType"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'module'", "'collection'", "'{'", "','", "'}'", "'property'", 
			"':'", "'('", "')'", "'reference'", "'unique'", "'index'", "'[]'", "'?'", 
			"'String'", "'Number'", "'Boolean'", "'any'", "'Object'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "IDENTIFIER", "CAPITAL_IDENTIFIER", 
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
	public String getGrammarFileName() { return "BlendMongo.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public BlendMongoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public ModuleDefinitionContext moduleDefinition() {
			return getRuleContext(ModuleDefinitionContext.class,0);
		}
		public List<CollectionDefinitionContext> collectionDefinition() {
			return getRuleContexts(CollectionDefinitionContext.class);
		}
		public CollectionDefinitionContext collectionDefinition(int i) {
			return getRuleContext(CollectionDefinitionContext.class,i);
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
			setState(20);
			moduleDefinition();
			setState(22); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(21);
				collectionDefinition();
				}
				}
				setState(24); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__1 );
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
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
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
			setState(26);
			match(T__0);
			setState(27);
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
	public static class CollectionDefinitionContext extends ParserRuleContext {
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
		public List<PropertyContext> property() {
			return getRuleContexts(PropertyContext.class);
		}
		public PropertyContext property(int i) {
			return getRuleContext(PropertyContext.class,i);
		}
		public List<ReferenceContext> reference() {
			return getRuleContexts(ReferenceContext.class);
		}
		public ReferenceContext reference(int i) {
			return getRuleContext(ReferenceContext.class,i);
		}
		public CollectionDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_collectionDefinition; }
	}

	public final CollectionDefinitionContext collectionDefinition() throws RecognitionException {
		CollectionDefinitionContext _localctx = new CollectionDefinitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_collectionDefinition);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			match(T__1);
			setState(30);
			match(CAPITAL_IDENTIFIER);
			setState(31);
			match(T__2);
			setState(32);
			property();
			setState(37);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(33);
					match(T__3);
					setState(34);
					property();
					}
					} 
				}
				setState(39);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			}
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(40);
				match(T__3);
				setState(41);
				reference();
				setState(46);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(42);
					match(T__3);
					setState(43);
					reference();
					}
					}
					setState(48);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(51);
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
	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendMongoParser.IDENTIFIER, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public PropertyCharsContext propertyChars() {
			return getRuleContext(PropertyCharsContext.class,0);
		}
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_property);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(T__5);
			setState(54);
			match(IDENTIFIER);
			setState(55);
			match(T__6);
			setState(56);
			type();
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(57);
				propertyChars();
				}
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
	public static class PropertyCharsContext extends ParserRuleContext {
		public List<MongoCharsContext> mongoChars() {
			return getRuleContexts(MongoCharsContext.class);
		}
		public MongoCharsContext mongoChars(int i) {
			return getRuleContext(MongoCharsContext.class,i);
		}
		public PropertyCharsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyChars; }
	}

	public final PropertyCharsContext propertyChars() throws RecognitionException {
		PropertyCharsContext _localctx = new PropertyCharsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_propertyChars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			match(T__7);
			setState(61);
			mongoChars();
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(62);
				match(T__3);
				setState(63);
				mongoChars();
				}
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			match(T__8);
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
	public static class ReferenceContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(BlendMongoParser.IDENTIFIER, 0); }
		public TerminalNode CAPITAL_IDENTIFIER() { return getToken(BlendMongoParser.CAPITAL_IDENTIFIER, 0); }
		public PropertyCharsContext propertyChars() {
			return getRuleContext(PropertyCharsContext.class,0);
		}
		public ReferenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_reference; }
	}

	public final ReferenceContext reference() throws RecognitionException {
		ReferenceContext _localctx = new ReferenceContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_reference);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(T__9);
			setState(72);
			match(IDENTIFIER);
			setState(73);
			match(T__6);
			setState(74);
			match(CAPITAL_IDENTIFIER);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(75);
				propertyChars();
				}
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
	public static class MongoCharsContext extends ParserRuleContext {
		public MongoCharsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mongoChars; }
	}

	public final MongoCharsContext mongoChars() throws RecognitionException {
		MongoCharsContext _localctx = new MongoCharsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_mongoChars);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			_la = _input.LA(1);
			if ( !(_la==T__10 || _la==T__11) ) {
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

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public BaseTypeContext baseType() {
			return getRuleContext(BaseTypeContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_type);
		try {
			setState(87);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				baseType();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(81);
				baseType();
				setState(82);
				match(T__12);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(84);
				baseType();
				setState(85);
				match(T__13);
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
		public BaseTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_baseType; }
	}

	public final BaseTypeContext baseType() throws RecognitionException {
		BaseTypeContext _localctx = new BaseTypeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_baseType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			primitiveType();
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
		enterRule(_localctx, 18, RULE_primitiveType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1015808L) != 0)) ) {
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
		"\u0004\u0001\u0016^\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0001\u0000\u0004\u0000\u0017\b"+
		"\u0000\u000b\u0000\f\u0000\u0018\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005"+
		"\u0002$\b\u0002\n\u0002\f\u0002\'\t\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0005\u0002-\b\u0002\n\u0002\f\u00020\t\u0002\u0003"+
		"\u00022\b\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003;\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0005\u0004A\b\u0004\n\u0004\f\u0004D\t"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0003\u0005M\b\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0003\u0007X\b\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0000"+
		"\u0000\n\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0000\u0002\u0001"+
		"\u0000\u000b\f\u0001\u0000\u000f\u0013\\\u0000\u0014\u0001\u0000\u0000"+
		"\u0000\u0002\u001a\u0001\u0000\u0000\u0000\u0004\u001d\u0001\u0000\u0000"+
		"\u0000\u00065\u0001\u0000\u0000\u0000\b<\u0001\u0000\u0000\u0000\nG\u0001"+
		"\u0000\u0000\u0000\fN\u0001\u0000\u0000\u0000\u000eW\u0001\u0000\u0000"+
		"\u0000\u0010Y\u0001\u0000\u0000\u0000\u0012[\u0001\u0000\u0000\u0000\u0014"+
		"\u0016\u0003\u0002\u0001\u0000\u0015\u0017\u0003\u0004\u0002\u0000\u0016"+
		"\u0015\u0001\u0000\u0000\u0000\u0017\u0018\u0001\u0000\u0000\u0000\u0018"+
		"\u0016\u0001\u0000\u0000\u0000\u0018\u0019\u0001\u0000\u0000\u0000\u0019"+
		"\u0001\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0001\u0000\u0000\u001b"+
		"\u001c\u0005\u0015\u0000\u0000\u001c\u0003\u0001\u0000\u0000\u0000\u001d"+
		"\u001e\u0005\u0002\u0000\u0000\u001e\u001f\u0005\u0015\u0000\u0000\u001f"+
		" \u0005\u0003\u0000\u0000 %\u0003\u0006\u0003\u0000!\"\u0005\u0004\u0000"+
		"\u0000\"$\u0003\u0006\u0003\u0000#!\u0001\u0000\u0000\u0000$\'\u0001\u0000"+
		"\u0000\u0000%#\u0001\u0000\u0000\u0000%&\u0001\u0000\u0000\u0000&1\u0001"+
		"\u0000\u0000\u0000\'%\u0001\u0000\u0000\u0000()\u0005\u0004\u0000\u0000"+
		").\u0003\n\u0005\u0000*+\u0005\u0004\u0000\u0000+-\u0003\n\u0005\u0000"+
		",*\u0001\u0000\u0000\u0000-0\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000"+
		"\u0000./\u0001\u0000\u0000\u0000/2\u0001\u0000\u0000\u00000.\u0001\u0000"+
		"\u0000\u00001(\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000023\u0001"+
		"\u0000\u0000\u000034\u0005\u0005\u0000\u00004\u0005\u0001\u0000\u0000"+
		"\u000056\u0005\u0006\u0000\u000067\u0005\u0014\u0000\u000078\u0005\u0007"+
		"\u0000\u00008:\u0003\u000e\u0007\u00009;\u0003\b\u0004\u0000:9\u0001\u0000"+
		"\u0000\u0000:;\u0001\u0000\u0000\u0000;\u0007\u0001\u0000\u0000\u0000"+
		"<=\u0005\b\u0000\u0000=B\u0003\f\u0006\u0000>?\u0005\u0004\u0000\u0000"+
		"?A\u0003\f\u0006\u0000@>\u0001\u0000\u0000\u0000AD\u0001\u0000\u0000\u0000"+
		"B@\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CE\u0001\u0000\u0000"+
		"\u0000DB\u0001\u0000\u0000\u0000EF\u0005\t\u0000\u0000F\t\u0001\u0000"+
		"\u0000\u0000GH\u0005\n\u0000\u0000HI\u0005\u0014\u0000\u0000IJ\u0005\u0007"+
		"\u0000\u0000JL\u0005\u0015\u0000\u0000KM\u0003\b\u0004\u0000LK\u0001\u0000"+
		"\u0000\u0000LM\u0001\u0000\u0000\u0000M\u000b\u0001\u0000\u0000\u0000"+
		"NO\u0007\u0000\u0000\u0000O\r\u0001\u0000\u0000\u0000PX\u0003\u0010\b"+
		"\u0000QR\u0003\u0010\b\u0000RS\u0005\r\u0000\u0000SX\u0001\u0000\u0000"+
		"\u0000TU\u0003\u0010\b\u0000UV\u0005\u000e\u0000\u0000VX\u0001\u0000\u0000"+
		"\u0000WP\u0001\u0000\u0000\u0000WQ\u0001\u0000\u0000\u0000WT\u0001\u0000"+
		"\u0000\u0000X\u000f\u0001\u0000\u0000\u0000YZ\u0003\u0012\t\u0000Z\u0011"+
		"\u0001\u0000\u0000\u0000[\\\u0007\u0001\u0000\u0000\\\u0013\u0001\u0000"+
		"\u0000\u0000\b\u0018%.1:BLW";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}