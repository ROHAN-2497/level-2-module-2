// ternary operator
const age: number = 22;
if (age >= 18) {
  console.log("yes");
} else {
  console.log("No");
}

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);

//  nullish coalscing operator work just null and unndifind value

const isAuthenticatingUser = "";
const userName = isAuthenticatingUser ?? "guest";
const userName2 = isAuthenticatingUser ? isAuthenticatingUser : "guest";
console.log({ userName }, { userName2 });
