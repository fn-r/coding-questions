def round_to_next5(n):
    if (n % 5 == 0): n
    
    while (n % 5 != 0):
        n = n + 1
    return n