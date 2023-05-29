"use strict";
let addA;
addA = (n1, n2) => {
    return n1 + n2;
};
console.log(typeof add);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    giveAge() {
        console.log("J'ai " + this.age + " ans.");
    }
}
let user1;
user1 = new Person("Hélène", 31);
console.log(user1);
user1.name = "salut";
let user3 = new Person("Maël", 1.5);
user1 = {
    name: "Maël", age: 1.5, greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
    giveAge() {
        console.log("J'ai " + this.age + " ans.");
    },
};
user1.greet("Je t'aime");
user1.giveAge();
class Abstract {
    constructor() { }
    concret() {
        console.log("Coucou");
    }
}
class Concrete extends Abstract {
    constructor() {
        super();
    }
    abtrait() {
        console.log("Implémentation forcée");
    }
    concret() {
        console.log("Coucou de ma classe concrete");
    }
}
const a1 = new Concrete();
a1.concret();
a1.abtrait();
