def in_asc_order(arr):
    bool = True
    
    for i in range(len(arr) - 1):
        if(arr[i] > arr[i+1]): bool = False
    return bool