function sumOfMinimums(arr) {
  let sum = 0
  
  arr.forEach(a => {
    a.sort((n1, n2) => n1 - n2)
    sum += a[0]
  })
  
  return sum
}