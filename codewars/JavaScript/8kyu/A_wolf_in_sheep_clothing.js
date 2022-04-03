function warnTheSheep(queue) {
    queue = queue.reverse()
    return (queue[0] === "wolf") ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
}