class God{
/**
 * @returns Human[]
 */
  static create(){
    this.adam = new Man("Adam")
    this.eve = new Woman("Eve")
    return [this.adam, this.eve]
  }
}
// code
class Human {
  constructor(name) {
    name
  }
}

class Man extends Human {}

class Woman extends Human {}