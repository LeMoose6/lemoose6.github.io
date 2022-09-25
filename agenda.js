function asmtData() {
let aname = document.getElementById('aname').value;

let class = document.getElementById('class').value;

let dueDate = document.getElementById('date').value;

let dueTime = document.getElementById('time').value;
}

function writeAssignments() {
localStorage.setItem(class+":"+aname+" -- "+dueDate+" "+dueTime+"!");location.reload();
document.write(JSON.stringify(localStorage).replaceAll("!",<br />));
}
