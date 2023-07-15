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
  const titleValueForm = formValues.title[0];
  const descriptionValueForm = formValues.description[0];
  const dateValueForm = formValues.date[0];

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

  content.appendChild(newInfo);
}
export default handleSubmit;
