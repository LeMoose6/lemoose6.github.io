const bioData = [];
var bio;
var contactInfo;
		
function values() {
	bioData[0] = document.getElementById("name").value;
	bioData[1] = document.getElementById("bday").value;
	bioData[2] = document.getElementById("fact").value;
	bioData[3] = document.getElementById("contact").value;
	bioData[4] = document.getElementById("platform").value;
}
		
function write() {
	bio = ""
			
	if (bioData[0] != "") {
		bio = "Hi, my name is " + bioData[0];
	} else {
		bioData = []
	}
			
	if (bioData[1] != "") {
		bio += ". My birthday is on " + bioData[1];
	}
			
	if (bioData[2] != "") {
		bio += ", and a fun fact about me is that " + bioData[2];
	}
			
	if (bioData[3] != "") {
		bio += ". You can contact me at " + bioData[3];
		contactInfo = 1;
		if (bioData[4] != "") {
			bio += " on " + bioData[4]
		}
	}			
			
	bio += "."
			
	if (bio == ".") {
		bio = "Please enter the required values"
	} 
}
		
function create() {
	values();
	write();
	document.getElementById("bio").innerHTML = bio; 
}
		
function reset() {
	document.getElementById("name").value = "";
	document.getElementById("bday").value = "";
	document.getElementById("fact").value = "";
	document.getElementById("contact").value = "";
}
