String.prototype.digit = function() {
  if (this.length === 0) return false
  return ('0123456789'.includes(this) && +this <= 9 && +this >= 0);
};