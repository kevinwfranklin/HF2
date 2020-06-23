// JavaScript Document
// PS10HD

"use strict";

var i = 0;
var img = [];
img[0] = "PS10HD_Frnd.jpg";
img[1] = "PS10HD_Text.jpg";
img[2] = "PS10HD_Elev.jpg";
img[3] = "PS10HD_Plan.jpg";
img[4] = "PS10HD_Ctyd.jpg";
img[5] = "PS10HD_Sect.jpg";
var k = img.length-1;

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
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		document.getElementById("title").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Ctyd").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Ctyd").style.visibility="visible";
		document.getElementById("caption_Sect").style.visibility="hidden";
		break;
		
		case 5:
		document.getElementById("title").style.visibility="hidden";
		document.getElementById("caption_Sect").style.visibility="visible";
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
		document.getElementById("caption_Sect").style.visibility="hidden";
		document.getElementById("title").style.visibility="visible";
		break;
		
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("title").style.visibility="hidden";
		document.getElementById("summary").style.visibility="hidden";
		document.getElementById("caption_Elev").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Elev").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption_Ctyd").style.visibility="visible";
		break;
		
		case 5:
		document.getElementById("caption_Sect").style.visibility="visible";
		document.getElementById("caption_Ctyd").style.visibility="hidden";
		break;
	}
}