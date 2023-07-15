import createNewProject from "./addproject";
import handleSubmit from "./handleSubmit";

const content = document.querySelector(".projects-content");
const newProject = document.querySelector(".new-project");
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
  //Ask for new Project
  const newProject = createNewProject();
  content.appendChild(newProject);

  //Add all the form
  function clearContent() {
    content.removeChild(newProject);
  }
  const handleBtn = document.querySelector(".add-btn-form");
  handleBtn.addEventListener("click", handleSubmit);
  handleBtn.addEventListener("click", clearContent);
});
