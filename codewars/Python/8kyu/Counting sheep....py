def present(sheep):
    return True if sheep else False

def count_sheeps(sheep):
    return len(list(filter(present, sheep)))