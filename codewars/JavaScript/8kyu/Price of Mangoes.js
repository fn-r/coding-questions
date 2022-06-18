function mango(quantity, price){
  const free = Math.floor(quantity / 3)
  return (quantity - free) * price
}