type MendatoryType = { name: string; age: number; salary: number };
interface MendatoryInterface {
  name: string;
  age: number;
  salary: number;
}
const addMeInMyCrushMind = <T extends MendatoryInterface>(myInfo: T) => {
  const myCrush = "kite winslet";
  const newData = { ...myInfo, myCrush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
};
const myInfo = {
  name: "rohan",
  age: 22,
  salary: 100000,
  other2: false,
};

const result9 = addMeInMyCrushMind<MyInfoType>(myInfo);
