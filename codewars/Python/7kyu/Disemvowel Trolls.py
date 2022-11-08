def disemvowel(string_):
    str = [str for str in string_]
    no_vowel = ''
    
    for s in str:
        if s not in 'aeiouAEIOU':
            no_vowel += s
    return no_vowel