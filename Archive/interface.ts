// type AddFn = (a: number, b: number) => number;
interface AddFn { (a: number, b: number): number;}

type fonction = (a:number, b:number) => number;
interface jjj { (a: number, b: number) : number; }

let addA: AddFn;

addA = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(typeof add);

interface Greetable {
  readonly name?: string;
  greet(phrase: string): void;
}

interface Aged {
  age: number;
  saperlipopette?: number
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
user1 = new Person("Hélène", 31);
console.log(user1)
user1.name = "salut";
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
user1.giveAge();


abstract class Abstract {
  constructor(){}
  abstract abtrait(): void
  
  concret (){
    console.log("Coucou")
  }
}

class Concrete extends Abstract {
  constructor(){
  super();
  }
  abtrait() {
    console.log("Implémentation forcée");
  }

  concret(): void {
    console.log("Coucou de ma classe concrete");
  }
}

const a1 = new Concrete();
a1.concret()
a1.abtrait()

