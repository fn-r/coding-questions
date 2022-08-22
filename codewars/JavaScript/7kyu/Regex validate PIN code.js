function validatePIN (pin) {
  const l = pin.length
  return (l === 4 || l === 6)
}