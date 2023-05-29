"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ProjectInput {
    constructor() {
        this.destinationElement = document.getElementById("app");
        this.template = document.getElementById("project-input");
        const importedNode = document.importNode(this.template.content, true);
        this.form = importedNode.firstElementChild;
        this.form.id = "user-input";
        this.titleInput = this.form.querySelector("#title");
        this.descriptionInput = this.form.querySelector("#description");
        this.peopleInput = this.form.querySelector("#people");
        this.configure();
        this.attach();
    }
    attach() {
        this.destinationElement.insertAdjacentElement("afterbegin", this.form);
    }
    gatherUserInput() {
        const enteredTitle = this.titleInput.value;
        const enteredDescription = this.descriptionInput.value;
        const enteredPeople = this.peopleInput.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5,
        };
        const peopleValidatable = {
            value: enteredPeople,
            required: true,
            minLength: 1,
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert("Wrong !");
            return;
        }
        return [enteredTitle, enteredDescription, +enteredPeople];
    }
    clearInput() {
        this.peopleInput.value = "";
        this.descriptionInput.value = "";
        this.titleInput.value = "";
    }
    submitHandler(e) {
        e.preventDefault();
        const userInput = this.gatherUserInput();
        if (userInput) {
            console.log(userInput);
        }
        this.clearInput();
    }
    configure() {
        this.form.addEventListener("submit", this.submitHandler);
    }
}
__decorate([
    autoBind
], ProjectInput.prototype, "submitHandler", null);
function autoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjustedDescriptor;
}
function validate(validatableInput) {
    let isValid = true;
    if (!validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
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
