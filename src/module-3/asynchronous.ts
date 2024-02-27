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

interface DataInterface {
  data: string;
}

const makePromiseObject = (): Promise<DataInterface> => {
  return new Promise<DataInterface>((resolve, reject) => {
    const data: DataInterface = { data: "Data is fatched" };
    if (data) {
      resolve(data);
    } else {
      reject("Data is not Fatched");
    }
  });
};

const getPromiseDataObject = async (): Promise<object> => {
  const data = await makePromiseObject();
  return data;
};

const makePromiseBoolean = (): Promise<Boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("data is not Fatched");
    }
  });
};

const getPromiseDataBoolean = async () => {
  const data = await makePromiseBoolean();
  return data;
};
