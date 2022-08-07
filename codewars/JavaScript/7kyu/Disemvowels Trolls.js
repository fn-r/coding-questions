function disemvowel(str) {
    return str.split('').filter(s => ['a', 'e', 'i', 'o', 'u'].indexOf(s.toLowerCase()) === -1).join('');
}