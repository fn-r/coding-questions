function uniTotal (string) {
  if(!string) return 0
  
  if(string.length === 1) return string.charCodeAt()
  return string.split('').reduce((sum, c) => sum += c.charCodeAt(), 0)
}