def next_item(xs, item):
    xs = list(xs)
    try:
        item_index = xs.index(item)
        return xs[item_index + 1]

    except (ValueError, IndexError):
        return None