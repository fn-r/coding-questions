def dont_give_me_five(start,end):
    arr = []
    for i in range(start, end + 1):
        if '5' in str(i):
            continue
        arr.append(i)
        
    return len(arr)