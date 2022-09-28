function findNextSquare(sq) {
    const square_root = sq ** 0.5
    const modulus_1 = square_root % 1

    if (modulus_1 == 0) {
        const next_perfect_square = square_root + 1
        return next_perfect_square * next_perfect_square
    }

    return -1
}