// JavaScript Document
// PS15

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PS15_Bees.jpg", "solid"];
img[1] = ["PS15_Text.jpg", "solid"];
img[2] = ["PS15_Site.jpg", "solid"];
img[3] = ["PS15_Dia1.jpg", "solid"];
img[4] = ["PS15_Dia2.jpg", "solid"];
img[5] = ["PS15_Dia3.jpg", "solid"];
img[6] = ["PS15_Dia4.jpg", "solid"];
img[7] = ["PS15_Plan.jpg", "solid"];
img[8] = ["PS15_Larg.jpg", "solid"];
img[9] = ["PS15_Secp.jpg", "solid"];
img[10] = ["PS15_Modl.png", "none"];
img[11] = ["PS15_Apia.jpg", "solid"];
img[12] = ["PS15_Hony.jpg", "solid"];
img[13] = ["PS15_Hive.jpg", "solid"];
var k = img.length-1;

var txt = [[]];
txt[2] = ["Site Plan" , ""];
txt[7] = ["Plan & Elevation from Bayou" , ""];
txt[8] = ["Enlarged Detail of Elevation", ""];
txt[9] = ["Section Perspective" , "The upper level mezzanine is accessed by a grand staircase, and allows for views of Bayou St. John."];
txt[10] = ["Model" , "The dynamic roof on this physical model was created by thermoforming styrene. Thermoforming was the critical step to create the double-curved nature of the roof."];
txt[11] = ["Roof" , "Remeniscent of the pitched roofs found about the city, the articulation of the roof is the primary means of breaking down the scale to that of the neighborhood."];
txt[12] = ["Breakout Spaces" , "Outdoor spaces on the bayou side allow for smaller-scale interactions between groups of only a few people."];
txt[13] = ["Market Hall" , "The openness of the hall allows for all different types of large-scale events to take place within."];

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
		document.getElementById("caption_Secp").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption_Secp").style.visibility="visible";
		document.getElementById("name_Secp").innerHTML=txt[2][0]
		document.getElementById("desc_Secp").innerHTML=txt[2][1]
		break;
		
		case 6:
		document.getElementById("caption_Orth").style.visibility="hidden";
		break;
		
		case 7:
		document.getElementById("orth").innerHTML=txt[7][0]
		break;
		
		case 8:
		document.getElementById("caption_Secp").style.visibility="hidden";
		document.getElementById("caption_Orth").style.visibility="visible";
		document.getElementById("orth").innerHTML=txt[8][0]
		break;
		
		case 9:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Secp").style.visibility="visible";
		document.getElementById("name_Secp").innerHTML=txt[9][0]
		document.getElementById("desc_Secp").innerHTML=txt[9][1]
		break;
		
		case 10:
		document.getElementById("name").innerHTML=txt[10][0]
		document.getElementById("desc").innerHTML=txt[10][1]
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11][0]
		document.getElementById("desc").innerHTML=txt[11][1]
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[12][0]
		document.getElementById("desc").innerHTML=txt[12][1]
		break;	
		
		case 13:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[13][0]
		document.getElementById("desc").innerHTML=txt[13][1]
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
		case 0:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("summary").style.visibility="hidden";
		document.getElementById("caption_Secp").style.visibility="visible";
		document.getElementById("name_Secp").innerHTML=txt[2][0]
		document.getElementById("desc_Secp").innerHTML=txt[2][1]
		break;
		
		case 3:
		document.getElementById("caption_Secp").style.visibility="hidden";
		break;

		case 7:
		document.getElementById("caption_Orth").style.visibility="visible";
		document.getElementById("orth").innerHTML=txt[7][0]
		break;
		
		case 8:
		document.getElementById("orth").innerHTML=txt[8][0]
		break;
		
		case 9:
		document.getElementById("caption_Orth").style.visibility="hidden";
		document.getElementById("caption_Secp").style.visibility="visible";
		document.getElementById("name_Secp").innerHTML=txt[9][0]
		document.getElementById("desc_Secp").innerHTML=txt[9][1]
		break;
		
		case 10:
		document.getElementById("caption_Secp").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[10][0]
		document.getElementById("desc").innerHTML=txt[10][1]
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11][0]
		document.getElementById("desc").innerHTML=txt[11][1]
		break;

		case 12:
		document.getElementById("name").innerHTML=txt[12][0]
		document.getElementById("desc").innerHTML=txt[12][1]
		break;
		
		case 13:
		document.getElementById("name").innerHTML=txt[13][0]
		document.getElementById("desc").innerHTML=txt[13][1]
		break;
	}
}