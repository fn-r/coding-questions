def div_con(x):
    s_sum = 0
    n_sum = 0
    
    for n in x:
        if isinstance(n, str):
            s_sum += int(n)
            continue
        n_sum += n
        
    return n_sum - s_sum