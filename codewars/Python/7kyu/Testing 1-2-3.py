def number(lines):
    for i in range(len(lines)):
        lines[i] = f'{i + 1}: {lines[i]}'
    
    return lines