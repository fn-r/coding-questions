function calculator(a,b,sign){
  results = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b
  }
  
  if(results.hasOwnProperty(sign)) return results[sign]
  return 'unknown value'
}