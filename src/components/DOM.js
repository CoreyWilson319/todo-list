import { Project } from "./Project";

function DOM() {
	this.projectObjects = [];
	this.content = null;
	this.sidebar = null;
	this.header = null;
	this.activeForm = null;
	this.activeProject = null;

	this.initialize = () => {
		this.content = document.createElement("div");
		this.sidebar = document.createElement("div");
		let header = document.createElement("div");
		this.content.classList.add("content");
		this.sidebar.classList.add("sidebar");
		header.classList.add("header");
		let newProjectButton = document.createElement("button");
		newProjectButton.classList.add("create-project-button");
		newProjectButton.textContent = "Create New Project";
		newProjectButton.addEventListener("click", this.createProjectForm);
		let elements = [header, this.content, this.sidebar];
		header.appendChild(newProjectButton);
		elements.forEach((element) =>
			document.querySelector("body").appendChild(element)
		);
	};

	this.createProjectForm = () => {
		let form = document.createElement("form");
		form.classList.add("create-project-form");
		let title = document.createElement("label");
		title.classList.add("form-title");
		title.textContent = "Title: ";
		let titleInput = document.createElement("input");
		titleInput.classList.add("form-title-input");
		let dueDate = document.createElement("label");
		dueDate.classList.add("form-dueDate");
		dueDate.textContent = "dueDate: ";
		let dueDateInput = document.createElement("input");
		dueDateInput.classList.add("form-dueDate-input");
		let submit = document.createElement("button");
		submit.textContent = "Submit";
		submit.setAttribute("type", "button");
		let formElements = [title, titleInput, dueDate, dueDateInput, submit];
		formElements.forEach((element) => {
			form.appendChild(element);
		});
		document.querySelector("body").appendChild(form);
		this.activeForm = form;
		submit.addEventListener("click", () => {
			this.createProjectObject(titleInput.value, dueDateInput.value);
			this.activeForm.remove();
			this.activeForm = null;
		});
	};

	this.createProjectObject = (title, dueDate) => {
		let element = document.createElement("div");
		element.textContent = title;
		let newProject = new Project(title, dueDate, element);
		this.projectObjects.push(newProject);
		this.updateSideBar();
	};

	this.updateSideBar = () => {
		this.clearSidebar();
		this.projectObjects.forEach((project) => {
			project.createCard();
			// LEAVING OFF HERE
			// find a way to addeventlistener on showtask and when clicked
			// populate content with task pertaining to clicked project
			console.log(project.cardElement);
			document.querySelector(".sidebar").appendChild(project.cardElement);
		});
	};
	this.clearSidebar = () => {
		document.querySelector(".sidebar").remove();
		let sidebar = document.createElement("div");
		sidebar.classList.add("sidebar");
		document.querySelector("body").appendChild(sidebar);
	};
	this.updateContent = () => {};
	//   Create button to open form to create new Task Object
}

export { DOM };
