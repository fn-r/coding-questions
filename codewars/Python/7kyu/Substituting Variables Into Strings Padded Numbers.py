from itertools import repeat

def solution(value):
    len_val = len(str(value))
    
    return f'Value is {"".join(repeat("0", 5 - len_val))}{value}'