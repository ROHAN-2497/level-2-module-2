// INTERFACE

// interface IVehcle {
//   name: string;
//   model: string;
// }
// const vehcle: IVehcle = {
//   name: "car",
//   model: "200rk",
// };

interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  moveEngine(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}

  startEngine(): void {
    console.log("this is start engine");
  }
  stopEngine(): void {
    console.log("this is stop engine");
  }
  moveEngine(): void {
    console.log("this is move engine");
  }
  test() {
    console.log("I am testing for purpose");
  }
}
const vehicle1 = new Vehicle("Range Rover", "black", 2024);

// ABSTRACT CLASS

abstract class NewVehicle {
  abstract start(): void;
  abstract stop(): void;
  move() {
    console.log("this is move part");
  }
  test() {
    console.log("this is test");
  }
}

class Vehicles extends NewVehicle {
  start(): void {
    console.log("this is start");
  }
  stop(): void {
    console.log("this is start");
  }
}
