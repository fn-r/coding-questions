def gimme(input_array):
    sorted_array = []
    for n in input_array:
        sorted_array.append(n)
    sorted_array.sort()
    
    return input_array.index(sorted_array[1])