// JavaScript Document
// PBTH

"use strict";

var i = 0;
var img = [];
img[0] = "PBTH_Verd.jpg";
img[1] = "PBTH_Text.jpg";
img[2] = "PBTH_Site.jpg";
img[3] = "PBTH_Plan.jpg";
img[4] = "PBTH_Elv1.jpg";
img[5] = "PBTH_Elv2.jpg";
img[6] = "PBTH_Intr.jpg";
img[7] = "PBTH_Entr.jpg";
img[8] = "PBTH_Dine.jpg";
var k = img.length-1;

var txt = [[]];
txt[2] = ["Site Plan of Clubhouse & Cart Storage" , ""]
txt[3] = ["Floor Plan of Clubhouse" , ""]
txt[4] = ["Northeast Elevation" , "Southeast Elevation"]
txt[5] = ["Southwest Elevation" , "Northwest Elevation"]
txt[6] = ["Dining Area & Lounge" , ""]
txt[7] = ["Main Entry from Parking Lot" , ""]
txt[8] = ["Veranda from First Tee" , ""]

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
		document.getElementById("caption_Orth").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
				
		case 2:
		document.getElementById("name_Orth").innerHTML=txt[2][0];
		break;
		
		case 3:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("caption_Orth").style.visibility="visible";
		document.getElementById("name_Orth").innerHTML=txt[3][0];
		break;
		
		case 4:
		document.getElementById("name_Elev_Top").innerHTML=txt[4][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[5][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[7][0];
		break;

		case 8:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[8][0];
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
		case 0:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("summary").style.visibility="hidden";
		document.getElementById("caption_Orth").style.visibility="visible";
		document.getElementById("name_Orth").innerHTML=txt[2][0];
		break;
		
		case 3:
		document.getElementById("name_Orth").innerHTML=txt[3][0];
		break;
		
		case 4:
		document.getElementById("caption_Orth").style.visibility="hidden";
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
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[7][0];
		break;
		
		case 8:
		document.getElementById("name").innerHTML=txt[8][0];
		break;
	}
}