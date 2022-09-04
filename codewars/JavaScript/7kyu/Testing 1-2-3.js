var number=function(array){
    if(array.length < 1) return array
    
    return array.map((str, i) => `${i + 1}: ${str}`)
  }