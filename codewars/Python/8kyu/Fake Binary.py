def fake_bin(x):
    num_str = ''
    
    for n in x:
        if int(n) < 5:
            num_str += '0'
        else:
            num_str += '1'
            
    return num_str