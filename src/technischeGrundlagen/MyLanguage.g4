grammar MyLanguage;

listOfNumbers: name=IDENT '[' (numbers+=NUMBER)* ']';

IDENT: [a-z]*;
NUMBER: [0-9]+;
WS: [ \t\r\n]+ -> skip;