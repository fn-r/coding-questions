function rainAmount(mm){
  const _amount_needed = 40
  return (mm >= _amount_needed) ? 'Your plant has had more than enough water for today!' :
  `You need to give your plant ${_amount_needed - mm}mm of water`
}