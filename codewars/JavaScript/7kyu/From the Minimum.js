function minValue(values){
  values = [...new Set(values)]
  values.sort()
  
  return +values.join('')
}