def maskify(cc):
    if len(cc) < 4:
        return cc
    
    mask = ''
    for i in range(0, len(cc) - 4):
        mask += '#'
    return mask + cc[-4:]