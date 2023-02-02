def switcheroo(s):
    roo = ""
    
    for letter in s:
        if letter == "a":
            roo += "b"
        elif letter == "b":
            roo += "a"
        else:
            roo += letter
    return roo