{
  /* PICK */
}

interface Person {
  name: string;
  email: string;
  contactNo: string;
}

type Contact = Pick<Person, "name">;
