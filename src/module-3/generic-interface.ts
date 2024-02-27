// GENERIC INTERFACE

interface CrushInterface<T, W = null> {
  name: string;
  husband: T;
  wife?: W;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush5: CrushInterface<PersonInterface, PersonInterface> = {
  name: "kate",
  husband: {
    name: "petter",
    age: 40,
  },
  wife: {
    name: "jacky",
    age: 30,
  },
};

const crush: CrushInterface<Boolean, string> = {
  name: "kate windson",
  husband: true,
  wife: "chhokina",
};
const crush1: CrushInterface<string, null> = {
  name: "kate windson",
  husband: "petter parker",
};

const cursh3: CrushInterface<object, boolean> = {
  name: "kate windson",
  husband: {
    name: "parker",
  },
  wife: true,
};

interface objectInterface {
  name: boolean;
  age: number;
}

const crush4: CrushInterface<objectInterface, undefined> = {
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
