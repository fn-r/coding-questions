const capitals = word => {
  word = word.split('')
	const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const upperOnly = []
  for(let i = 0; i < word.length; i++) {
    if(upper.includes(word[i])) {
      upperOnly.push(i)
    }
  }
  return upperOnly
};