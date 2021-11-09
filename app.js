let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

let statusBtn = document.querySelector(".dropbtn")
let list = document.querySelector(".content")

statusBtn.addEventListener("click", ()=>{
    list.classList.toggle("newlist")
})


let Tasks = []
let tasksCount = 0

const tasksoutput = document.getElementById("tasksoutput")
const insertasks = document.getElementById("insertasks")
const content = document.getElementById("contents")
const title = document.getElementById("title")
const error = document.getElementById("error")

function start(){
  hideinsertasks()
  error.innerHTML = ''
}

function hideinsertasks(){
  insertasks.style.display = 'none'
  error.value = ''
  title.value = ''
  content.value = ''
}

function showInsertTasks(){
  insertasks.style.display = 'block'
}

function insert() {
  if((content.value != '') && (title.value != '')) {
      let task = new Task(title.value, content.value, tasksCount + 1);
      Tasks.push(task);
      saveTasks();
      title.value = '';
      content.value = '';
      error.style.color = 'black';
      insertasks.style.display = 'none';
  } else {
      error.innerHTML = 'Invaled Task';
      error.style.color = 'var(--red)';
  }
}

let Task = function(title, content, id) {
  this.title = title;
  this.content = content;
  this.id = id;
  var date = new Date();
  this.d = date.getDate();
  this.m = date.getMonth() + 1;
  this.y = date.getFullYear();
  tasksCount += 1;
}

function saveTasks() {
  for(var i = 0; i < Tasks.length; i++) {
      Tasks[i].id = i + 1;
  }
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
  loadTasks();
}

function loadTasks() {
  let loadedTasks = JSON.parse(localStorage.getItem('Tasks'));
  displayTasks();
}

function displayTasks() {
  let loadedTasksOP = JSON.parse(localStorage.getItem('Tasks'));
  if((loadedTasksOP != null) || (loadedTasksOP.length > 0)) {
      let output = '';

      output += '<div>';

      for(var a = 0; a < loadedTasksOP.length; a++) {
          output += '<span>';
          output += '<input class="x-btn" type="button" value="X" onclick="clearTask(' + loadedTasksOP[a].id + ');">'
          output += '<h2>' + loadedTasksOP[a].title + '</h2>' ;
          output += loadedTasksOP[a].content;
          output += '<br>' + '<i id="small">' + loadedTasksOP[a].d + '/' + loadedTasksOP[a].m + '/' + loadedTasksOP[a].y + '</i>';
          output +='</span>';
      }

      output += '</div>';                    
      tasksoutput.innerHTML = output;
      
  } else {
      tasksoutput.innerHTML = 'no Tasks';
  }

}