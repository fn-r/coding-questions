function maskify(cc) {
  const ccArr = cc.split('')
  if(ccArr.length < 4) return cc
  
  const mask = ccArr.slice(0, -4).map(c => '#')
  return mask.join('') + ccArr.splice(-4).join('')
}
