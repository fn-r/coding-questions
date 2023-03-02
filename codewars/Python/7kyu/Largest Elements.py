def largest(n, xs):
    """Find the n highest elements in a list"""
    if n == 0:
        return []
    
    return sorted(xs)[n * -1:]