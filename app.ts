class Department {
  protected employees: string[] = []

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

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]){
    super(id, "IT");
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]){
    super(id, "Accounting");
    this.reports = reports
  }

  addEmployee(e: string): void {
    this.employees.push(e); 
  }

  addReport(report: string) {
    this.reports.push(report);
  }

  printReport(){
    console.log(this.reports);
  }

}

const accounting = new Department(1, "Accounting");
const IT = new ITDepartment(2, ["Yann"])

const acc = new AccountingDepartment(1, ["Yann", "Hélène"]);
acc.addReport("José");
acc.printReport();

IT.describe()

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

