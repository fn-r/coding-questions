function charFreq(message) {
  const counts = {}
  message.split('').forEach(x => counts[x] ? counts[x]++ : counts[x] = 1)
  return counts
}