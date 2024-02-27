// MOCKING

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fatched";
    if (data) {
      resolve(data);
    } else {
      reject("Data is not Fatched");
    }
  });
};
const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
