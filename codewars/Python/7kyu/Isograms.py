def is_isogram(string):
    str = list([s.lower() for s in string])
    str.sort()
    
    for i in range(0, len(str) - 1):
        if str[i] == str[i+1]:
            return False
    return True