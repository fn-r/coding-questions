def vaporcode(s):
    s = s.replace(' ', '')
    res = []
    
    for i in range(len(s)):
        res.append(s[i].upper())
        
    return '  '.join(res)