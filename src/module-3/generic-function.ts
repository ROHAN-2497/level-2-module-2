// GENERIC FUNCTION

const creatArray = (param: string): string[] => {
  return [param];
};

const creatArray1 = <T>(param: T): T[] => {
  return [param];
};

const rusult = creatArray("bangladesh");
const rusult2 = creatArray1<string>("number");
const rusult3 = creatArray1<boolean>(true);
type Name = { name: string };
const rusult4 = creatArray1<Name>({ name: "roh" });
