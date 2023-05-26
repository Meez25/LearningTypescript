abstract class Department {
  protected employees: string[] = []
  protected PI = 3.14
  abstract salut: string;

  constructor(protected readonly id: number, public name: string) {
  }

  abstract describe(): void

  static createEmployee (name: string) {
    return {name: name}
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
  salut: string = "heu";
  constructor(id: number, public admins: string[]){
    super(id, "IT");
    this.admins = admins
  }

  describe(): void {
    console.log(`This department named ${this.name} has an ID of ${this.id}`);
  }

}

class AccountingDepartment extends Department {
  salut: string = "heu";
  private lastReport: string;

  describe(): void {
    console.log("Je décris la classe accounting");
  }

  get mostRecentReport() {
    if (this.lastReport){
      this.PI = 61
      console.log(this.PI);
      return this.lastReport;
    } else {
      throw new Error("Nouvelle erreur !");
    }
  }

  set mostRecentReport(value: string) {
    this.addReport(value)
  }

  constructor(id: number, private reports: string[]){
    super(id, "Accounting");
    this.reports = reports
    this.lastReport = reports[0]
  }

  addEmployee(e: string): void {
    this.employees.push(e); 
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report
  }

  printReport(){
    console.log(this.reports);
  }

}

// console.log(Department.createEmployee("Jean"));

// const IT = new ITDepartment(2, ["Yann"])

// const acc = new AccountingDepartment(1, ["Yann", "Hélène"]);
// console.log(acc.mostRecentReport);
// acc.mostRecentReport = "Maël";
// console.log(acc.mostRecentReport);
// console.log(acc.printReport());
// acc.addReport("José");

// IT.describe()


// Singleton
//
// Steps :
// 1. Make the constructor private
// 2. Create a static method "getInstance" that checks if the static property is of type "Singleton", if so, return this. the static property
// of else create a new instance with the private constructor.
  

class Singleton {
  private static instance: Singleton;
  private constructor(public data: string){}

  static getInstance(){
    if (Singleton.instance){
      return this.instance
    } else {
      return new Singleton("Je suis unique !");
    }
  }
}

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton);
console.log(singleton2);




























// class Animal {
//   type: string

//   constructor(t: string) {
//     this.type = t;
//   }
// }

// const animal = new Animal("Kangourou");
// console.log(animal);

