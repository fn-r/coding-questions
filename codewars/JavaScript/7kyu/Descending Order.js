function descendingOrder(n){
  n = n.toString().split('')
  
  if (n.length <= 1) return +n[0]
  return +n.sort((a,b) => b-a).join('')
}