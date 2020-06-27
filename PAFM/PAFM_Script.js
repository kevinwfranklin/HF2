// JavaScript Document
// PAFM

"use strict";

var i = 0;
var img = [];
img[0] = "PAFM_Titl.jpg";
img[1] = "PAFM_Text.jpg";
img[2] = "PAFM_Prog.jpg";
img[3] = "PAFM_PlnS.jpg";
img[4] = "PAFM_Smal.jpg";
img[5] = "PAFM_PlnL.jpg";
img[6] = "PAFM_Larg.jpg";
var k = img.length-1;

var txt = [[]];
txt[2] = ["Program" , "The sizes and clearances of the laundry equipment was the critical step in determining the layout of the prototypes."]
txt[3] = ["Small Facility - Floor Plan", "This layout is designed to accommodate 130 pounds of laundry at a time. Movement through the building is from left to right."]
txt[4] = ["Small Facility - Rendering" , "This enclosure is thought of as a destination, with added elements that encourage lounging outside."]
txt[5] = ["Large Facility - Floor Plan", "This layout is designed to accommodate 420 pounds of laundry at a time. The floor plan is the same as the Small Facility, but extended to hold the additional equipment."]
txt[6] = ["Large Facility - Rendering" , "Unlike the Small Facility, this enclosure is strictly functional, imagined as a 'laundry tunnel' where dirty laundry enters, and clean laundry exits."]

function arrow(){
	var key = event.which || event.keyCode;
	if(key == 39) {forward();}
	else if(key == 37) {back();}
}

function back_img(){
	if(i > 0) {i--;}
	else {i = k;}
	var pic = document.getElementById("imag");
	pic.src = img[i];
	document.getElementById("imag").onload = function() {back_txt()};
}

function back_txt(){	
		switch(i) {
		case 0:
		document.getElementById("summary").style.visibility="hidden";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 2:
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
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
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
	}
}

function forward_img(){
	if(i < k) {i++;}
	else {i = 0;}
	var pic = document.getElementById("imag");
	pic.src = img[i];
	document.getElementById("imag").onload = function() {forward_txt()};
}

function forward_txt(){	
	switch(i) {
		case 0:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("summary").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
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
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
	}
}