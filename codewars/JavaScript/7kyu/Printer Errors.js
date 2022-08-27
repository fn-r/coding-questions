function printerError(s) {
  const err_rate = s.split('').filter(e => e > 'm').length
  return `${err_rate}/${s.length}`
}