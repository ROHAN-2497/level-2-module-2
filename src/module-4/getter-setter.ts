class BankAccount {
  id: number;
  name: string;
  balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  GetAccount() {
    console.log(`this is my Account ${BankAccount}`);
  }
  AddDeposite(money: number) {
    this.balance = this.balance + money;
  }
}

const myAccount = new BankAccount(436, "rohan", 3000);
myAccount.AddDeposite(300);
myAccount.GetAccount();
