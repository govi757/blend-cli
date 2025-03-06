grammar BlendMDP;

program: moduleDefinition parentDefinition propsDefinition;

moduleDefinition: 'module' CAPITAL_IDENTIFIER;
parentDefinition: 'parent' CAPITAL_IDENTIFIER;
propsDefinition: 'props' '{' propsBodyDefinition* '}';
propsBodyDefinition: IDENTIFIER ':' (CAPITAL_IDENTIFIER | primitiveType);
primitiveType: 'string' | 'number' | 'boolean' | 'any'|'object';
IDENTIFIER: [a-z_][a-zA-Z0-9_]*;
CAPITAL_IDENTIFIER: [A-Z][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;
