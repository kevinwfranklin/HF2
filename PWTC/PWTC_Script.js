// JavaScript Document
// PWTC

"use strict";

var i = 0;
var img = [];
img[0] = ["PWTC_Nite.jpg"];
img[1] = ["PWTC_Text.jpg"];
img[2] = ["PWTC_Blue.jpg"];
img[3] = ["PWTC_Vert.jpg"];
img[4] = ["PWTC_Span.jpg"];
img[5] = ["PWTC_Ales.jpg"];
img[6] = ["PWTC_Kard.jpg"];
img[7] = ["PWTC_Musm.jpg"];
img[8] = ["PWTC_Roof.jpg"];
var k = img.length-1;

var txt = [[]];
txt[2] = ["Convention Center Blvd. Elevation" , ""];
txt[3] = ["View from Canal Street" , "With the back side of Harrah's Casino to the North, Convention Center Blvd. between Canal and Poydras has very little activity despite its central location. A ground floor restauraunt will encourage additional pedestrian activity."];
txt[4] = ["View from Spanish Plaza", "Train tracks between Spanish Plaza and 2 Canal Street currently sever the connection between the two. A new staircase is designed to connect the two, making amenities along the river accessible to tenants and hotel guests."]
txt[5] = ["View from Convention Center Boulevard", "A new addition on a currently underutilized grassy area will provide additional space for ballrooms, offices, and back-of-house spaces. The rooftop becomes an ideal location for the hotel pool."]
txt[6] = ["View of Restaurant", "The ground floor, with its double height spaces serves as an ideal space for a restaurant. The terrace on the 3rd level offers breakout spaces from the meeting rooms."]
txt[7] = ["Louisiana Maritime Museum & Ferry Terminal", "As and extension of this project, redevelopment of the historic Algiers Ferry Terminal was proposed. Most importantly, it would allow for a connection between Spanish Plaza and the Audubon Aquarium, which is currently severed."]


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
		document.getElementById("caption_Vert").style.visibility="hidden";
		document.getElementById("caption_Blue").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("name_Vert").innerHTML=txt[2][0];
		document.getElementById("desc_Vert").innerHTML=txt[2][1];
		document.getElementById("caption_Blue").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Vert").style.visibility="visible";
		document.getElementById("name_Vert").innerHTML=txt[3][0];
		document.getElementById("desc_Vert").innerHTML=txt[3][1];
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
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
		
		case 7:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[7][0];
		document.getElementById("desc").innerHTML=txt[7][1];
		break;
	}
}

function forward_img(){
	if(i < k) {i++;}
	else {i = 0;}
	var pic = document.getElementById("imag");
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
		document.getElementById("caption_Vert").style.visibility="visible";
		document.getElementById("name_Vert").innerHTML=txt[2][0];
		document.getElementById("desc_Vert").innerHTML=txt[2][1];
		document.getElementById("caption_Blue").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Blue").style.visibility="hidden";
		document.getElementById("name_Vert").innerHTML=txt[3][0];
		document.getElementById("desc_Vert").innerHTML=txt[3][1];
		break;
		
		case 4:
		document.getElementById("caption_Vert").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[4][0];
		document.getElementById("desc").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[7][0];
		document.getElementById("desc").innerHTML=txt[7][1];
		break;
		
		case 8:
		document.getElementById("caption").style.visibility="hidden";
		break;
	}
}