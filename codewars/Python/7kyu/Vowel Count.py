def get_count(sentence):
    count = 0
    vowels = 'aeiou'
    sentence = [letter for letter in sentence]
    
    for s in sentence:
        if s in vowels:
            count += 1
            
    return count