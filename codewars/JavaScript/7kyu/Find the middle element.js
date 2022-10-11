const gimme = triplet => {
    const sorted = [...triplet]
    sorted.sort((a,b) => a-b)
    
    return triplet.indexOf(sorted[1])
  }