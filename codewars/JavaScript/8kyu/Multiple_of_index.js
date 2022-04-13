function multipleOfIndex(array) {
  return array.filter((n, i) => n % i === 0)
}