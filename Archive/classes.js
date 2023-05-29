"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.PI = 3.14;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(e) {
        this.employees.push(e);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.salut = "heu";
        this.admins = admins;
    }
    describe() {
        console.log(`This department named ${this.name} has an ID of ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    describe() {
        console.log("Je décris la classe accounting");
    }
    get mostRecentReport() {
        if (this.lastReport) {
            this.PI = 61;
            console.log(this.PI);
            return this.lastReport;
        }
        else {
            throw new Error("Nouvelle erreur !");
        }
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.salut = "heu";
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(e) {
        this.employees.push(e);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReport() {
        console.log(this.reports);
    }
}
// console.log(Department.createEmployee("Jean"));
// const IT = new ITDepartment(2, ["Yann"])
// const acc = new AccountingDepartment(1, ["Yann", "Hélène"]);
// console.log(acc.mostRecentReport);
// acc.mostRecentReport = "Maël";
// console.log(acc.mostRecentReport);
// console.log(acc.printReport());
// acc.addReport("José");
// IT.describe()
// Singleton
//
// Steps :
// 1. Make the constructor private
// 2. Create a static method "getInstance" that checks if the private static property is of type "Singleton", if so, return this. the static property
// of else create a new instance with the private constructor.
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance() {
        if (Singleton.instance) {
            return this.instance;
        }
        else {
            return new Singleton("Je suis unique !");
        }
    }
}
const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton);
console.log(singleton2);
// Create another Singleton
class Store {
    constructor(string) {
        this.string = string;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            return new Store("Unique !");
        }
    }
    describe() {
        console.log(this.string);
    }
}
const o1 = Store.getInstance().describe();
const o2 = Store.getInstance().describe();
console.log(o1 === o2);
// class Animal {
//   type: string
//   constructor(t: string) {
//     this.type = t;
//   }
// }
// const animal = new Animal("Kangourou");
// console.log(animal);
