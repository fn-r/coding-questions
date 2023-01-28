def sum_cubes(n):
    sum = 0
    for i in range(1, n + 1):
        cube = i * i * i
        sum += cube
    return sum