function getEvenNumbers(numbersArray) {
    return numbersArray.filter(n => n % 2 === 0 && n !== 1)
}