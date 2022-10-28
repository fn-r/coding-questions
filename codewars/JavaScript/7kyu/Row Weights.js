function rowWeights(array){
    const total = [0,0]
    
    for(let i = 0; i < array.length; i++) {
      if(i % 2 === 0 && i !== 1) {
        total[0] += array[i]
      } else {
        total[1] += array[i]
      }
    }
    
    return total
  }