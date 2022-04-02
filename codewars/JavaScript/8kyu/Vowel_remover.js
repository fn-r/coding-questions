function shortcut(string) {
    return string.split('').filter(s => {
        if (s === 'a') return ''
        if (s === 'e') return ''
        if (s === 'i') return ''
        if (s === 'o') return ''
        if (s === 'u') return ''
        return s
    }).join('')
}