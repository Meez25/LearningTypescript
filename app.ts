class ProjectInput {
  destinationElement: HTMLDivElement;
  template: HTMLTemplateElement;
  form: HTMLFormElement;

  constructor(){
    this.destinationElement = document.getElementById("app")! as HTMLDivElement;
    this.template = document.getElementById("project-input")! as HTMLTemplateElement;
    const importedNode = document.importNode(this.template.content, true);
    this.form = importedNode.firstElementChild! as HTMLFormElement;
    this.form.id = "user-input";
    this.attach();
  }
  private attach(){
    this.destinationElement.insertAdjacentElement("afterbegin", this.form);
  }
}

const projectInput = new ProjectInput();

