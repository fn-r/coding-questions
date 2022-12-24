import operator

def find_needle(haystack):
    return f"found the needle at position {operator.indexOf(haystack, 'needle')}"