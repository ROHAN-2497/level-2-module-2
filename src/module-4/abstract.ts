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

// ABSTRACT CLASS
