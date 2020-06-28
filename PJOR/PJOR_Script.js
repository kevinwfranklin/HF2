// JavaScript Document
// PJOR

"use strict";

var i = 0;
var img = [];
img[0] = "PJOR_Main.jpg";
img[1] = "PJOR_Text.jpg";
img[2] = "PJOR_Site.jpg";
img[3] = "PJOR_Plan.jpg";
img[4] = "PJOR_Int1.jpg";
img[5] = "PJOR_Int2.jpg";
img[6] = "PJOR_Int3.jpg";
img[7] = "PJOR_Int4.jpg";
img[8] = "PJOR_Ele1.jpg";
img[9] = "PJOR_Ele2.jpg";
img[10] = "PJOR_Ext1.jpg";
img[11] = "PJOR_Ext4.jpg";

var k = img.length-1;

var txt = [[]];
txt[4] = ["Lobby / Waiting Room" , ""]
txt[6] = ["Check-out desk & Corridor" , ""]
txt[7] = ["Hygiene rooms & Corridor" , ""]
txt[8] = ["South Elevation (Sawnee Corners Blvd.)" , "East Elevation"]
txt[9] = ["North Elevation (Rear)" , "West Elevation (Employee Entrance)"]

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
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Intr").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 5:
		document.getElementById("name_Intr").innerHTML=txt[4][0];
		break;
		
		case 6:
		document.getElementById("name_Intr").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("caption_Intr").style.visibility="visible";
		document.getElementById("name_Intr").innerHTML=txt[7][0];
		break;
		
		case 8:
		document.getElementById("name_Elev_Top").innerHTML=txt[8][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[9][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[9][1];
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
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption_Intr").style.visibility="visible";
		document.getElementById("name_Intr").innerHTML=txt[4][0];
		break;
		
		case 6:
		document.getElementById("name_Intr").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("name_Intr").innerHTML=txt[7][0];
		break;
		
		case 8:
		document.getElementById("caption_Intr").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[8][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("name_Elev_Top").innerHTML=txt[9][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("caption_Elev").style.visibility="hidden";
		break;
	}
}