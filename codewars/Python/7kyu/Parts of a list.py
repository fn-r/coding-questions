def partlist(arr):
    pl = []
    for i in range(len(arr) - 1):
        temp = []
        temp.append(' '.join(arr[:i+1]))
        temp.append(' '.join(arr[i+1:]))
        pl.append(tuple(temp))
    return pl