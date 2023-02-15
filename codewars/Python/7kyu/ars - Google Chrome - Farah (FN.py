def greet_developers(lst): 
    for developer in lst:
        developer['greeting'] = f"Hi {developer['firstName']}, what do you like the most about {developer['language']}?"
        
    return lst