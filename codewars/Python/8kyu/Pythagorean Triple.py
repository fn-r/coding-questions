# OTHER SORTING METHOD
# a, b, c = sorted(integers)

def pythagorean_triple(integers):
    integers.sort()
    [a, b, c] = integers
    return (c * c) == ((a * a) + (b * b))