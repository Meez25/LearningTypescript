interface Greetable {
  name: string;
  greet(phrase: string): void;
}

interface Aged {
  age: number;
  giveAge(): void;
}

class Person implements Greetable, Aged {
  constructor(public name: string, public age: number) { }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name)
  }
  giveAge(): void {
    console.log("J'ai " + this.age + " ans.")
  }
}

let user1: Person;
let user2 = new Person("Hélène", 31);
let user3 = new Person("Maël", 1.5);

user1 = {
  name: "Maël", age: 1.5, greet(phrase) {
    console.log(phrase + ' ' + this.name)
  },
  giveAge() {
    console.log("J'ai " + this.age + " ans."
    )
  },
}

user1.greet("Je t'aime");
user2.greet("Je t'aime");
user1.giveAge();

console.log(user1, user2);
