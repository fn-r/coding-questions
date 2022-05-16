function cookie(x){
  return `Who ate the last cookie? It was ${(typeof(x) === typeof('')) ? 'Zach': (typeof(x) === typeof(0)) ? 'Monica' : 'the dog'}!`
}