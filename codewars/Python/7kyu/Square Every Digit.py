def square_digits(num):
    string = ''
    
    for n in str(num):
        string += str(int(n) ** 2)
    
    return int(string)