// nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing search");
  } else {
    console.log("there is search");
  }
};

searchName(null);

// unknown Type

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const converted = (speed * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" "); // [10, 'kmh^-1']
    const converted = (parseFloat(value) * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  } else {
    console.log("there is worong type");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^ -1");
getMyCarSpeed(true);

// never type
function throwError(message: string) {
  throw new Error(message);
}

throwError("bhai error khaichhi kandi dimu");
