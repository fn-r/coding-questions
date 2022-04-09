function nextId(ids) {
    ids = ids.sort((a, b) => {
        if (a > b) return 1
        if (a === b) return 0
        if (a < b) return -1
    })
    ids = ids.filter((item, i, arr) => item !== arr[i + 1])
    let min = 0
    for (let i = 0; i < ids.length; i++) {
        if (min !== ids[i]) {
            return min
        }
        min++
    }
    return min++;
}