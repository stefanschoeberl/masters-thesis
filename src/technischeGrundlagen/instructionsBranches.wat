block
    +-> loop ;; label #0
    |   local.get 0 --+
    |   br_if 1       |
    |   ...           |
    +-- br 0          |
    end               |
end ;; label #1 <-----+