// GENERIC FUNCTION

const creatArray = (param: string): string[] => {
  return [param];
};

const creatArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function creatArray6<X, Y>(params: X, param: Y): [X, Y] {
  return [params, param];
}

const rusult = creatArray("bangladesh");
const rusult2 = creatArray1<string, Array<string>>("number", [
  "i love my country",
]);
const rusult3 = creatArray1<boolean, string>(true, "nowshin");
type Name = { name: string };
const rusult4 = creatArray1<Name, number>({ name: "roh" }, 23);

// SPREAD OPERATOR

// const newData = { ...myInfo, myCrush };

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const myCrush = "kite winslet";
  const newData = { ...myInfo, myCrush };
  return newData;
};

const myInfo = {
  name: "rohan",
  age: 22,
  salary: 100000,
};

const result9 = addMeInMyCrushMind(myInfo);
