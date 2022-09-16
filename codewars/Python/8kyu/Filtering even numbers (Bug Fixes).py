def kata_13_december(lst): 
    filtered = []
    for i in lst:
        if not (i % 2 == 0): 
            filtered.append(i)
    return filtered