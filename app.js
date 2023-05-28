"use strict";
// Decotators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(constructor) {
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Yann";
        console.log("Creating object...");
    }
};
Person = __decorate([
    Logger
], Person);
const yann = new Person();
console.log(yann);
// As a decorator factory
// It allows to pass parameters to the logger factory
function LoggerWithParam(logString) {
    return function (constructor) {
        console.log(constructor);
        console.log(logString);
    };
}
// Write on the dom with decorator
function writeOnDom(template, hookID) {
    return function (constructor) {
        const p = new constructor();
        const hookEl = document.getElementById(hookID);
        if (hookEl) {
            hookEl.innerHTML = p.name;
        }
    };
}
let PersonWithLoggerFactory = 
//@LoggerWithParam("Logging hard !")
class PersonWithLoggerFactory {
    constructor() {
        this.name = "Yann";
        console.log("Creating object...");
    }
};
PersonWithLoggerFactory = __decorate([
    writeOnDom("<h1>Salut la compagnie !</h1>", "app")
    //@LoggerWithParam("Logging hard !")
], PersonWithLoggerFactory);
// property decorator
// the property decorator receives the target
function Log(target, variable) {
    console.log(target, variable);
}
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter");
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
    }
    get price() {
        return this._price;
    }
    getTax(tax) {
        return this._price * 1.1;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getTax", null);
