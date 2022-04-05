function sortArray(arr) {
    arr.sort((a, b) => {
        if (a > b) return 1
        if (a == b) return 0
        if (a < b) return -1
    })
    return arr
}

function pipeFix(numbers) {
    numbers = sortArray(numbers)
    let arr = []
    let i = numbers[0]
    while (i < numbers[numbers.length - 1]) {
        if (!numbers.includes(i)) {
            arr.push(i)
        }
        i++
    }
    numbers = numbers.concat(arr)
    return sortArray(numbers)
}