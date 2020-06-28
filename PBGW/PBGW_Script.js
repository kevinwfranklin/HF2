// JavaScript Document
// PBGW

"use strict";

var i = 0;
var img = [];
img[0] = "PBGW_Main.jpg";
img[1] = "PBGW_Text.jpg";
img[2] = "PBGW_Site.jpg";
img[3] = "PBGW_Plan.jpg";
img[4] = "PBGW_Toys.jpg";
img[5] = "PBGW_Desk.jpg";
img[6] = "PBGW_Helm.jpg";
img[7] = "PBGW_Ster.jpg";
img[8] = "PBGW_Trtm.jpg";
img[9] = "PBGW_Ele1.jpg";
img[10] = "PBGW_Ele2.jpg";
img[11] = "PBGW_Frnd.jpg";
img[12] = "PBGW_Flwr.jpg";
img[13] = "PBGW_Frst.jpg";
img[14] = "PBGW_Entr.jpg";
var k = img.length-1;

var txt = [[]];
txt[2] = ["Site Plan" , ""]
txt[4] = ["Waiting Room" , ""]
txt[5] = ["Check-in Desk across from Vestibule" , ""]
txt[6] = ["Beverage Station" , ""]
txt[7] = ["Sterilization" , ""]
txt[8] = ["Typical Treatment Room" , ""]
txt[9] = ["East Elevation (State Route 211)" , "South Elevation (Friendship Highway)"]
txt[10] = ["West Elevation" , "North Elevation"]
txt[11] = ["View from Friendship Road" , ""]
txt[12] = ["View from Winder Highway" , ""]
txt[13] = ["Vehicular Entry from Winder Highway" , ""]

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
		document.getElementById("name").className="invert";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0];
		break;
		
		case 3:
		document.getElementById("caption_Intr").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("name_Intr").innerHTML=txt[4][0];
		break;
		
		case 5:
		document.getElementById("name_Intr").innerHTML=txt[5][0];
		break;
		
		case 6:
		document.getElementById("name_Intr").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("name_Intr").innerHTML=txt[7][0];
		break;
		
		case 8:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("caption_Intr").style.visibility="visible";
		document.getElementById("name_Intr").innerHTML=txt[8][0];
		break;
		
		case 9:
		document.getElementById("name_Elev_Top").innerHTML=txt[9][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[10][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[10][1];
		break;
		
		case 11:
		document.getElementById("caption_Extr").style.visibility="hidden";
		document.getElementById("name").className="";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[11][0];
		break;
		
		case 12:
		document.getElementById("name_Extr").innerHTML=txt[12][0];
		break;
		
		case 13:
		document.getElementById("caption_Extr").style.visibility="visible";
		document.getElementById("name_Extr").innerHTML=txt[13][0];
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
		document.getElementById("name").className="invert";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0];
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
		
		case 5:
		document.getElementById("name_Intr").innerHTML=txt[5][0];
		break;
		
		case 6:
		document.getElementById("name_Intr").innerHTML=txt[6][0];
		break;
		
		case 7:
		document.getElementById("name_Intr").innerHTML=txt[7][0];
		break;
		
		case 8:
		document.getElementById("name_Intr").innerHTML=txt[8][0];
		break;
		
		case 9:
		document.getElementById("caption_Intr").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		document.getElementById("name_Elev_Top").innerHTML=txt[9][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("name_Elev_Top").innerHTML=txt[10][0];
		document.getElementById("name_Elev_Bot").innerHTML=txt[10][1];
		break;
		
		case 11:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("name").className="";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[11][0];
		break;
		
		case 12:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Extr").style.visibility="visible";
		document.getElementById("name_Extr").innerHTML=txt[12][0];
		break;
		
		case 13:
		document.getElementById("name_Extr").innerHTML=txt[13][0];
		break;
		
		case 14:
		document.getElementById("caption_Extr").style.visibility="hidden";
		break;
	}
}