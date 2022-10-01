// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = ages => {
  ages.sort((a,b) => a-b)
  return ages.slice(-2)
}