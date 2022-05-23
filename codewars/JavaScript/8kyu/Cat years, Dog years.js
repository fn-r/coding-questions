const thisAnimalYears = (humanYears, animalYears) => {
    let years = 0
    
    for (let i = 1; i <= humanYears; i++) {
      if(i > 2) {
        years += animalYears  
      } else {
        if(i === 1) years += 15
        if(i === 2) years += 9  
      }
    }
    
    return years
  }
  
  const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    thisAnimalYears(humanYears, 4),
    thisAnimalYears(humanYears, 5)
  ]