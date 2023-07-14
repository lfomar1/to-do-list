import { head } from "lodash";
import createNewProject from "./addproject";
import handleSubmit from "./handleSubmit";

const content = document.querySelector(".projects-content");

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  //Ask for new Project
  const newProject = createNewProject();
  content.appendChild(newProject);
});
console.log(handleSubmit());
