function sumMul(n,m){
  if(m <= n) return "INVALID"
  
  const arr = []
  let i = 1
  while (n * i < m) {
    arr.push(n * i)
    i++
  }
  return arr.reduce((a,b) => a + b)
}