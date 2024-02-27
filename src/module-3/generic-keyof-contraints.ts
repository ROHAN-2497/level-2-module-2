type PersonType = {
  name: string;
  age: number;
  address: string;
};
type NewType = "name" | "age" | "address"; // MANUALLY KORSI
type TypeKeyOf = keyof PersonType;

const a: NewType = "age";
const b: TypeKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Mr. X", age: 100 }, "name");
