class MyBankAccout {
  id: number;
  name: string;
  private balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

const Account = new MyBankAccout(444, "parsian", 4000);
console.log(Account);
