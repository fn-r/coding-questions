"""
# OTHER SOLUTION
def bar_triang((xA, yA), (xB, yB), (xC, yC)):
    x0 = round((xA + xB + xC) / 3.0, 4)
    y0 = round((yA + yB + yC) / 3.0, 4)
    return [x0, y0]
""" 


def bar_triang(point_a, point_b, point_c): 
    xA, yA = point_a
    xB, yB = point_b
    xC, yC = point_c
    x0 = (xA + xB + xC) / 3
    y0 = (yA + yB + yC) / 3
    
    return [round(x0, 4), round(y0, 4)]