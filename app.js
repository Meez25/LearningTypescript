"use strict";
class ProjectInput {
    constructor() {
        this.destinationElement = document.getElementById("app");
        this.template = document.getElementById("project-input");
        const importedNode = document.importNode(this.template.content, true);
        this.form = importedNode.firstElementChild;
        this.form.id = "user-input";
        this.attach();
    }
    attach() {
        this.destinationElement.insertAdjacentElement("afterbegin", this.form);
    }
}
const projectInput = new ProjectInput();
