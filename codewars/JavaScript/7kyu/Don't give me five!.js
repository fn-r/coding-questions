function dontGiveMeFive(start, end) {
  const arr = []
  for(let i = start; i <= end; i++) {
    if(i.toString().includes('5')) continue
    arr.push(i)
  }
  return arr.length
}