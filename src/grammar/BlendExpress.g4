grammar BlendExpress;
program: moduleDefinition sectionDefinition*;
sectionDefinition: 'section' CAPITAL_IDENTIFIER '{' apiDefinition* '}';
moduleDefinition: 'module' CAPITAL_IDENTIFIER;
apiDefinition: 'api' IDENTIFIER '(' HTTP_METHOD ')' '{' authenticated? inputDefinition? outputDefinition? '}';

authenticated: 'authenticated';
inputDefinition: 'input(' field (',' field)* ')';
outputDefinition: 'output(' field (',' field)* ')' | 'output(' directOutputDefenition ')';
directOutputDefenition: type;

field: IDENTIFIER ':' type;
type: primitiveType
    | primitiveType '[]'
    | primitiveType '?'
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER '?'
    | CAPITAL_IDENTIFIER '->' CAPITAL_IDENTIFIER '[]';

primitiveType: 'string' | 'number' | 'boolean' | 'any' | 'object';

HTTP_METHOD: 'GET' | 'POST'|'DELETE' | 'PUT';
IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;