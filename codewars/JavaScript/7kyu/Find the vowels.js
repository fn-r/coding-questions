function vowelIndices(word){
  const vowel = word.split('').map((l, i) => ('aeiouy'.includes(l.toLowerCase())) ? i + 1 : '')
  return vowel.filter(n => n !== '')
}