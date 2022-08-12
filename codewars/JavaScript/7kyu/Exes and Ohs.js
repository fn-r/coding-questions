function XO(str) {
    const xArr = str.split('').filter(x => x.toLowerCase() === 'x')
    const oArr = str.split('').filter(o => o.toLowerCase() === 'o')
    return xArr.length === oArr.length
}