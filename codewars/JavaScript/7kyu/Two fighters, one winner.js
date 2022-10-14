function declareWinner(fighter1, fighter2, firstAttacker) {
  let secondAttacker = fighter2
  
  if(firstAttacker === fighter2.name) {
    firstAttacker = fighter2
    secondAttacker = fighter1
  } else {
    firstAttacker = fighter1
  }
  
  while(firstAttacker.health > 0 || secondAttacker.health > 0) {
    secondAttacker.health -= firstAttacker.damagePerAttack
    if(secondAttacker.health <= 0) return firstAttacker.name
    
    firstAttacker.health -= secondAttacker.damagePerAttack
    if(firstAttacker.health <= 0) return secondAttacker.name
  }
}