function index(array, n) {
    if (array.length - 1 < n) return -1
    return Math.pow(array[n], n)
}