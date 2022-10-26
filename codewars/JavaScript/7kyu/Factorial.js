const factorial = n => {
    return (n === 0 || n === 1) ? 1 : 
    [...Array(n).keys()].reduce((sum, num) => sum *= (num + 1), 1)
  }