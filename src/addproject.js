const contentDiv = document.querySelector(".projects-content");
function createNewProject() {
  const newProject = document.createElement("div");
  newProject.classList.add("new-project");
  newProject.style.borderColor = "#03DAC5";
  newProject.style.borderStyle = "solid";
  newProject.style.borderWidth = "2px";
  newProject.style.borderRadius = "12px";
  newProject.style.padding = "10px";
  newProject.style.fontSize = "20px";
  newProject.style.display = "flex";
  newProject.style.flexDirection = "column";
  newProject.style.gap = "10px";
  const headingDiv = document.createElement("div");
  const heading = document.createElement("h4");
  heading.textContent = "New Project:";
  const headingInput = document.createElement("input");
  headingInput.classList.add("title-input");
  headingInput.style.width = "100%";
  headingInput.style.border = "none";
  headingInput.style.padding = "5px 10px";
  headingInput.style.textTransform = "uppercase";
  headingInput.setAttribute("placeholder", "What to do?");
  headingDiv.appendChild(heading);
  headingDiv.appendChild(headingInput);
  const descriptionDiv = document.createElement("div");
  const description = document.createElement("h4");
  description.textContent = "Description:";
  const descriptionInput = document.createElement("input");
  descriptionInput.classList.add("description-input");
  descriptionInput.style.width = "100%";
  descriptionInput.style.border = "none";
  descriptionInput.style.padding = "5px 10px";
  descriptionInput.style.height = "50px";
  descriptionInput.style.textTransform = "uppercase";
  descriptionInput.setAttribute(
    "placeholder",
    "eg: I'm gonna run 100 miles today :)"
  );
  descriptionDiv.appendChild(description);
  descriptionDiv.appendChild(descriptionInput);
  const dateDiv = document.createElement("div");
  const date = document.createElement("h4");
  date.textContent = "Insert Date:";
  const selectDate = document.createElement("input");
  selectDate.classList.add("date-input");
  selectDate.setAttribute("type", "date");
  selectDate.style.width = "100%";
  selectDate.style.height = "30px";
  selectDate.style.cursor = "text";
  dateDiv.appendChild(date);
  dateDiv.append(selectDate);

  const buttonDiv = document.createElement("div");
  buttonDiv.style.display = "flex";
  buttonDiv.style.justifyContent = "center";
  buttonDiv.style.gap = "20px";
  const addButton = document.createElement("button");
  addButton.classList.add("add-btn-form");
  addButton.textContent = "Add";
  addButton.style.width = "100px";
  addButton.style.padding = "5px 10px";
  addButton.style.borderRadius = "16px";
  addButton.style.border = "none";
  addButton.style.cursor = "pointer";
  addButton.style.backgroundColor = "#4caf50";
  addButton.style.fontWeight = "bold";

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.textContent = "Remove";
  removeButton.style.width = "100px";
  removeButton.style.padding = "5px 10px";
  removeButton.style.borderRadius = "16px";
  removeButton.style.border = "none";
  removeButton.style.cursor = "pointer";
  removeButton.style.backgroundColor = "#d32f2f";
  removeButton.style.fontWeight = "bold";
  buttonDiv.appendChild(addButton);
  buttonDiv.appendChild(removeButton);

  newProject.appendChild(headingDiv);
  newProject.appendChild(descriptionDiv);
  newProject.appendChild(dateDiv);
  newProject.appendChild(buttonDiv);

  return newProject;
}
export default createNewProject;
