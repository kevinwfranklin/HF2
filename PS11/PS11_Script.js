// JavaScript Document
// PS11

"use strict";

var i = 0;
var img = [];
img[0] = "PS11_Twil.jpg";
img[1] = "PS11_Text.jpg";
img[2] = "PS11_Dia1.jpg";
img[3] = "PS11_Dia2.jpg";
img[4] = "PS11_Dia3.jpg";
img[5] = "PS11_Dia4.jpg";
img[6] = "PS11_Dia5.jpg";
img[7] = "PS11_Dia6.jpg";
img[8] = "PS11_Pln1.jpg";
img[9] = "PS11_Pln2.jpg";
img[10] = "PS11_Pln3.jpg";
img[11] = "PS11_Ele1.jpg";
img[12] = "PS11_Ele2.jpg";
img[13] = "PS11_Clai.jpg";
img[14] = "PS11_Libr.jpg";
img[15] = "PS11_Nbhd.jpg";
var k = img.length-1;


var txt = [];
txt[2] = ["Education Block"];
txt[3] = ["Subtract Vehicular Circulation"];
txt[4] = ["Plug-in Additional Program"];
txt[5] = ["Divide Into Pods"];
txt[6] = ["Intersect Plug-ins"];
txt[7] = ["Adapt Topography"];
txt[8] = ["First Floor Plan"];
txt[9] = ["Second Floor Plan"];
txt[10] = ["Third Floor Plan"];
txt[11] = ["South Claiborne Avenue Elevation & Section"];
txt[12] = ["Second Street Elevation & Section"];
txt[13] = ["South Claiborne Avenue Entrance"];
txt[14] = ["Perspective of Library"];
txt[15] = ["Willow Street Entrance"];


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
		document.getElementById("name").innerHTML=txt[2];
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6];
		break;
		
		case 7:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[7];
		break;
		
		case 8:
		document.getElementById("flor").innerHTML=txt[8];
		break;
		
		case 9:
		document.getElementById("flor").innerHTML=txt[9];
		break;
		
		case 10:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		document.getElementById("flor").innerHTML=txt[10];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("caption_Clai").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[12];
		break;
		
		case 13:
		document.getElementById("name_Clai").innerHTML=txt[13];
		break;
		
		case 14:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Clai").style.visibility="visible";
		document.getElementById("name_Clai").innerHTML=txt[14];
		break;
		
		case 15:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[15];
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
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[2];
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[7];
		break;
		
		case 8:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		document.getElementById("flor").innerHTML=txt[8];
		break;
		
		case 9:
		document.getElementById("flor").innerHTML=txt[9];
		break;
		
		case 10:
		document.getElementById("flor").innerHTML=txt[10];
		break;
		
		case 11:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[12];
		break;
		
		case 13:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Clai").style.visibility="visible";
		document.getElementById("name_Clai").innerHTML=txt[13];
		break;
		
		case 14:
		document.getElementById("name_Clai").innerHTML=txt[14];
		break;
		
		case 15:
		document.getElementById("caption_Clai").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[15];
		break;
	}
}