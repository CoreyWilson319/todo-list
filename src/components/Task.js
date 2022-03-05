function Task(title, description, dueDate, priority) {
	this.title = title;
	this.description = description;
	this.dueDate = dueDate;
	this.priority = priority;
	this.cardElement = null;

	this.createCard = () => {
		let card = document.createElement("div");
		card.classList.add("task-card");
		let title = document.createElement("div");
		title.textContent = this.title;
		title.classList.add("task-card-title");
		let description = document.createElement("div");
		description.textContent = this.description;
		description.classList.add("task-card-description");
		let dueDate = document.createElement("div");
		dueDate.textContent = this.dueDate;
		dueDate.classList.add("task-card-dueDate");
		let cardElements = [title, description, dueDate];
		cardElements.forEach((element) => {
			card.appendChild(element);
		});
		this.cardElement = card;
		// console.log(this.cardElement);
		// document.querySelector("body").appendChild(card);
	};
}

export { Task };
