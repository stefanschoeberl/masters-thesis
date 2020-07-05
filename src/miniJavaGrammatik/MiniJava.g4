grammar MiniJava;

minijava: (javaclass)*;

javaclass: 'class' name=IDENT '{' 
           ( fields+=field
           | methods+=method
           | constructors+=constructor )* 
           '}';

field: type=typeDefinition name=IDENT ';';

method: ( publicmodifier+='public' 
        | nativemodifier+='native' 
        | staticmodifier+='static' )* 
        returntype=typeDefinition name=IDENT
        '(' (parameters+=formalParameter (',' parameters+=formalParameter)*)? ')'
        ( block='{' (statements+=statement)* '}' 
        | semicolon=';' );

constructor: name=IDENT '(' 
             (parameters+=formalParameter (',' parameters+=formalParameter)*)? ')'
             block='{' (statements+=statement)* '}';

formalParameter: type=typeDefinition name=IDENT;

statement: completeStatement
         | incompleteIfStatement
         ;

incompleteIfStatement: 'if' '(' condition=expr ')' 
                       thenbranch=statement                 # IncompleteIfStmt
                     | 'if' '(' condition=expr ')' 
                       thenbranch=completeStatement 'else' 
                       elsebranch=incompleteIfStatement     # IncompleteIfElseStmt
                     ;

completeStatement: 'if' '(' condition=expr ')' 
                   thenbranch=completeStatement 'else' 
                   elsebranch=completeStatement                 # CompleteIfElseStmt
                 | 'while' '(' condition=expr ')' 
                   body=statement                               # WhileLoopStmt
                 | '{' (statements+=statement)* '}'             # BlockStmt
                 | type=typeDefinition name=IDENT '=' expr ';'  # VardeclassignStmt
                 | type=typeDefinition name=IDENT ';'           # VardeclStmt
                 | left=expr '=' right=expr ';'                 # VarassignStmt
                 | expr ';'                                     # ExpressionStmt
                 | 'return' value=expr ';'                      # ReturnStmt
                 ;

typeDefinition: IDENT         # SimpleType
              | IDENT '[' ']' # ArrayType;

expr: array=expr '[' index=expr ']'                    # ArrayAccessExpr
    | left=expr '.' right=IDENT                        # MemberExpr
    | target=expr '(' 
      (parameters+=expr (',' parameters+=expr)*)? ')'  # CallExpr
    | '-' expr                                         # MinusExpr
    | '(' type=typeDefinition ')' expr                 # CastExpr
    | left=expr op=(MUL|DIV) right=expr                # MulDivExpr
    | left=expr op=(ADD|SUB) right=expr                # AddSubExpr
    | left=expr op=(LT|LE|GT|GE) right=expr            # RelationalExpr
    | left=expr op=(EQ|NEQ) right=expr                 # EqNeqExpr
    | left=expr op=AND right=expr                      # AndExpr
    | left=expr op=OR right=expr                       # OrExpr
    | IDENT                                            # IdExpr
    | INT                                              # IntExpr
    | FLOAT                                            # FloatExpr
    | NULL                                             # NullExpr
    | THIS                                             # ThisExpr
    | CHAR                                             # CharExpr
    | STRING                                           # StringExpr
    | value=(TRUE|FALSE)                               # BoolExpr
    | '(' expr ')'                                     # ParensExpr
    | 'new' type=IDENT '(' 
      (parameters+=expr (',' parameters+=expr)*)? ')'  # ClassInstanceCreationExpr
    | 'new' type=IDENT '[' size=expr ']'               # ArrayCreationExpr
    ;

EQ:  '==';
NEQ: '!=';
LT: '<';
LE: '<=';
GT: '>';
GE: '>=';
AND: '&&';
OR: '||';

ADD: '+';
SUB: '-';
MUL: '*';
DIV: '/';

TRUE: 'true';
FALSE: 'false';
NULL: 'null';
THIS: 'this';
IDENT: [_a-zA-Z][_a-zA-Z0-9]*;
FLOAT: [0-9]+ ('.' [0-9]*)? 'f';
INT: [0-9]+;
CHAR: '\'' . '\'';
STRING: '"' .*? '"';

WS: [ \t\r\n]+ -> skip;
SINGLE_LINE_COMMENT: '//' .*? [\r\n]+ -> skip;
MULTI_LINE_COMMENT: '/*' .*? '*/' -> skip;