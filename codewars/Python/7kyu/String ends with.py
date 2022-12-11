def solution(string, ending):
    if ending == '':
        return True
    return string[(-1 * len(ending)):] == ending