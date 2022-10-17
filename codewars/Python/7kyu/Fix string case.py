def solve(s):
    lower = 0
    upper = 0
    
    for ch in s:
        if ch == ch.lower():
            lower += 1
        else:
            upper += 1
    
    if lower >= upper:
        return s.lower()
    return s.upper()