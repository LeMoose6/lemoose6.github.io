var asmtNo = 0

function asmtData() {
let aname = document.getElementById('aname').value;

let aclass = document.getElementById('class').value;

let dueDate = document.getElementById('date').value;

let dueTime = document.getElementById('time').value;

var asmtNo += 1

localStorage.setItem(asmtNo, aclass+":"+aname+" -- "+dueDate+" "+dueTime+"!");location.reload();
}

function writeAssignments() {
document.write(JSON.stringify(localStorage).replaceAll("!",<br />));
}
