// JavaScript Document
// PS13

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PS13_Nite.jpg", "solid"];
img[1] = ["PS13_Text.jpg", "solid"];
img[2] = ["PS13_Ctxt.jpg", "solid"];
img[3] = ["PS13_Site.jpg", "solid"];
img[4] = ["PS13_Trfe.jpg", "solid"];
img[5] = ["PS13_Trff.jpg", "solid"];
img[6] = ["PS13_Prog.jpg", "solid"];
img[7] = ["PS13_Aeri.jpg", "solid"];
img[8] = ["PS13_Sect.png", "none"];
img[9] = ["PS13_Shrt.jpg", "solid"];
img[10] = ["PS13_Ampi.jpg", "solid"];
var k = img.length-1;

var txt = [[]];
txt[3] = ["Existing Site Plan", "Figure/Ground with roads/sidewalks delineated"]
txt[4] = ["Existing Traffic Organization", "Areas for parking shown in dark gray"]
txt[5] = ["Proposed Traffic Organization", "Parking is consolidated in to a single structure in which the ground floor can be used for retail"]
txt[8] = ["Grade Changes", "While the piazza is raised to allow for the roadway to pass underneath, it is also lowered at the Pyramid to allow for closer observation of the artifact."]
txt[9] = ["Exhibition Area" , "In front of the ancient monuments, the exhibition area is designed as an extension of the piazza itself to allow for traveling exhibits to be displayed."]


function arrow(){
	var key = event.which || event.keyCode;
	if(key == 39) {forward();}
	else if(key == 37) {back();}
}

function back_img(){
	if(i > 0) {i--;}
	else {i = k;}
	var pic = document.getElementById("imag");
	pic.style.outlineStyle=img[i][1];
	pic.src = img[i][0];
	document.getElementById("imag").onload = function() {back_txt()};
}
	
function back_txt(){	
	switch(i) {
		case 0:
		document.getElementById("summary").style.visibility="hidden";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption_Prog").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption_Prog").style.visibility="visible";
		break;
		
		case 7:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 8:
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
	}
}

function forward_img(){
	if(i < k) {i++;}
	else {i = 0;}
	var pic = document.getElementById("imag");
	pic.style.outlineStyle=img[i][1];
	pic.src = img[i][0];
	document.getElementById("imag").onload = function() {forward_txt()};
}

function forward_txt(){	
	switch(i) {	
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("summary").style.visibility="hidden";
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Prog").style.visibility="visible";
		break;
		
		case 7:
		document.getElementById("caption_Prog").style.visibility="hidden";
		break;
		
		case 8:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("caption").style.visibility="hidden";
		break;
	}
}