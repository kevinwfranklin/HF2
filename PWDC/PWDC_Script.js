// JavaScript Document
// PWDC

"use strict";

var i = 0;
var img = [];
img[0] = "PWDC_Entr.jpg";
img[1] = "PWDC_Text.jpg";
img[2] = "PWDC_Phs1.jpg";
img[3] = "PWDC_Phs2.jpg";
img[4] = "PWDC_Phs3.jpg";
img[5] = "PWDC_Phs4.jpg";
img[6] = "PWDC_Skch.jpg";
img[7] = "PWDC_Road.jpg";
img[8] = "PWDC_Lgoo.jpg";
var k = img.length-1;

var txt = [[]];
txt[2] = ["Phase One", "The first phase consists of construction of the Science Building, which is to house exhibition space and a laboratory for high-school students to learn via hands-on activities. Construction of the entire parking lot is included in this phase, to allow for early establishment of the cypress trees."]
txt[3] = ["Phase Two", "The second phase consists of installing the constructed wetlands, pump room, and nature exhibit for outdoor lessons. Since the original proposal, the constructed wetlands has been prioritized as the first phase and the nature exhibit is to be expanded in size."]
txt[4] = ["Phase Three", "The third phase consists of construction of an amphitheatre and pool dedicated to Louisiana's working coast. The building would include space for exhibits and terraced seating for outdoor performances, lectures, or film screenings."]
txt[5] = ["Phase Four", "The fourth and final phase consists of construction of a traveling exhibit hall, allowing the Center to bring relevant exhibits to the Houma area. A tower which will be a focal point for the campus will allow students to observe the wetlands from a different perspective."]
txt[7] = ["Entry to Parking Lot from Library Drive" , "Main Entry"]
txt[8] = ["Working Coast Amphitheatre" , "Constructed Wetlands & Nature Exhibit"]

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
		document.getElementById("summary").style.visibility="visible";
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 2:
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption_Skch").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption_Rndr").style.visibility="hidden";
		document.getElementById("caption_Skch").style.visibility="visible";
		break;
		
		case 7:
		document.getElementById("name_Rndr_Top").className="invert";
		document.getElementById("name_Rndr_Top").innerHTML=txt[7][0];
		document.getElementById("name_Rndr_Bot").innerHTML=txt[7][1];
		break;
		
		case 8:
		document.getElementById("caption_Rndr").style.visibility="visible";
		document.getElementById("name_Rndr_Top").className="";
		document.getElementById("name_Rndr_Top").innerHTML=txt[8][0];
		document.getElementById("name_Rndr_Bot").innerHTML=txt[8][1];
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
		document.getElementById("caption_Rndr").style.visibility="hidden";
		break;
		
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
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Skch").style.visibility="visible";
		break;
		
		case 7:
		document.getElementById("caption_Skch").style.visibility="hidden";
		document.getElementById("caption_Rndr").style.visibility="visible";
		document.getElementById("name_Rndr_Top").className="invert";
		document.getElementById("name_Rndr_Top").innerHTML=txt[7][0];
		document.getElementById("name_Rndr_Bot").innerHTML=txt[7][1];
		break;
		
		case 8:
		document.getElementById("name_Rndr_Top").className="";
		document.getElementById("name_Rndr_Top").innerHTML=txt[8][0];
		document.getElementById("name_Rndr_Bot").innerHTML=txt[8][1];
		break;
	}
}