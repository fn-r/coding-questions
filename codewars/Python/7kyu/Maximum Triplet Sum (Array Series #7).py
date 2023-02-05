def max_tri_sum(numbers):
    numbers = set(numbers)
    numbers = sorted(numbers)
    return sum(numbers[-3:])