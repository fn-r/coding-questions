def solution(pairs):
    s = []
    
    for key, value in pairs.items():
        s.append(f'{key} = {value}')
        
    s = sorted(s)
    return ','.join(s)