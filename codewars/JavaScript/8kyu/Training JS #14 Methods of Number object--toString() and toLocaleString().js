function colorOf(r,g,b){
  const rgb2hex = n => (n !== 0) ? (n > 16) ? n.toString(16) : '0' + n.toString(16) : '00'
  return '#' + rgb2hex(r) + rgb2hex(g) + rgb2hex(b)
}
