def find_average(numbers):
    if len(numbers) < 1:
        return 0
    
    return sum(numbers) / len(numbers)