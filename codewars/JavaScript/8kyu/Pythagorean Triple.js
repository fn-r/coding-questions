function isPythagoreanTriple(integers) {
    integers = integers.sort((a,b) => a - b)
    const [a, b, c] = integers
    return (c * c) === ((a * a) + (b * b))
  }