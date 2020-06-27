// JavaScript Document
// PSSF

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PSSF_Blur.jpg", "solid"];
img[1] = ["PSSF_Text.jpg", "solid"];
img[2] = ["PSSF_Dayl.jpg", "solid"];
img[3] = ["PSSF_Dayn.jpg", "solid"];
img[4] = ["PSSF_Proj.jpg", "solid"];
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
		document.getElementById("summary").style.visibility="visible";
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
		break;
	}
}