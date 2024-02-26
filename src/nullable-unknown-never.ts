const searchName = (value: string | null) => {
  if (value === null) {
    // console.log("there is nothing search");
  } else {
    // console.log("there is search");
  }
};

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const converted = (speed * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" "); // [10, 'kmh^-1']
    const converted = (parseFloat(value) * 1000) / 3600;
    console.log(`my speed is ${converted}`);
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^ -1");
