grammar BlendBasic;
sections: section+;
section: 'section' IDENTIFIER '{' module* '}';
module: dataModule
      | expressModule
      | rnModule
      | mongoModule
      | reactModule;
dataModule: 'data-module' IDENTIFIER (',' IDENTIFIER)* ;
expressModule: 'express-module' IDENTIFIER (',' IDENTIFIER)* ;
rnModule: 'rn-module' IDENTIFIER (',' IDENTIFIER)* ;
reactModule: 'react-module' IDENTIFIER (',' IDENTIFIER)* ;
mongoModule: 'mongo-module' IDENTIFIER (',' IDENTIFIER)* ;
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS: [ \t\r\n]+ -> skip;

