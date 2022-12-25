def number(bus_stops):
    last = 0
    for [on, off] in bus_stops:
        last += on - off
    return last