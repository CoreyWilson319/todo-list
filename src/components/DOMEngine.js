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
		submitButton.setAttribute("type", "button");

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
		closeButton.addEventListener("click", this.closeNewProjectForm);
		submitButton.addEventListener("click", () => {
			this.createProjectObject(title.input.value, dueDate.input.value);
			this.updateProjectsDOM();
		});
	};

	this.createProjectObject = (title, dueDate) => {
		// let title = document.querySelector(".title");
		// let dueDate = document.querySelector(".dueDate");
		let project = new Project(title, dueDate);
		// Store Projects in local storage instead of this.projects
		this.projects.push(project);
		this.closeNewProjectForm(); //COMMENT BACK IN WHEN DONE!!!!
	};

	this.closeNewProjectForm = () => {
		let form = document.querySelector(".newProjectForm");
		if (form) {
			form.remove();
		}
	};

	this.updateProjectsDOM = () => {
		this.clearProjectsDOM();
		this.projects.forEach((project) => {
			let projectItem = document.createElement("div");
			projectItem.textContent = project.title;
			projectItem.classList.add("project-item");
			this.projectTab.appendChild(projectItem);
			projectItem.addEventListener("click", () => {
				this.createProjectCard(project.title, project.dueDate);
				return projectItem;
			});
		});
	};
	this.createProjectCard = (title, dueDate) => {
		let card = document.createElement("div");
		card.classList.add("card-project");
		let cardTitle = document.createElement("div");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = title;
		let cardDueDate = document.createElement("div");
		cardDueDate.classList.add("card-dueDate");
		cardDueDate.textContent = dueDate;
		let expand = document.createElement("button");
		expand.classList.add("card-expand");
		expand.textContent = title + " Tasks";
		expand.addEventListener("click", () => {
			card.remove();
			// find project
			this.projects.forEach((project) => {
				if (project.title === title) {
					this.showTask(project);
				}
			});
			// close project card and open new card displaying project tasks
		});
		let cardElements = [cardTitle, cardDueDate, expand];
		cardElements.forEach((element) => {
			card.appendChild(element);
		});
		this.content.appendChild(card);
	};
	this.clearProjectsDOM = () => {
		let projects = document.querySelectorAll(".project-item");
		if (projects.length >= 1) {
			projects.forEach((project) => {
				project.remove();
			});
		}
	};

	this.showTask = (project) => {
		// Successfully pasing project to this function
		console.log(project);
	};

	//   create project cards on the hover of project tab
	//   return {this.projects}
}

export { DOMEngine };
