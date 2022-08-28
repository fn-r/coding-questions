const number = function(busStops){
  const afterEachStop = busStops.map(([on,off]) => on - off)
  const finalStop = afterEachStop.reduce((sum, people) => sum += people)
  return finalStop
}