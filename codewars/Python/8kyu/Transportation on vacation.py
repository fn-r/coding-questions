def rental_car_cost(d):
    def total():
        return (d * car) - discount
    
    car = 40
    discount = 0
    
    if d >= 7:
        discount = 50
        return total()
    if d >= 3:
        discount = 20
        return total()
    return total()