def min_sum(arr):
    sum = 0
    arr = sorted(arr)
    arr_len = int(len(arr) / 2)
    
    for n in range(0, arr_len):
        n1 = arr[n]
        n2 = arr[-1 * (n + 1)]
        
        sum += n1 * n2
    return sum