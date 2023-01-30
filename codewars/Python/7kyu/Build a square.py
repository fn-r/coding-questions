def generate_shape(n):
    shape = ""
    
    for i in range(0, n):
        for j in range(0, n):
            shape += "+"
            
        if i == n - 1:
            continue
        shape += "\n"
    
    return shape