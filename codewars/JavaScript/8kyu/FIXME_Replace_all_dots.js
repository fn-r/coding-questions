function replaceDots(str) {
    return str.split("").map(s => {
        return s.replace(".", "-")
    }).join("")
}