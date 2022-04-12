var findAverage = function (nums) {
  return nums.reduce((sum, n) => sum += n, 0) / nums.length
}