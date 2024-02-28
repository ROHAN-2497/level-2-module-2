class MyBankAccout {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  getBalance() {
    console.log(`my current balance is ${this.balance}`);
  }
  addDeposite(money: number) {
    this.balance = this.balance + money;
  }
}

const Account = new MyBankAccout(444, "parsian", 4000);
console.log(Account);
Account.addDeposite(20);
Account.getBalance();
