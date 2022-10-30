function isSortedAndHow(array) {
  const ascArr = [...array].sort((a,b) => a-b)
  const desArr = [...array].sort((a,b) => b-a)
  
  if(array.every((n, i) => n === ascArr[i])) {
    return 'yes, ascending'
  } else if (array.every((n, i) => n === desArr[i])) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}