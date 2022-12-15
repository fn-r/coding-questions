def longest(a1, a2):
    a3 = a1 + a2
    sorted_a = []
    for a in a3:
        if a not in sorted_a:
            sorted_a.append(a)
    sorted_a.sort()
    return ''.join(sorted_a)