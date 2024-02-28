class Animal {
  // TYPE DECLARE
  //   public name: string;
  //   public species: string;
  // public sound: string;

  //   MAKE CONNSTRUCTOR
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {
    // (this.name = name), (this.species = species), (this.sound = sound);
  }
  //   MAKE METHOD
  public makeSound() {
    console.log(`the ${this.name} says ${this.sound}`); // 'GARMAN SHEPHARD SAYS GHEW GHEW'
  }
}
// INSTANCE MAKE
const dog = new Animal("GARMAN SHEPHARD", "dog", "ghew ghew");
const cat = new Animal("parsian", "cat", "mew mew");
dog.makeSound();
cat.makeSound();
