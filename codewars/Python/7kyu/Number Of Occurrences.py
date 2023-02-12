def number_of_occurrences(element, sample):
    count = 0
    for e in sample:
        if e == element:
            count += 1
    return count