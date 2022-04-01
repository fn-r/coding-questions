function correct(string) {
    return string.split("").map(s => {
        if (s === " ") return s
        if (+s === 0) {
            s = "O"
        } else if (+s === 1) {
            s = "I"
        } else if (+s === 5) {
            s = "S"
        }
        return s
    }).join("")
}