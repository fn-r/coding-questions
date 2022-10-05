function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode) return false
    
    currentDate = new Date(currentDate)
    expirationDate = new Date(expirationDate)
    if(currentDate > expirationDate) return false
    
    return true
  }