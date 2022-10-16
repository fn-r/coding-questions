function checkExam(array1, array2) {
    const score = array2.reduce((sum, n, i) => {
      if(n === array1[i]) {
        sum += 4
      } else if (n !== "") {
        sum -= 1
      }
      return sum
    }, 0)
    
    return (score > 0) ? score : 0
  }