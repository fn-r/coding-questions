function billboard(name, price = 30){
  return name.split('').reduce(total => total += price, 0)
} 