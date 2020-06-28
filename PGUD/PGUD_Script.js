// JavaScript Document
// PGUD

"use strict";

var i = 0;
var img = [];
img[0] = "PGUD_Rdr1.jpg";
img[1] = "PGUD_Text.jpg";
img[2] = "PGUD_Exs1.jpg";
img[3] = "PGUD_Exs2.jpg";
img[4] = "PGUD_Eelv.jpg";
img[5] = "PGUD_Nelv.jpg";
img[6] = "PGUD_Rdr2.jpg";

var k = img.length-1;

var txt = [[]];
txt[2] = ["Existing Site" , "The canopy acts as a bridge between the building and the steeply sloped parking lot"]
txt[3] = ["Existing Canopy" , "While the center portion matches the building, the aluminum extensions, railings, and handicap signs clutter the condition."]
txt[4] = ["Existing Elevation" , "Existing Reflected Ceiling Plan"]
txt[5] = ["New Elevation" , "New Reflected Ceiling Plan"]


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
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 3:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name_Elev_Top").innerHTML=txt[4][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[5][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[5][1];
		break;
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
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[4][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name_Elev_Top").innerHTML=txt[5][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption_Elev").style.visibility="hidden";
		break;
	}
}