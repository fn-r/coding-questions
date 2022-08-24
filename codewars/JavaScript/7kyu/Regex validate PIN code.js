function validatePIN(pin) {
    const l = pin.length
    const pinArr = pin.split('').filter(n => '1234567890'.includes(n))

    if (pinArr.length !== l) return false
    return (l === 4 || l === 6)
}