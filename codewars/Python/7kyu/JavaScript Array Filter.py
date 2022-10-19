def get_even_numbers(arr):
    def is_even(n):
        return n % 2 == 0 and n != 1
        
    return list(filter(is_even, arr))