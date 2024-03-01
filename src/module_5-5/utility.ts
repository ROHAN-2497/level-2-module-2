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
