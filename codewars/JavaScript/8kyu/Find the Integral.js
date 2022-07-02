function integrate(coefficient, exponent) {
  exponent += 1
  return `${coefficient / exponent}x^${exponent}`
}