function remove (string) {
  string = string.split("")
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].replace("!", "")
  }
  return string.join("") + "!";
}