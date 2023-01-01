def invert(lst):
    if len(lst) < 1:
        return lst
    
    return [n * -1 for n in lst]