def has_unique_chars(string):
    while(len(string) != 0):
        if string[0] in string[1:]:
            return False
        string = string[1:]
        
    return True