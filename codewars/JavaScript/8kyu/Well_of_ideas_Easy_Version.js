function well(x) {
    const sum = x.reduce((good, item) => {
        if (item === "good") {
            good++
        }
        return good
    }, 0)
    return sum > 2 ? "I smell a series!" : sum >= 1 ? "Publish!" : "Fail!"
}