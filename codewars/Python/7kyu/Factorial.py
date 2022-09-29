def factorial(n):
    if (n < 0) or (n > 12): raise ValueError
    if (n == 0): 1
    
    f = 1
    for i in range(1, n + 1):
        f *= i
    return f