function sumOfDifferences(arr) {
  if(!arr.length) return 0
  return Math.max(...arr) - Math.min(...arr)
}