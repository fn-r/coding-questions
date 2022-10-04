function noOdds( values ){
    values = values.filter(n => n % 2 === 0 && n !== 1)
    return values
  }