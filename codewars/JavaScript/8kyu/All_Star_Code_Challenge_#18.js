function strCount(str, letter) {
    return str.split("").reduce((count, l) => {
        if (l === letter) count++
        return count
    }, 0)
}