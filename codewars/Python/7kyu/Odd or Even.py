def odd_or_even(arr):
    if len(arr) < 1:
        return "even"
    
    sum = 0
    for n in arr:
        sum += n
    
    if sum % 2 != 0:
        return "odd"
    return "even"