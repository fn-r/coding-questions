function longest(s1, s2) {
  s1 = s1.concat(s2)
  return [...new Set(s1)].sort().join('')
}