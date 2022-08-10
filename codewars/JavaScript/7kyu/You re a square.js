const isSquare = n => {
    const root = Math.ceil(Math.sqrt(Math.abs(n)))
    return (Math.pow(root, 2) === n)
}