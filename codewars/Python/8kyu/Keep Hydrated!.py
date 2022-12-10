import math

def litres(time):
    if time < 2:
        return 0
    
    return math.floor(time / 2)