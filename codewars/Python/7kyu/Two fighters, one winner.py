def declare_winner(fighter1, fighter2, first_attacker):
    if first_attacker == fighter2.name:
        fighter1, fighter2 = fighter2, fighter1
        
    while True:
        fighter2.health -= fighter1.damage_per_attack
        if(fighter2.health <= 0):
            return fighter1.name
        
        fighter1.health -= fighter2.damage_per_attack
        if(fighter1.health <= 0):
            return fighter2.name