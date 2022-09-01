function removeSmallest(numbers) {
  let newArr
  let sm = Math.min(...numbers)
  sm = numbers.indexOf(sm)
  
  newArr = [...numbers.slice(0, sm), ...numbers.slice(sm + 1)]
  return newArr
}