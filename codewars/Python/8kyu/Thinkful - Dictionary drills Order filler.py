def fillable(stock, merch, n):
    try:
        return stock[merch] >= n
    except KeyError:
        return False