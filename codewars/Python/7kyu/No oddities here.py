def no_odds(values):
    even = []
    for n in values:
        if (n != 1 and n % 2 == 0):
            even.append(n)
    return even