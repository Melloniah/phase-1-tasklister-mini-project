document.addEventListener("DOMContentLoaded", () => {
  

  let inputField = document.querySelector("#new-task-description" );
let form = document.querySelector("#create-task-form");
let tasks=document.querySelector("#tasks");


function handleSubmitButton (event){
event.preventDefault();// prevents default behaviour once submitted

let tasksText= inputField.value.trim();
if (tasksText === "") return;// allows user to input a text
let newTask = document.createElement("li");
    newTask.textContent = tasksText;

    // Create delete button (❌)
    let deleteButton = document.createElement("span");
    deleteButton.textContent = " x";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "red";
    deleteButton.style.marginLeft = "10px";

    // Append delete button to task
    newTask.appendChild(deleteButton);
    tasks.appendChild(newTask);

    // Delete task on click
    deleteButton.addEventListener("click", function () {
  
      newTask.remove();
    });

    inputField.value = "";
  }

    form.addEventListener("submit", handleSubmitButton);//calls the submit button
  


});
