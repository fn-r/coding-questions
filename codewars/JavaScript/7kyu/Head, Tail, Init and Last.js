const head = arr => arr[0]
const tail = arr => {
  const newArr = arr.slice(1)
  return newArr
}
const init = arr => {
  const newArr = arr.slice(0, -1)
  return newArr
}
const last = arr => arr.pop()