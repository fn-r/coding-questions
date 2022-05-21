function alphanumeric(string){
  if(string.trim().length === 0) return false
  return string.split('').filter(l => ['_', '&', ')', '(', '!', ' '].includes(l)).length > 0 ? false : true
}