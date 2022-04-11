function differenceInAges(ages){
  ages = ages.sort((a,b) => a > b ? 1 : b > a ? -1 : 0)
  return [ages[0], ages.slice(-1)[0], ages.slice(-1) - ages[0]]
}