function drawStairs(n) {
  let stairs = ""
  
  if(n === 1) return "I"
  
  for(let i = 0; i < n; i++) {
    (i === n - 1) ? stairs += "I"
    : stairs += `I\n ${" ".repeat(i)}`
  }
  return stairs
}