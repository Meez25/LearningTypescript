class Department {
  private employees: string[] = []

  constructor(private readonly id: number, public name: string) {
  }

  describe() {
    console.log(`This department named ${this.name} has an ID of ${this.id}`);
  }

  addEmployee(e: string){
    this.employees.push(e);
  }

  printEmployeeInformation(){
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department(1, "Accounting");

accounting.describe();
accounting.addEmployee("Yann");
accounting.addEmployee("Hélène");
accounting.printEmployeeInformation();



































// class Animal {
//   type: string

//   constructor(t: string) {
//     this.type = t;
//   }
// }

// const animal = new Animal("Kangourou");
// console.log(animal);

