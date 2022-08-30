function divisors(integer) {
  const divArr = []
  for(let i = 2; i < integer; i++) {
    if(divArr.includes(i)) continue
    
    if(integer % i === 0) {
      divArr.push(i)
      divArr.push(integer / i)
    }
    continue
  }
  
  if(divArr.length === 0) {
    return `${integer} is prime`
  }
  return divArr.sort((a,b) => a - b)
};