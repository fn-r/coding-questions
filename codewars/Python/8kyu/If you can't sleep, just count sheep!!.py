def count_sheep(n):
    sheep = ''
    for i in range(1,n+1):
        sheep += '{0} sheep...'.format(i)
    return sheep