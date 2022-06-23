const cannonsReady = (gunners) => {
  for (gunner in gunners) {
    if(gunners[gunner] === 'nay') return 'Shiver me timbers!'
  }
  return 'Fire!'
}