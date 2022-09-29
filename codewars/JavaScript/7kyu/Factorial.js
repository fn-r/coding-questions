const factorial = n => {
    if (n < 0 || n > 12) throw RangeError
    if (n === 0) return 1
    
    let f = 1
    for(let i = 1; i <= n; i++) {
      f *= i
    }
    return f
  }