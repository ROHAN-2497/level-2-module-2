// keyOf gurd

type AlphaNumeric = string | number;

function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add("1", "2");
add(2, 3);

// type of IN gurd

type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an Admin User my Roll is ${user.role}`;
  } else {
    return `i am a Normal User ${user.name}`;
  }
}

const user1: NormalUserType = { name: "Mr. X" };
const user2: AdminUserType = { name: "Mr. Y", role: "admin" };

console.log(getUser(user1));
console.log(getUser(user2));

// instance of gurd

class Animals {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  making() {
    console.log("I am making Sound");
  }
}

class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  DogMakingSound() {
    console.log("Dog Making a BArking");
  }
}
class Cat extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  CatMakingSound() {
    console.log("cat making Meaw Meaw");
  }
}

function isDog(animal: Animals): animal is Dog {
  return animal instanceof Dog;
}
function isCat(animal: Animals): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animals) {
  if (isDog(animal)) {
    animal.DogMakingSound();
  } else if (isCat(animal)) {
    animal.CatMakingSound();
  } else {
    animal.making();
  }
}

const animal1 = new Dog("garman Bhai", "Dog"); // instance of Dog
const animal2 = new Cat("parsian Bhai", "Cat"); // instance of Cat
getAnimal(animal2);
