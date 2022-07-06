function squareDigits(num) {
    const numArray = num.toString().split('')
    return +numArray.map(n => Math.pow(+n, 2)).join('')
}