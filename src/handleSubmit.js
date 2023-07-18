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
  newInfo.classList.add("new-info");
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
  const tittleH1 = document.querySelector(".projects-h1");

  const allTasks = document.querySelector(".all-tasks");
  allTasks.addEventListener("click", function () {
    content.appendChild(newInfo);
    tittleH1.innerText = "All tasks!";
  });
  //Delete the selected div
  deletBtn.addEventListener("click", function () {
    const newInfoDIVs = document.querySelectorAll(".new-info");
    newInfoDIVs.forEach(function (div) {
      div.addEventListener("click", function () {
        this.remove();
      });
    });
  });
  starBtn.addEventListener("click", function () {
    newInfo.setAttribute("id", "important-on");
    starBtn.style.color = "gold";
  });
  const importantBtn = document.querySelector(".important");
  importantBtn.addEventListener("click", function () {
    if (newInfo.getAttribute("id") !== "important-on") {
      if (content.contains(newInfo)) {
        content.removeChild(newInfo);
      }
    }
    tittleH1.innerText = "Important Tasks!";
  });

  const today = document.querySelector(".today");
  today.addEventListener("click", function () {
    const today = new Date();
    const currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      today.getDate().toString().padStart(2, "0");
    if (dateValue !== currentDate) {
      if (content.contains(newInfo)) {
        content.removeChild(newInfo);
      }
    }
    tittleH1.innerText = "Today's Tasks!";
  });

  const nextWeek = document.querySelector(".seven-days");
  nextWeek.addEventListener("click", function () {
    const today = new Date();
    const nextSevenDays = new Date();
    nextSevenDays.setDate(today.getDate() + 7);
    const nextSevenDaysFormatted = nextSevenDays.toISOString().split("T")[0];

    if (dateValue > nextSevenDaysFormatted) {
      if (content.contains(newInfo)) {
        content.removeChild(newInfo);
      }
    }
    tittleH1.innerText = "Next Week Tasks!";
  });

  //Clear all arrays after submiting it
  titleValueForm = undefined;
  descriptionValueForm = undefined;
  dateValueForm = undefined;
}
export default handleSubmit;
