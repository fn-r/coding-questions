function ensureQuestion(s) {
  if(s.charAt(s.length - 1) === '?') return s
  return s + '?'
}