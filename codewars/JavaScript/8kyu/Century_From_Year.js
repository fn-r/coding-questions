function century(year) {
    let cent = [
        +(String(year).slice(0, 2)),
        +(String(year).slice(-2))
    ]
    if (cent[1] === 0) {
        return +(String(year).slice(0, -2))
    } else {
        return +(String(year).slice(0, -2)) + 1
    }
}