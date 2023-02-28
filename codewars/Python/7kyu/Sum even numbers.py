def sum_even_numbers(seq): 
    sum=0
    for n in seq:
        if n%2==0:
            sum += n 
    return sum
