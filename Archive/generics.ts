// Generics

const array: Array<string> = [];
const sameArray: string[] = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hey");
  }, 2000);
});

promise.then(data => {console.log(data)}, error => {throw error});

// Create a generic function
  
function merge<T extends object, U>(i: T, o: U){
  return Object.assign(i, o);
}

const merged = merge({age: 65}, {name: "Hélène"});
console.log(merged);

// Another generic function, we use the interface to add minimum constraint on the generic type T

interface Lengthy {
  length: number;
}

function getLengthAsText<T extends Lengthy>(element: T): [T, string] {
  let description = "I'm empty";
  if (element.length === 1){
    description = "I have 1 element";
  }
  if (element.length > 1){
    description = `I have ${element.length} elements`;
  }
  return [element, description]
}

console.log(getLengthAsText("Here"))
console.log(getLengthAsText(["salut", "comment", "ca", "va ?"]))

// The keyof constraint allow us to have a constraing on an object property

function extractAndConvert<T extends object, U extends keyof T>(object: T, key: U): string {
  return "Value : " + object[key]
}

console.log(extractAndConvert({name: "Yann"}, "name"));
console.log(extractAndConvert({name: "Jean"}, "name"));

// Generic classes

class DataStorage<T extends string | number | boolean > {
  storage: T[] = []

  addItem(item: T){
    this.storage.push(item);
  }

  removeItem(item: T){
    if (this.storage.indexOf(item) === -1){
      return;
    }
    this.storage.splice(this.storage.indexOf(item));
  }

  getItems(){
    return [...this.storage]
  }
}

const stringStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();
const numberAndStringStorage = new DataStorage<string | number>();

stringStorage.addItem("salut");
console.log(stringStorage.getItems());
numberAndStringStorage.addItem("");
numberAndStringStorage.addItem(7661);
console.log(numberAndStringStorage.getItems());


// Partial utility type

interface courseGoal {
  name: string,
  date: Date,
  description: string,
}

function createCourseGoal(name: string, date: Date, description: string):courseGoal{
  let obj:Partial<courseGoal> = {}
  obj.name = name;
  obj.date = date;
  obj.description = description;
  return obj as courseGoal;
}

console.log(createCourseGoal("Japonais", new Date, "Venez apprendre le japonais !"));

const nameaa: Readonly<string[]> = ["Anna", "Emilie"]
// nameaa[2] = "Yann" is impossible


interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats:Record<CatName, CatInfo> = {
  miffy: { age: 10, breed : "Persian"},
  boris: { age: 5, breed : "Maine Coon"},
  mordred: { age: 16, breed : "British Shorthair"},
};

console.log(cats.boris);

