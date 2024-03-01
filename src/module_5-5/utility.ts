{
  /* PICK */
}

interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Contact = Pick<Person, "contactNo" | "email">;

{
  /* OMIT */
}

type Person2 = {
  name: string;
  age: 32;
  address: string;
};

type User = Omit<Person2, "name" | "address">;

// Partial And Required

// To make all the Properties be optional type
type Optional = Partial<Person2>;
type Requireds = Required<Person2>;

//  ReadOnly and  using Index Signature

type users = {
  [key: string]: string;
};
const collection: Readonly<users> = {
  name: "rohan",
  age: "22",
  rollNumber: "36",
};

const IndexSignature: users = {
  address: "wewe",
};
// collection.age = 32;
