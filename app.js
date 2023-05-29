"use strict";
// Autobind decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = "This works !";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Requireda(target, name) {
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [name]: ["Required"] });
}
function PositiveNumber(target, name) {
    const className = target.constructor.name;
    registeredValidators[className] = Object.assign(Object.assign({}, registeredValidators[className]), { [name]: ["Positive"] });
}
function validate(obj) {
    const className = obj.constructor.name;
    const classValidators = registeredValidators[className];
    console.log(registeredValidators);
    if (!classValidators) {
        return true;
    }
    let isValid = true;
    for (const prop in classValidators) {
        for (const validator of classValidators[prop]) {
            switch (validator) {
                case "Required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "Positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Requireda
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleField = document.getElementById("title");
    const priceField = document.getElementById("price");
    const newCourse = new Course(titleField.value, +priceField.value);
    if (!validate(newCourse)) {
        alert("Invalid output, please try again !");
        return;
    }
    console.log(newCourse);
});
