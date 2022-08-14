function findShort(s){
  return s.split(' ').map(word => word.length).sort((a,b) => a - b)[0]
}