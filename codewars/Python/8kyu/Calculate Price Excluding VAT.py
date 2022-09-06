# (1 * x) + (0.15 * x) = price
# 1.15 * x  = price
# x = price / 1.15

def excluding_vat_price(price):
    try:
        return round(price / 1.15, 2)
    except TypeError:
        return -1