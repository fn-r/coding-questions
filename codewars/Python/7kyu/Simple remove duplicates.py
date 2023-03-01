def solve(arr): 
    out_arr = []
    
    for item in reversed(arr):
        if item not in out_arr:
            out_arr.insert(0, item)
    
    return out_arr