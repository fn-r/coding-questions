function isVow(a){
  const vowels = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  }
  return a.map(num => vowels[num] || num)
}