def accum(s):
    mumbles = [x for x in s]
    for i in range(1, len(mumbles)):
        count = 1
        new_x = mumbles[i].upper()
        while count <= i:
            new_x += mumbles[i].lower()
            count += 1
        mumbles[i] = new_x
    return '-'.join(mumbles)