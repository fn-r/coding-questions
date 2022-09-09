def html_special_chars(data): 
    new_data = ""
    special_chars = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    }
    
    for c in data:
        if special_chars.get(c):
            c = special_chars[c]
        new_data += c
    
    return new_data