// assertive
let emni: any;
emni = "next level devloper";
(emni as string).length;
<number>emni.toString;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `the converted results is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = <string>kgToGram("1000");

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
