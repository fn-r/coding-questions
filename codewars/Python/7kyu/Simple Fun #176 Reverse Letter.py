def reverse_letter(string):
  string = list(string)
  string.reverse()
  
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  reverse = []

  for ch in string:
    if ch not in alpha: continue
    reverse.append(ch)

  return ''.join(reverse)