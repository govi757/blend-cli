grammar BlendMongo;

program: moduleDefinition collectionDefinition+;

moduleDefinition: 'module' CAPITAL_IDENTIFIER;

collectionDefinition: 'collection' CAPITAL_IDENTIFIER '{' property (',' property)*  (',' reference (',' reference)*)? '}';

property:'property' IDENTIFIER ':' type propertyChars?;
propertyChars: '(' mongoChars (',' mongoChars)* ')';
reference: 'reference' IDENTIFIER ':' CAPITAL_IDENTIFIER propertyChars?;
mongoChars: 'unique' | 'index';

type: baseType
    | baseType '[]'
    | baseType '?';

baseType: primitiveType;

primitiveType: 'String' | 'Number' | 'Boolean' | 'any' | 'Object';

IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
