# Other Solution
# def high_and_low(numbers):
#     nums = sorted(numbers.split(), key=int)
#     return '{} {}'.format(nums[-1], nums[0])

def high_and_low(numbers):
    numbers = list(numbers.split(' '))
    for n in range(len(numbers)):
        numbers[n] = int(numbers[n])
    numbers.sort()
        
    return f'{numbers[-1]} {numbers[0]}'