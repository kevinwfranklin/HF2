// JavaScript Document
// PLIM

"use strict";

var i = 0;
var img = [];
img[0] = "PLIM_Main.jpg";
img[1] = "PLIM_Text.jpg";
img[2] = "PLIM_Site.jpg";
img[3] = "PLIM_Plan.jpg";
img[4] = "PLIM_Intr.jpg";
img[5] = "PLIM_Elev.jpg";
img[6] = "PLIM_Cedr.jpg";
img[7] = "PLIM_Garg.jpg";

var k = img.length-1;

var txt = [[]];
txt[2] = ["Site Plan" , ""]
txt[4] = ["Main Corridor" , "Interior finishes were kept to a simple palette, with neutral colors"]

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
		document.getElementById("desc").className="invert";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("name").className="";
		document.getElementById("desc").className="";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption_Elev").style.visibility="visible";
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
		document.getElementById("desc").className="invert";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("name").className="";
		document.getElementById("desc").className="";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		break;
		
		case 6:
		document.getElementById("caption_Elev").style.visibility="hidden";
		break;
	}
}