function evil(n) {
  const binN = (n >>> 0).toString(2).split('')
  const noOfOne = binN.filter(n => n === '1').length
  
  return (noOfOne % 2 === 0) ? "It's Evil!" : "It's Odious!"
}