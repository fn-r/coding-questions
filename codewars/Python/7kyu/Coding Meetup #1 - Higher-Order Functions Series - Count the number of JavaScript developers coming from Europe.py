def count_developers(lst):
    sum = 0
    for developer in lst:
        if developer['continent'] == 'Europe' and developer['language'] == 'JavaScript':
            sum += 1
    return sum