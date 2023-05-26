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
  name : "Boring Employee",
  startDate : new Date(),
}

printEmployeeInformation(admin1);
printEmployeeInformation(employee1);

