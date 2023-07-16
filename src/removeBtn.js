const content = document.querySelector(".projects-content");

function removeBtnFn() {
  const newProject = document.querySelector(".new-project");
  content.removeChild(newProject);
}
export default removeBtnFn;
