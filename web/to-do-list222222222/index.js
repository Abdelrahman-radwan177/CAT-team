let inputName = document.querySelector(".TodoName");
let inputDate = document.querySelector(".Tododate");
let allToDO = document.querySelector(".myTodo");
//////////////////////////////////////////////////////////////////////////
let toDo = [];
// check data in local storage
if (localStorage.getItem("toDo") != null) {
  toDo = JSON.parse(localStorage.getItem("toDo"));
}
// save data in local storage
function saveData() {
  localStorage.setItem("toDo", JSON.stringify(toDo));
}
// add ToDO list
function add() {
  if (inputName.value.trim() !== "") {
    let obj = {
      toDoName: inputName.value.trim(),
      toDoDate: inputDate.value || "No deadline"
    };
    toDo.push(obj);
    saveData();
    show();
    inputName.value = "";
    inputDate.value = "";
    inputName.focus();
  }
}
inputName.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    add();
  }
});
inputDate.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    add();
  }
});
// show data
function show() {
  allToDO.innerHTML = "";
  if (toDo.length === 0) {
    allToDO.innerHTML = `
      <div class="empty">
        <i class="fas fa-clipboard-list"></i>
        <p>No tasks yet! Enjoy your free time 🎉</p>
      </div>
    `;
    return;
  }
  for (let i = 0; i < toDo.length; i++) {
    allToDO.innerHTML += `
    <div class="todoItem">
      <p class="oneToDoName">${toDo[i].toDoName}</p>
      <p class="oneToDoDate">${toDo[i].toDoDate}</p>
      <button class="deleteBtn" onclick="deleteToDo(${i})"><i class="fas fa-trash-alt"></i>Delete</button>
    </div>
    `;
  }
}
show();
// delete toDo list
function deleteToDo(item) {
  toDo.splice(item, 1);
  saveData();
  show();
}
