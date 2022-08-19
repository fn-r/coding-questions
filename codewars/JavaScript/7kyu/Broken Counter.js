function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  return this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  return this.value = 0;
};