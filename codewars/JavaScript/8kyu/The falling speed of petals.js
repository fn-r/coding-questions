function sakuraFall(v) {
  // distance / time = velocity
  // distance = velocity * time
  // distance = 80 * 5
  // distance = 400
  // time = distance / velocity
  
  if (typeof v !== 'number' || v <= 0) return 0
  return 400 / v
}