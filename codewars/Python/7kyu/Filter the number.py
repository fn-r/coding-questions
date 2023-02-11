def filter_string(string):
    numbers = ""
    
    for s in string:
        if s in '0123456789':
            numbers += s
    return int(numbers)