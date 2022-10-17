function solve(s){
    s = s.split('')
    const lower = s.reduce((sum, l, i) => {
      if(l === l.toLowerCase())
        sum++
      return sum
    }, 0)
    const upper = s.length - lower
    
    if (lower >= upper) {
      return s.map(l => l.toLowerCase()).join('')
    }
    return s.map(l => l.toUpperCase()).join('')
  }