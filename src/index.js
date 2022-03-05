import "./style.css";
import { DOM } from "./components/DOM";
import { Task } from "./components/Task";
import { Project } from "./components/Project";
let newDOM = new DOM();
newDOM.initialize();

let project = new Project("Clean House", "3/22/2022", null);
project.createCard();
console.log(project);
