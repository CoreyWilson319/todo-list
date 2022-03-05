import { Task } from "./Task.js";
function Project(title, dueDate, element) {
	this.title = title;
	this.dueDate = dueDate;
	this.tasks = [];
	this.completed = false;
	this.overDue = false;
	this.element = element;
	this.cardElement = null;
	this.addTask = (title, description, dueDate, priority) => {
		let newTask = new Task(title, description, dueDate, priority);
		this.tasks.push(newTask);
	};
	this.removeTask = (Task) => {
		for (let i = 0; i < this.tasks.length; i++) {
			if (Task === this.tasks[i]) {
				this.tasks.splice(i, 1);
			}
		}
		return this.tasks;
	};
	this.createCard = () => {
		let card = document.createElement("div");
		card.classList.add("project-card");
		let title = document.createElement("div");
		title.classList.add("project-card-title");
		title.textContent = this.title;
		title.classList.add("project-card-title");
		let dueDate = document.createElement("div");
		dueDate.classList.add("project-card-dueDate");
		dueDate.textContent = this.dueDate;
		dueDate.classList.add("project-card-dueDate");
		let showTaskButton = document.createElement("button");
		showTaskButton.classList.add("show-task-button");
		showTaskButton.textContent = "Show Tasks";
		let elements = [title, dueDate, showTaskButton];
		elements.forEach((element) => card.appendChild(element));
		this.cardElement = card;
		// console.log(document.querySelector(".sidebar"));
		document.querySelector(".sidebar").appendChild(this.cardElement);
	};
}

export { Project };

// Open Form to create new Project
// Take Form Data and create new Project
// Take new Project and append to projectTab element
