"use strict";
const e1 = {
    name: "Yann",
    privileges: ['create-server'],
    startDate: new Date(),
};
function addibou(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
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
