def square_sum(numbers):
    numbers = [(n * n) for n in numbers]
    sum = 0
    
    for n in numbers:
        sum += n
    return sum