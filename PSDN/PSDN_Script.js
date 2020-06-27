// JavaScript Document
// PSDN

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PSDN_Titl.jpg", "solid"];
img[1] = ["PSDN_Text.jpg", "solid"];
img[2] = ["PSDN_Morp.png", "none"];
img[3] = ["PSDN_Tsht.png", "none"];
img[4] = ["PSDN_Expl.png", "none"];
img[5] = ["PSDN_Apr1.jpg", "solid"];
img[6] = ["PSDN_Apr2.jpg", "solid"];
img[7] = ["PSDN_Apr3.jpg", "solid"];
img[8] = ["PSDN_Apr4.jpg", "solid"];
img[9] = ["PSDN_Apr5.jpg", "solid"];
img[10] = ["PSDN_Abov.jpg", "solid"];
var k = img.length-1;

var txt = [[]];
txt[2] = ["Diagram", "The installation starts with a true hexagon, which is fragmented and distorted into irregular polygons, and ultimately back into a true hexagon."];
txt[3] = ["Execution", "Using a combination of Grasshopper and RhinoScript, a set of rules was created in order to govern the transformation of the hexagon."];
txt[4] = ["Construction", "In order to fabricate the installation via 3d printing, the design was broken up into a series of panels which were reassembled and painted on site."];

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
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("name").innerHTML=txt[2][0]
		document.getElementById("desc").innerHTML=txt[2][1]
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0]
		document.getElementById("desc").innerHTML=txt[3][1]
		break;
		
		case 4:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[4][0]
		document.getElementById("desc").innerHTML=txt[4][1]
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
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0]
		document.getElementById("desc").innerHTML=txt[2][1]
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0]
		document.getElementById("desc").innerHTML=txt[3][1]
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4][0]
		document.getElementById("desc").innerHTML=txt[4][1]
		break;
		
		case 5:
		document.getElementById("caption").style.visibility="hidden";
		break;
	}
}