// JavaScript Document
// PFAT

"use strict";

var i = 0;
var img = [];
img[0] = "PFAT_Titl.jpg";
img[1] = "PFAT_Text.jpg";
img[2] = "PFAT_Over.jpg";
img[3] = "PFAT_Pln1.jpg";
img[4] = "PFAT_Sec1.jpg";
img[5] = "PFAT_Pln2.jpg";
img[6] = "PFAT_Sec2.jpg";
img[7] = "PFAT_Prk1.jpg";
img[8] = "PFAT_Prk2.jpg";
img[9] = "PFAT_Pln3.jpg";
img[10] = "PFAT_Sec3.jpg";
img[11] = "PFAT_Prk3.jpg";
img[12] = "PFAT_Pln4.jpg";
img[13] = "PFAT_Sec4.jpg";
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
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption").style.visibility="visible";
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
		break;
	}
}