function calc(x){
  let asciiCodes = [];

  for (let i = 0; i < x.length; i++) {
    asciiCodes.push(x.charCodeAt(i));
  }
  return sum(asciiCodes) - sum(asciiCodes.replace(7,1))
}