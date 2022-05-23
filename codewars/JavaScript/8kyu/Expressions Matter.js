function expressionMatter(a, b, c) {
    const results = [
      a + b + c,
      a * b * c,
      (a + b) * c,
      a * (b + c)
    ]
    return Math.max(...results)
  }