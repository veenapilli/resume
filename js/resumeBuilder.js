/*
This is empty on purpose! Your code to build the resume will go here.
*/
//var formattedName = HTMLheaderName.replace("", "V P");
//var formattedRole = HTMLheaderRole.replace("%data%", "Android Developer");
var replaceText= "%data%";

var bio = {
	"name": "Veena",
	"role": "Android Developer",
	"contacts":{
		"email": "veenapilli@gmail.com",
		"mobile": "+91-9620522612"
	},
	"welcome_message": "Hey! Thanks for glancing through my Resume!!",
	"skills": ["jQuery", "JavaScript", "Android", "Java"]
}


var work = {
	"past": [{
		"company": "Streamoid",
		"years": "June'15 till date",
		"position": "MTS",
		"location": "Bangalore"
	},{
		"company": "Kodiak",
		"years": "May'14 to June'15",
		"position": "Software Engineer",
		"location": "Bangalore"
	},{
		"company": "Accenture Tech Labs",
		"years": "Dec'13 to May'14",
		"position": "Intern",
		"location": "Bangalore"
	}]

}

var education= {
"past":[
	{
	   "level": "Post Graduation",
		"institution": "IIIT-Bangalore",
		"years": "2012-2014",
		"location": "Bangalore"
	},{
		"level": "Graduation",
		"institution": "MSRIT",
		"years": "2008-2012",
		"location": "Bangalore"
	}]
}


$("#header")
.prepend(HTMLheaderRole.replace(replaceText, bio.role))
.prepend(HTMLheaderName.replace(replaceText, bio.name));
$("#footerContacts")
.append(HTMLemail.replace(replaceText, bio.contacts.email))
.append(HTMLmobile.replace(replaceText, bio.contacts.mobile));
$("#workExperience")
.append(HTMLworkStart)
for (var i = 0; i < work.past.length; i++) {
	$("#workExperience")
	.append(HTMLworkEmployer.replace(replaceText, work.past[i].company))
	.append(HTMLworkTitle.replace(replaceText, work.past[i].position))
	.append(HTMLworkDates.replace(replaceText, work.past[i].years))
	.append(HTMLworkLocation.replace(replaceText, work.past[i].location))
}
$("#education")
.append(HTMLschoolStart)
for (var i = 0; i < education.past.length; i++) {
	$("#education")
	.append(HTMLschoolName.replace(replaceText, education.past[i].institution))
	.append(HTMLschoolDegree.replace(replaceText, education.past[i].level))
	.append(HTMLschoolDates.replace(replaceText, education.past[i].years))
	.append(HTMLschoolLocation.replace(replaceText, education.past[i].location))
}