// Decotators

function Logger(constructor: Function){
  console.log(constructor);
}

@Logger
class Person {
  name = "Yann"

  constructor(){
    console.log("Creating object...");
  }
}

const yann = new Person();
console.log(yann);

// As a decorator factory
// It allows to pass parameters to the logger factory

function LoggerWithParam(logString: string){
  return function(constructor: Function){
    console.log(constructor);
    console.log(logString);
  }
}


// fonction that replaces the decorator
function IReplaceYou(template: string, hookID: string){
  console.log("I replace you !")
  return function<T extends { new (...args: any[]) : {name: string}}>(originalConstructor: T){
    return class extends originalConstructor{
      constructor(..._: any[]){
        super();
        console.log("rendering template")
        const hookEl = document.getElementById(hookID)
        if (hookEl){
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

function IReplaceYouEventually(template: string, hookID: string){
  console.log("I replace you eventually")
  return function(constructor: any){
    console.log("Inside the returned function")
    return class extends constructor {
    }
  }
}


// Write on the dom with decorator

function writeOnDom(template: string, hookID: string){
  return function(constructor: any){
    const p = new constructor()
    const hookEl = document.getElementById(hookID);
    if (hookEl){
      hookEl.innerHTML = p.name
    }
  }
}

@IReplaceYouEventually("<h1>Salut la compagnie !</h1>", "app")
@IReplaceYou("<h1>Sakut la compagnie !</h1>", "app")
// @writeOnDom("<h1>Salut la compagnie !</h1>", "app")
//@LoggerWithParam("Logging hard !")
class PersonWithLoggerFactory {
  name = "Yann"

  constructor(){
    console.log("Creating object...");
  }
}

const a = new PersonWithLoggerFactory();


// property decorator
// the property decorator receives the target

function Log(target: any, variable: string){
  console.log(target, variable); 
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
  console.log("Accessor decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor){
  console.log("Method decorator")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string, position: number){
  console.log("Parameter")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, price: number){
    this.title = title;
    this._price = price;
  }

  @Log2
  set price(val: number){
    if (val > 0){
      this._price = val;
    }
  }

  get price(){
    return this._price;
  }

  @Log3
  getTax(@Log4 tax: number){
    return this._price * 1.1
  }
}

