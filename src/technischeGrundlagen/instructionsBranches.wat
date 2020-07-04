block                     ;;           
+-> loop ;; #0            ;;           while (true) {
|       local.get 0       ;;
|       br_if 1 -----+    ;;               if (v0 != 0) break;
|       ...          |    ;;               ...
+------ br 0         |    ;;
    end              |    ;;
end ;; #1 <----------+    ;;           }