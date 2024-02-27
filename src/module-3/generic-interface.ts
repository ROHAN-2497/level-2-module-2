// GENERIC INTERFACE

interface CrushInterface<T> {
  name: string;
  husband: T;
}
const crush: CrushInterface<Boolean> = {
  name: "kate windson",
  husband: true,
};
const crush1: CrushInterface<string> = {
  name: "kate windson",
  husband: "petter parker",
};

const cursh3: CrushInterface<object> = {
  name: "kate windson",
  husband: {
    name: "parker",
  },
};

interface objectInterface {
  name: boolean;
  age: number;
}

const crush4: CrushInterface<objectInterface> = {
  name: "kate windson",
  husband: {
    name: true,
    age: 34,
  },
};

type GenericTuple<X, Y> = [X, Y];
const realatin: GenericTuple<string, string> = ["rohan", "oishy"];

// type NameAndSalaryType = { name: string; salary: number };
interface NameAndSalaryInterface {
  name: string;
  salary: number;
}
const realationWithSalary: GenericTuple<NameAndSalaryInterface, string> = [
  {
    name: "rohan",
    salary: 1000000,
  },
  "oishy",
];
type GenericArray<T> = Array<T>;

const rollnumbers: GenericArray<number> = [1, 211, 23];
const rollnumbers2: GenericArray<string> = ["21", "32", "43"];
const rollNumber2: GenericArray<boolean> = [true, false];

type RollAndUser = { name: string; roll: number };

const userNameAndRoll: GenericArray<RollAndUser> = [
  {
    name: "Mr. X",
    roll: 1,
  },
  {
    name: "Mr. Y",
    roll: 2,
  },
];
