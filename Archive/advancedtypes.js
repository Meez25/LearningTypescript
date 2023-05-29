"use strict";
const e1 = {
    name: "Yann",
    privileges: ['create-server'],
    startDate: new Date(),
};
function printEmployeeInformation(emp) {
    console.log("Here is my name : " + emp.name);
    if ('privileges' in emp) {
        console.log("Here is my privilege : " + emp.privileges);
    }
}
let admin1 = {
    privileges: ["kick ass"],
    name: "DeadPool",
};
let employee1 = {
    name: "Boring Employee",
    startDate: new Date(),
};
printEmployeeInformation(admin1);
printEmployeeInformation(employee1);
class Truck {
    drive() {
        console.log("I'm driving a truck");
    }
}
class Car {
    car() {
        console.log("I'm driving a car");
    }
}
function useVehicle(a) {
    if (a instanceof Car) {
        a.car();
    }
    if (a instanceof Truck) {
        a.drive();
    }
}
;
const car = new Car();
const truck = new Truck();
useVehicle(car);
useVehicle(truck);
function getSpeed(a) {
    switch (a.type) {
        case "bird":
            return a.flyingSpeed;
        case "horse":
            return a.runningSpeed;
    }
}
let a = { type: "bird", flyingSpeed: 60 };
console.log(getSpeed(a));
console.log(getSpeed({ type: "horse", runningSpeed: 176 }));
// Type Casting
const p = document.querySelector("p");
const pAsId = document.getElementById("message-output");
pAsId.textContent = "salut";
pAsId.textContent = "jack";
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
// Singleton
class S {
    constructor() { }
    static getInstance() {
        if (S.instance) {
            return S.instance;
        }
        else {
            this.instance = new S();
            return this.instance;
        }
    }
}
let j = S.getInstance();
let b = S.getInstance();
console.log(j === b);
function addCombinable(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
var z = addCombinable("salut", "ca va ?");
var y = addCombinable(12, 12);
// Here I cannot have completion for string method
//
// After I added the fonction overload (function addCombinable(a: string, b: string): string), I have access
// to auto-completion
console.log(typeof z);
// Optional chaining :
// Variable?variable?variable?
// Nullish coalescing
let hcjizs = null;
var output = hcjizs || "DEFAULT";
console.log(output);
hcjizs = "";
var output = hcjizs !== null && hcjizs !== void 0 ? hcjizs : "DEFAULT"; // check if the value is undefined or null
console.log(output);
