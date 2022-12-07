def get_sum(a,b):
    if a > b:
        a, b = b, a
        
    sum = 0
    for i in range(a, b + 1):
        sum += i
    return sum