function getDivisorsCnt(n){
  if (n === 0 || n === 1) return n
  
  const divisors = []
  for(let i = 0; i <= n; i++) {
    if(n % i === 0 && !divisors.includes(i)) {
      divisors.push(i)
    }
  }
  return divisors.length
}