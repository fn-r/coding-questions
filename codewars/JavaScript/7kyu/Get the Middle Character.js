function getMiddle(s) {
  const strArr = s.split('')
  const l = strArr.length
  const mid = Math.floor(l / 2)
  
  if(l <= 1) return s
  if(l % 2 === 0) return strArr.splice(mid - 1, 2).join('')
  return strArr[mid]
}