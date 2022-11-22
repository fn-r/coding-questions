def xo(s):
    x = 0
    o = 0
    for c in s:
        if c in 'xX':
            x = x + 1
        if c in 'oO':
            o = o + 1
    return x == o