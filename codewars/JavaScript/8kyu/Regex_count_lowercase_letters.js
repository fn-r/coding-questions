function lowercaseCount(str){
    return str.split("").filter(s => "abcdefghijklmnopqrstuvwxyz".includes(s)).length
}