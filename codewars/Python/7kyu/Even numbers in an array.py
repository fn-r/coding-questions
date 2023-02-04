def even_numbers(arr,n):
    even = []
    
    for num in reversed(arr):
        if len(even) == n:
            break
        
        if abs(num) % 2 == 0:
            even.append(num)
            
    return list(reversed(even))