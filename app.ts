// Autobind decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  message = "This works !"

  @Autobind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);


interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {};

function Requireda(target: any, name: string) {
  const className = target.constructor.name
  registeredValidators[className] = { ...registeredValidators[className], [name]: ["Required"] }
}

function PositiveNumber(target: any, name: string) {
  const className = target.constructor.name
  registeredValidators[className] = { ...registeredValidators[className], [name]: ["Positive"] }
}

function validate(obj: any) {
  const className = obj.constructor.name;
  const classValidators = registeredValidators[className]
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
  @Requireda
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}


const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleField = document.getElementById("title")! as HTMLInputElement;
  const priceField = document.getElementById("price")! as HTMLInputElement;

  const newCourse = new Course(titleField.value, +priceField.value);
  if (!validate(newCourse)) {
    alert("Invalid output, please try again !");
    return;
  }
  console.log(newCourse);
});
