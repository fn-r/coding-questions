def basic_op(operator, value1, value2):
    ops = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
    }
    return ops[operator]