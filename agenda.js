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
for(let i = 1; i<asmtNo+1; i++) {
localStorage.getItem(i);
}
}
