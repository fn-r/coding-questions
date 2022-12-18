def open_or_senior(data):
    output = []
    for value in data:
        if value[0] >= 55 and value[1] > 7:
            output.append("Senior")
        else:
            output.append("Open")
    return output