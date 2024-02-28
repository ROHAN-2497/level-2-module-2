const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrig = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrig);

type Volume = {
  height: number;
  width: string;
  depth: number;
};

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 81,
};

area1;

type AreaString = {
  height: string;
  width: string;
};

type ReadOnly = {
  readonly height: number;
  readonly width: number;
};

const reactAngularArea: ReadOnly = {
  height: 10,
  width: 12,
};

reactAngularArea;

// type A1 = AreaNumber["height"]; // LOOK UP TYPES
// type b1 = keyof AreaNumber;
