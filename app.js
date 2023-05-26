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
