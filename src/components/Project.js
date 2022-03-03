import { Task } from "./Task.js";
function Project(title, dueDate) {
  this.title = title;
  this.dueDate = dueDate;
  this.tasks = [];
  this.completed = false;
  this.overDue = false;
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
  this.completeProject = () => {
    this.false = true;
  };
  this.projectOverDue = () => {
    this.overDue = true;
  };
  this.getTask = (title) => {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].title === title) {
        return this.tasks[i];
      }
    }
  };
}

export { Project };

// Open Form to create new Project
// Take Form Data and create new Project
// Take new Project and append to projectTab element
