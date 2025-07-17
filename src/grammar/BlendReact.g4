grammar BlendReact;

program: moduleDefinition componentDefenition* screenDefenition* layoutDefinition*;

moduleDefinition: 'module' CAPITAL_IDENTIFIER;

screenDefenition: 'screen' CAPITAL_IDENTIFIER (',' CAPITAL_IDENTIFIER)* 'under' PATH_IDENTIFIER ;
componentDefenition: 'component' CAPITAL_IDENTIFIER (',' CAPITAL_IDENTIFIER)* 'under' PATH_IDENTIFIER ;

layoutDefinition: 'layout' CAPITAL_IDENTIFIER '(' PATH_IDENTIFIER ')' '{' pageDefinition* layoutDefinition* '}';
pageDefinition: 'page' CAPITAL_IDENTIFIER '(' PATH_IDENTIFIER ')' 'view' '(' CAPITAL_IDENTIFIER ')';

PATH_IDENTIFIER: '"' [a-zA-Z0-9_/:]* '"';
IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
