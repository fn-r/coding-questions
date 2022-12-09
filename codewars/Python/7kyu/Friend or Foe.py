def friend(x):
    friends = []
    for f in x:
        if len(f) == 4:
            friends.append(f)
    return friends