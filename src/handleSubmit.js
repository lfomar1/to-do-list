const formValues = {
  title: [],
  description: [],
  date: [],
};

const content = document.querySelector(".projects-content");
function handleSubmit() {
  //This add values to the Object
  const titleValue = document.querySelector(".title-input").value;
  formValues.title.push(titleValue);
  const descriptionValue = document.querySelector(".description-input").value;
  formValues.description.push(descriptionValue);
  const dateValue = document.querySelector(".date-input").value;
  formValues.date.push(dateValue);

  //Take form values, and create a template
  let titleValueForm = formValues.title[0];
  formValues.title = [];
  let descriptionValueForm = formValues.description[0];
  formValues.description = [];
  let dateValueForm = formValues.date[0];
  formValues.date = [];

  const newInfo = document.createElement("div");
  newInfo.style.borderColor = "#03DAC5";
  newInfo.style.borderStyle = "solid";
  newInfo.style.borderWidth = "2px";
  newInfo.style.padding = "10px";
  newInfo.style.borderRadius = "12px";
  newInfo.style.display = "flex";
  newInfo.style.flexDirection = "column";
  newInfo.style.gap = "10px";

  const newInfoTitle = document.createElement("h2");
  newInfoTitle.textContent = titleValueForm;
  newInfoTitle.style.textTransform = "uppercase";
  newInfo.appendChild(newInfoTitle);

  const newInfoDescription = document.createElement("h3");
  newInfoDescription.textContent = descriptionValueForm;
  newInfoDescription.style.textTransform = "uppercase";
  newInfo.appendChild(newInfoDescription);

  const newInfoDate = document.createElement("h4");
  newInfoDate.textContent = dateValueForm;
  newInfo.appendChild(newInfoDate);

  const features = document.createElement("div");
  features.classList.add("features");
  features.style.order = 1;
  features.style.marginLeft = "auto";
  features.style.display = "flex";
  features.style.gap = "10px";

  const editBtn = document.createElement("span");
  editBtn.classList.add("material-symbols-outlined");
  editBtn.innerText = "edit";
  editBtn.setAttribute("id", "edit");
  const starBtn = document.createElement("span");
  starBtn.classList.add("material-symbols-outlined");
  starBtn.innerText = "star";
  starBtn.setAttribute("id", "star");
  const deletBtn = document.createElement("span");
  deletBtn.classList.add("material-symbols-outlined");
  deletBtn.setAttribute("id", "delete");
  deletBtn.innerText = "delete";

  features.appendChild(editBtn);
  features.appendChild(starBtn);
  features.appendChild(deletBtn);
  newInfo.appendChild(features);

  content.appendChild(newInfo);

  //Clear all arrays after submiting it
  titleValueForm = undefined;
  descriptionValueForm = undefined;
  dateValueForm = undefined;
}
export default handleSubmit;
