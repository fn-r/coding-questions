function getCount(str) {
  let vowelsCount = 0;  
  str.split('').forEach(letter => ( ['a','e','i','o','u'].indexOf(letter) !== -1) ? vowelsCount++ : '')
  return vowelsCount;
}