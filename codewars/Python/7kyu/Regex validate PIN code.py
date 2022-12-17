def validate_pin(pin):
    for p in pin:
        if p not in '1234567890':
            return False 
    return len(pin) == 4 or len(pin) == 6