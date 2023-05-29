interface Validatable {
  value: string | number,
  required?: boolean,
  minLength?: number,
  maxLength?: number,
  min?: number,
  max?: number,
}

class ProjectInput {
  destinationElement: HTMLDivElement;
  template: HTMLTemplateElement;
  form: HTMLFormElement;
  titleInput: HTMLInputElement;
  descriptionInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.destinationElement = document.getElementById("app")! as HTMLDivElement;
    this.template = document.getElementById("project-input")! as HTMLTemplateElement;
    const importedNode = document.importNode(this.template.content, true);
    this.form = importedNode.firstElementChild! as HTMLFormElement;
    this.form.id = "user-input";
    this.titleInput = this.form.querySelector("#title") as HTMLInputElement;
    this.descriptionInput = this.form.querySelector("#description") as HTMLInputElement;
    this.peopleInput = this.form.querySelector("#people") as HTMLInputElement;

    this.configure();
    this.attach();
  }
  private attach() {
    this.destinationElement.insertAdjacentElement("afterbegin", this.form);
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInput.value;
    const enteredDescription = this.descriptionInput.value;
    const enteredPeople = this.peopleInput.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }
    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      minLength: 1,
    }

    if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
      alert("Wrong !");
      return;
    }
    return [enteredTitle, enteredDescription, +enteredPeople]
  }

  private clearInput() {
    this.peopleInput.value = ""
    this.descriptionInput.value = ""
    this.titleInput.value = ""
  }

  @autoBind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInput = this.gatherUserInput();
    if (userInput) {
      console.log(userInput);
    }
    this.clearInput();
  }

  private configure() {
    this.form.addEventListener("submit", this.submitHandler);
  }
}


function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjustedDescriptor;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (!validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength != null && typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null && typeof validatableInput.value === 'string'
  ) {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (validatableInput.max != null && typeof validatableInput.value === "number") {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

const projectInput = new ProjectInput();

