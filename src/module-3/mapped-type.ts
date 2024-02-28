const arrayOfNumbers = [1, 2, 3, 4, 5];
const arrayOfStrig = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrig);
type AreaNumber = {
  height: number;
  width: number;
};
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

type A1 = AreaNumber["height"]; // LOOK UP TYPES
type b1 = keyof AreaNumber;
