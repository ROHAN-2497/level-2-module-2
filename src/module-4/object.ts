class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    (this.name = name), (this.species = species), (this.sound = sound);
  }
  makeSound() {
    console.log(`the ${this.name} says ${this.sound}`); // 'GARMAN SHEPHARD SAYS GHEW GHEW'
  }
}

const dog = new Animal("GARMAN SHEPHARD", "dog", "ghew ghew");
const cat = new Animal("parsian", "cat", "mew mew");
dog.makeSound();
cat.makeSound();
