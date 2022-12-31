def sum_array(a):
    if len(a) < 1:
        return 0
    
    sum = 0
    for n in a:
        sum += n
    return sum