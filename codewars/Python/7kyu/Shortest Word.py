def find_short(string):
    count = [len(s) for s in string.split(' ')]
    return min(count)