function barTriang([xA, yA], [xB, yB], [xC, yC]){
    const x0 = +((xA + xB + xC) / 3).toFixed(4)
    const y0 = +((yA + yB + yC) / 3).toFixed(4)
    
    return [x0, y0]
  }