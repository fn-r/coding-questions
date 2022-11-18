def descending_order(num):
    highest = []
    for n in str(num):
        highest.append(n)
    highest.sort(reverse = True)
    return int(''.join(highest))