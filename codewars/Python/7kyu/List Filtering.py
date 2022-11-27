def filter_list(list):
    num = []
    for item in list:
        if isinstance(item, int):
            num.append(item)
    return num