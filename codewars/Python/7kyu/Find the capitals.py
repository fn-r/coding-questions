def capitals(word):
    upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    upperOnly = []
    for i in range(len(word)):
        if word[i] in upper: upperOnly.append(i)
    return upperOnly