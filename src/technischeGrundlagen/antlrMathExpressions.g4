expr: <assoc=right> expr op='^' expr 
    |  expr op=('*'|'/') expr
    |  expr op=('+'|'-') expr
    |  INT
    |  ID
    |  '(' expr ')'
    ;