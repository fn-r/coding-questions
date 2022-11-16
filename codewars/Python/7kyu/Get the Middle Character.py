def get_middle(s):
    length = len(s)
    mid = int(length / 2)
    if length % 2 == 0 and length != 1:
        return s[mid - 1: mid + 1]
    return s[mid]