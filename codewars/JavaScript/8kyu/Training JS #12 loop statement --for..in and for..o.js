function giveMeFive(obj){
  const vals = []
  
  for(let k in obj) {
    if(k.length === 5) {
      vals.push(k)
    }
    
    if(obj[k].length === 5) {
      vals.push(obj[k])  
    }
  }
  
  return vals
}