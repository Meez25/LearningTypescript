type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Employee & Admin;

const e1: ElevatedEmployee = {
  name: "Yann",
  privileges: ['create-server'],
  startDate: new Date(),
}

// On peut remplacer les type par des interfaces, et dans ce cas, utiliser "interface ElevatedEmployee extends Admin, Employee {}"


type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addibou(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Here is my name : " + emp.name);
  if ('privileges' in emp) {
    console.log("Here is my privilege : " + emp.privileges);
  }
}

let admin1: Admin = {
  privileges: ["kick ass"],
  name: "DeadPool",
}
let employee1: Employee = {
  name: "Boring Employee",
  startDate: new Date(),
}

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

type Vehicle = Car | Truck;

function useVehicle(a: Vehicle) {
  if (a instanceof Car) {
    a.car();
  }
  if (a instanceof Truck) {
    a.drive();
  }
};

const car = new Car();
const truck = new Truck();

useVehicle(car);
useVehicle(truck);


interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Horse | Bird;
function getSpeed(a: Animal) {
  switch (a.type) {
    case "bird":
      return a.flyingSpeed;
    case "horse":
      return a.runningSpeed;
  }
}

let a: Animal = { type: "bird", flyingSpeed: 60 }

console.log(getSpeed(a));
console.log(getSpeed({ type: "horse", runningSpeed: 176 }));
