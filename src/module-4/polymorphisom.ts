class Person {
  takeNap(): void {
    console.log("i am sleeping 8 hours per day");
  }
}

class Student extends Person {
  takeNap(): void {
    console.log(`i am sleeping 10 hours per day`);
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log(`i am sleeping 5 hours`);
  }
}

function GetNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

GetNap(person1);
GetNap(person2);
GetNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ReactAngle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}
getAreaOfShape(new circle(10));
getAreaOfShape(new ReactAngle(20, 10));
