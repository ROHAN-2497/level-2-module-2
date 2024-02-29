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

class Vehicle {}

// ABSTRACT CLASS
