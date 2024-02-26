const searchName = (value: string | null) => {
  if (value === null) {
    console.log("there is nothing search");
  } else {
    console.log("there is search");
  }
};

searchName(null)
