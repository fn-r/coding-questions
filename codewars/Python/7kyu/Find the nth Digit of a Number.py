def find_digit(num, nth):
    num = str(num)
    
    if nth <= 0:
        return -1
    if nth > len(num):
        return 0
    
    return int(num[nth * -1])