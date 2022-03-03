import { Project } from "./Project";

function DOMEngine() {
  this.projects = [];
  this.body = document.querySelector("body");
  this.content = null;
  this.projectTab = null;
  this.header = null;
  this.form = document.querySelector(".newProjectForm");
  this.initialize = () => {
    this.content = document.createElement("div");
    this.projectTab = document.createElement("div");
    this.header = document.createElement("div");
    this.content.classList.add("content");
    this.projectTab.classList.add("projectTab");
    this.header.classList.add("header");
    let newProjectButton = document.createElement("button");
    newProjectButton.classList.add("newProjectButton");
    newProjectButton.textContent = "Create New Project";
    newProjectButton.addEventListener("click", this.createProjectForm);
    let elements = [
      this.content,
      this.projectTab,
      this.header,
      newProjectButton,
    ];

    elements.forEach((element) => this.body.appendChild(element));

    // append elements array to body
  };
  this.createLabelAndInput = (labelName, labelClass, inputClass) => {
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.classList.add(labelClass);
    label.textContent = labelName;
    label.setAttribute("for", inputClass);
    input.classList.add(inputClass);
    return { label, input };
  };
  this.createProjectForm = () => {
    console.log(this.projects);
    let form = document.createElement("form");
    form.classList.add("newProjectForm", "form");
    let closeButton = document.createElement("div");
    closeButton.textContent = "X";
    closeButton.classList.add("closeButton");
    let formDescription = document.createElement("div");
    formDescription.textContent = "New Project";
    formDescription.classList.add("formDescription");
    let title = this.createLabelAndInput("Title", "titleLabel", "title");
    let dueDate = this.createLabelAndInput(
      "Due Date",
      "dueDateLabel",
      "dueDate"
    );

    let submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.textContent = "Submit";
    console.log(submitButton);
    let formElements = [
      closeButton,
      formDescription,
      title.label,
      title.input,
      dueDate.label,
      dueDate.input,
      submitButton,
    ];

    formElements.forEach((element) => {
      form.appendChild(element);
    });

    this.body.appendChild(form);
    closeButton.addEventListener("click", () => {
      let form = document.querySelector(".newProjectForm");
      form.remove();
    });

    submitButton.addEventListener("click", this.createProjectObject);
  };
  this.createProjectObject = () => {
    let form = document.querySelector(".form");
    let project = new Project(form.title, form.dueDate);
    // Store Projects in local storage instead of this.projects
    this.projects.push(project);
  };

  //   return {this.projects}
}

export { DOMEngine };
