function arrayMadness(a, b) {
  a = a.reduce((sum, item) => sum += Math.pow(item, 2), 0)
  b = b.reduce((sum, item) => sum += Math.pow(item, 3), 0)
  return a > b
}