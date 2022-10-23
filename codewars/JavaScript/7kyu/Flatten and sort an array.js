// OTHER SOLUTIONS
// [].concat(...array).sort((a,b) => a - b)

"use strict";

function flattenAndSort(array) {
  let flat = []
  
  for (let a of array) {
    flat = flat.concat(a)
  }
  flat.sort((a,b) => a - b)
  
  return flat
}