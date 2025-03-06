grammar BlendData;

program: moduleDefinition dataDefinition+ EOF;

moduleDefinition: 'module' CAPITAL_IDENTIFIER;

dataDefinition: 'data' CAPITAL_IDENTIFIER '(' field (',' field)* ')';

field: IDENTIFIER ':' type;

type: baseType
    | baseType '[]'
    | baseType '?'
    | baseType '->' baseType
    | baseType '->' baseType '?'
    | baseType '->' baseType '[]';

baseType: primitiveType | CAPITAL_IDENTIFIER;

primitiveType: 'string' | 'number' | 'boolean' | 'any';

IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
