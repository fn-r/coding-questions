class Ghost {
  constructor() {
    const random = Math.random()
    if(random < 0.25) {
      this.color = "white"
    } else if (random < 0.5) {
      this.color = "yellow"
    } else if (random < 0.75) {
      this.color = "purple"
    } else {
      this.color = "red"
    }
  }
}