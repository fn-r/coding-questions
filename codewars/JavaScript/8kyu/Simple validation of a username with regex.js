validateUsr = username => {
  const nums = '0123456789'
  const chars = 'abcdefghijklmnopqrstuvwxyz_'.concat(nums)
  
  if(username.length >= 4 && username.length <= 16) {
    return username.split('').filter(c => !chars.includes(c)).length === 0
  }
  return false
}