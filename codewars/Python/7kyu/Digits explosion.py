def explode(s):
    ex = ""
    for n in s:
        if int(n) == 0:
            continue
        
        for i in range(0, int(n)):
            ex += n
    return ex