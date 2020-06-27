// JavaScript Document
// PWHR

"use strict";

var i = 0;
var img = [];
img[0] = "PWHR_Rend.jpg";
img[1] = "PWHR_Text.jpg";
img[2] = "PWHR_Plan.jpg";
img[3] = "PWHR_Axon.jpg";
img[4] = "PWHR_Extr.jpg";
img[5] = "PWHR_Rnd2.jpg";
img[6] = "PWHR_Ktch.jpg";
img[7] = "PWHR_Bedr.jpg";
img[8] = "PWHR_Liv2.jpg";
img[9] = "PWHR_Live.jpg";
var k = img.length-1;

var txt = [[]];
txt[3] = ["Axonometric of Renovated Area" , ""]
txt[4] = ["Exterior" , "While one of the two bedrooms on the first floor was lost, the front porch was restored to its original character to create a formal entry. A patio was added to the back of the building further increasing the amount of outdoor space."]
txt[5] = ["Rendering of Kitchen" , ""]

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
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name").className="invert";
		document.getElementById("desc").className="invert";
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="";
		document.getElementById("desc").className="";
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
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
		document.getElementById("caption_Plan").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="invert";
		document.getElementById("desc").className="invert";
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name").className="";
		document.getElementById("desc").className="";
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption").style.visibility="hidden";
		break;
	}
}