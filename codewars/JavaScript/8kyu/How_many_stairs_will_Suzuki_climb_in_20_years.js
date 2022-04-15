function stairsIn20(s){
  s = s.map(day => day.reduce((a,b) => a + b))
  s = s.reduce((a,b) => a+b)
  return s * 20
}