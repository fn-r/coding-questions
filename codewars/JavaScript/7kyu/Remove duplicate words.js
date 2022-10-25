function removeDuplicateWords (s) {
  s = s.split(' ')
  return [...new Set(s)].join(' ')
}