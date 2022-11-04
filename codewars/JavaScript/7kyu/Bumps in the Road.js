const bump = x => {
  let sum = x.split('').reduce((sum, a) => (a === 'n') ? sum += 1 : sum += 0, 0)
  return (sum <= 15) ? "Woohoo!" : "Car Dead"
}