"use strict";
// Generics
const array = [];
const sameArray = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hey");
    }, 2000);
});
promise.then(data => { console.log(data); }, error => { throw error; });
// Create a generic function
function merge(i, o) {
    return Object.assign(i, o);
}
const merged = merge({ age: 65 }, { name: "Hélène" });
console.log(merged);
function getLengthAsText(element) {
    let description = "I'm empty";
    if (element.length === 1) {
        description = "I have 1 element";
    }
    if (element.length > 1) {
        description = `I have ${element.length} elements`;
    }
    return [element, description];
}
console.log(getLengthAsText("Here"));
console.log(getLengthAsText(["salut", "comment", "ca", "va ?"]));
// The keyof constraint allow us to have a constraing on an object property
function extractAndConvert(object, key) {
    return "Value : " + object[key];
}
console.log(extractAndConvert({ name: "Yann" }, "name"));
console.log(extractAndConvert({ name: "Jean" }, "name"));
// Generic classes
class DataStorage {
    constructor() {
        this.storage = [];
    }
    addItem(item) {
        this.storage.push(item);
    }
    removeItem(item) {
        if (this.storage.indexOf(item) === -1) {
            return;
        }
        this.storage.splice(this.storage.indexOf(item));
    }
    getItems() {
        return [...this.storage];
    }
}
const stringStorage = new DataStorage();
const numberStorage = new DataStorage();
const numberAndStringStorage = new DataStorage();
stringStorage.addItem("salut");
console.log(stringStorage.getItems());
numberAndStringStorage.addItem("");
numberAndStringStorage.addItem(7661);
console.log(numberAndStringStorage.getItems());
function createCourseGoal(name, date, description) {
    let obj = {};
    obj.name = name;
    obj.date = date;
    obj.description = description;
    return obj;
}
console.log(createCourseGoal("Japonais", new Date, "Venez apprendre le japonais !"));
const nameaa = ["Anna", "Emilie"];
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.boris);
