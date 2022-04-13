function remove(s,n){
  s = s.split("")
  if(n > s.length) {
    return s.filter(c => c !== "!").join("")
  }
  
  count = 0
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "!" && count < n) {
      s[i] = ""
      count++
    }
  }
  return s.join("")
}