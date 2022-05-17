function changeMe(moneyIn){
  const change = {
    '20p': ' 10p'.repeat(2).trim(),
    '50p': ' 20p'.repeat(2).trim() + ' 10p',
    '£5' : ' 20p'.repeat(25).trim(),
    '£2' : ' 20p'.repeat(10).trim(),
    '£1' : ' 20p'.repeat(5).trim(),
  }
  
  if(moneyIn in change) {
    return change[moneyIn]
  }
  return moneyIn
}