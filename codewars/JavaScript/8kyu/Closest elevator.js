function elevator(left, right, call){
  if (Math.abs(call - left) < Math.abs(call - right)) return 'left'
  return 'right'
}