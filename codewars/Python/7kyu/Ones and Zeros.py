def binary_array_to_number(arr):
    bin_value = ''.join(map(str, arr))
    return int(bin_value, 2)