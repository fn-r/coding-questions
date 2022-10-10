function roundToNext5(n){
  if(n % 5 === 0) n
  
  while(n % 5 !== 0) n++
  return n
}