def count_positives_sum_negatives(arr):
    if len(arr) < 1:
        return arr
    
    pos = list(filter(lambda n: n > 0, arr))
    neg = list(filter(lambda n: n < 0, arr))
    sum = 0
    
    for n in neg:
        sum += n
    return [len(pos), sum]