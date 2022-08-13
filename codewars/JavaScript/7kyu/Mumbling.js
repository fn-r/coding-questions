function accum(s) {
  const sArr = s.split('')
	for(let i = 0; i < sArr.length; i++) {
    let newStr = sArr[i].toUpperCase()
    
    for(let j = 0; j <= i - 1; j++) {
      newStr += sArr[i].toLowerCase()
    }
    sArr[i] = newStr
  }
  return sArr.join('-')
}