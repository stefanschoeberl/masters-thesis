local.get 0               ;;       
if                        ;;           if (v0 != 0) {
    i32.const 1           ;;       
    local.set 1           ;;               v1 = 1;
else                      ;;           } else {
    i32.const 2           ;;       
    local.set 1           ;;               v1 = 2;
end                       ;;           }