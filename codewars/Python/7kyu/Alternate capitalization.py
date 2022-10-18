# ALTERNATIVE SOLUTION
# def capitalize(s):
#     s = ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
#     return [s, s.swapcase()]

def capitalize(s):
    even = ''
    odd = ''
    
    for i, ch in enumerate(s):
        if i % 2 == 0 and i != 1:
            even += ch.upper()
            odd += ch
        else:
            even += ch
            odd += ch.upper()
            
    return [even, odd]