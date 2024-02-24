// spread oparator
const myFriends = ["chandeler", "jopye", "richa"];
const newFriends = ["michel", "pheobe", "monica"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter

const greetFriend = (...friendss: string[]): void =>
  friendss.forEach((frnd) => {
    console.log(`Hi ${frnd}`);
  });
greetFriend("kashem", "hashem", "gashem", "bangla bhai", "english bhai", "dj bhai");
