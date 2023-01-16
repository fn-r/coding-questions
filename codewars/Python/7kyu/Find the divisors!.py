def divisors(integer):
    divisor = []
    for i in range(2, integer):
        if i in divisor:
            break
        
        if integer % i == 0:
            divisor.append(i)
            
    if len(divisor) >= 1:
        return divisor
    return '{0} is prime'.format(integer)