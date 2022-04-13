function remove (string) {  
  const s = string.split("")
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === "!") {
      s[i] = ""
    } else {
      break
    }
  }
  return s.join("");
}