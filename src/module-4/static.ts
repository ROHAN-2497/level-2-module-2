class Counter {
  static counter: number = 1;
  //   constructor(counter: number) {
  //     this.counter = counter;
  //   }

  static Increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  static Discrement() {
    return (Counter.counter = Counter.counter - 1);
  }
}

// const instanse1 = new Counter();
console.log(Counter.Increment());
console.log(Counter.Increment());
console.log(Counter.Increment());
