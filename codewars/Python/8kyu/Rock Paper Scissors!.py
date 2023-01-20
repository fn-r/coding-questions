def rps(p1, p2):
    cond = {
        'rock': ['scissors', 'paper'],
        'scissors': ['paper', 'rock'],
        'paper': ['rock', 'scissors']
    }
    
    p1 = p1.lower()
    p2 = p2.lower()
    
    if p1 == p2:
        return 'Draw!'
    elif cond[p1][0] == p2 or cond[p2][1] == p1:
        return 'Player 1 won!'
    elif cond[p2][0] == p1 or cond[p1][1] == p1:
        return 'Player 2 won!'