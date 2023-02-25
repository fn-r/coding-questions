def find_smallest(numbers,to_return):
    if to_return == 'value':
        return min(numbers)
    elif to_return == 'index':
        return numbers.index(min(numbers))