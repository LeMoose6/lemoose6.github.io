function asmtData() {
let aname = document.getElementById('aname').value;

let class = document.getElementById('class').value;

let dueDate = document.getElementById('date').value;

let dueTime = document.getElementById('time').value;
  
localStorage.setItem(class+":"+aname+" -- "+dueDate+" "+dueTime+"!");location.reload();
}

function writeAssignments() {
document.write(JSON.stringify(localStorage).replaceAll("!",<br />));
}
