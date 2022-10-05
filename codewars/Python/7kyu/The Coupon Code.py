import datetime

def convert_date(date):
    mnths = {
        'January': 1,
        'February': 2,
        'March': 3,
        'April': 4,
        'May': 5,
        'June': 6,
        'July': 7,
        'August': 8,
        'September': 9,
        'October': 10,
        'November': 11,
        'December': 12,
    }

    date = date.split()
    for i in range(len(date)):
        if ',' in date[i]: date[i] = date[i].replace(',','')
        if date[i] in mnths: date[i] = mnths[date[i]]
        date[i] = int(date[i])
    
    date = datetime.date(date[2], date[0], date[1])
    return date

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code != correct_code or type(entered_code) != type(correct_code):
        return False
    
    current_date = convert_date(current_date)
    expiration_date = convert_date(expiration_date)
    if current_date > expiration_date:
        return False
    
    return True