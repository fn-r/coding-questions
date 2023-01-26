def points(games):
    points = 0
    for game in games:
        x, y = game.split(':')
        x = int(x)
        y = int(y)
        
        if x > y:
            points += 3
        elif x == y:
            points += 1
    return points