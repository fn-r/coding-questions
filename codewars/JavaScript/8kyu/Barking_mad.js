function Dog (breed) {
  this.breed = breed;
}

const snoopy = new Dog("Beagle");
snoopy.bark = () => "Woof"

const scoobydoo = new Dog("Great Dane");
scoobydoo.bark = () => "Woof"