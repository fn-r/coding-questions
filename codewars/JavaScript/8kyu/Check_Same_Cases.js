function sameCase(a, b){
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = lower.split('').map(l => l.toUpperCase()).join('')
  
  if(lower.includes(a) && lower.includes(b)) return 1
  if(upper.includes(a) && upper.includes(b)) return 1
  if(lower.includes(a) && upper.includes(b)) return 0
  if(upper.includes(a) && lower.includes(b)) return 0
  return -1
}