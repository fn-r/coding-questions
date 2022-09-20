def merge_arrays(first, second): 
    merge = []
    for n in first:
        if not n in merge:
            merge.append(n)
    for n in second:
        if not n in merge:
            merge.append(n)
    merge.sort()
    return merge