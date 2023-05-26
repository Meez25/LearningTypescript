"use strict";
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
let user2 = new Person("Hélène", 31);
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
user2.greet("Je t'aime");
user1.giveAge();
console.log(user1, user2);
