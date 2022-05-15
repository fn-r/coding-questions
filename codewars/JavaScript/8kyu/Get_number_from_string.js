function getNumberFromString(s) {
  return +s.split('').filter(c => '1234567890'.includes(c)).join('');
}