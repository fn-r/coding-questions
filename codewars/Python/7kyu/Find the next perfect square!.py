def find_next_square(sq):
    # Return the next square if sq is a square, -1 otherwise
    square_root = sq ** 0.5
    modulus_1 = square_root % 1

    is_perfect_square = (modulus_1 == 0)
    if is_perfect_square:
        next_perfect_square = square_root + 1
        return next_perfect_square * next_perfect_square
    
    return -1