// spread oparator
const myFriends = ["chandeler", "jopye", "richa"];
const newFriends = ["michel", "pheobe", "monica"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter

const greetFriends = (
  friend1: string,
  friend2: string,
  friend3: string
): void => console.log(`hi ${friend1}\n hi ${friend2}\n hi${friend3}`);
greetFriends("kashem", "hashem", "gashem");
