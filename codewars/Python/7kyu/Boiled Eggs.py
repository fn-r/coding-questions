import math

def cooking_time(eggs):
    time = 5
    if eggs == 0:
        return 0
    if eggs <= 8:
        return time
    
    return math.ceil(eggs/8) * time