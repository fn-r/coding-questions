function reverseLetter(str) {
  str = str.split('')
  str = str.filter(ch => 'abcdefghijklmnopqrstuvwxyz'.includes(ch))
  return str.reverse().join('')
}