"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`This department named ${this.name} has an ID of ${this.id}`);
    }
    addEmployee(e) {
        this.employees.push(e);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department(1, "Accounting");
accounting.describe();
accounting.addEmployee("Yann");
accounting.addEmployee("Hélène");
accounting.printEmployeeInformation();
// class Animal {
//   type: string
//   constructor(t: string) {
//     this.type = t;
//   }
// }
// const animal = new Animal("Kangourou");
// console.log(animal);
