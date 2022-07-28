function twoHighest(arr) {
  if (arr.length < 1) return []
  
  const setArr = new Set(arr.sort((a,b) => b-a))
  return [...setArr].slice(0, 2)
}