def repeat_str(repeat, string):
    str = string
    for _ in range(1, repeat):
        str += string
    return str