function whoIsPaying(name){
  return (name.length > 2) ? [name, name.split('').slice(0,2).join('')] : [name]
}