// class Parent {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makSleep(hours: number): string {
//     return `this ${this.name} will sleep for ${hours}`;
//   }
// }

// // class 1

// class Student extends Parent {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }
// const student1 = new Student("rohan", 22, "ishurdi");

// // class 2

// class Teacher extends Parent {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   ClassName(numOfClass: number): string {
//     return `this ${this.name} will take ${numOfClass}`;
//   }
// }
// const teacher1 = new Teacher("Mr. Y", 54, "ishurdi", "professor");
