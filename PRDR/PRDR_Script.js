// JavaScript Document
// PRDR

"use strict";

var i = 0;
var img = [];
img[0] = "PRDR_Liv1.jpg";
img[1] = "PRDR_Text.jpg";
img[2] = "PRDR_Liv2.jpg";
img[3] = "PRDR_Folk.jpg";
img[4] = "PRDR_Flk2.jpg";
img[5] = "PRDR_Carv.jpg";
img[6] = "PRDR_Gus1.jpg";
img[7] = "PRDR_Gus2.jpg";
img[8] = "PRDR_Flor.jpg";
img[9] = "PRDR_Plt1.jpg";
img[10] = "PRDR_Plt2.jpg";
img[11] = "PRDR_Msy1.jpg";
img[12] = "PRDR_Msy2.jpg";
img[13] = "PRDR_Cans.jpg";
img[14] = "PRDR_Pcp1.jpg";
img[15] = "PRDR_Pcp2.jpg";
img[16] = "PRDR_Pft1.jpg";
img[17] = "PRDR_Pft2.jpg";
img[18] = "PRDR_Flyd.jpg";
img[19] = "PRDR_Carw.jpg";
img[20] = "PRDR_Carx.jpg";
img[21] = "PRDR_Sbps.jpg";
img[22] = "PRDR_Bgw1.jpg";
img[23] = "PRDR_Bgw2.jpg";
var k = img.length-1;

var txt = [[]];
txt[2] = ["Livingston High School" , "New Orleans, LA &ndash; Unbuilt (Perez, APC)"];
txt[3] = ["American Folk Art Museum Satellite Branch" , "New Orleans, LA &ndash; 2009 (Academic Project)"];
txt[5] = ["Carver Theater" , "Treme Neighborhood, New Orleans, LA &ndash; 2012 (Perez, APC)"];
txt[6] = ["Guste Phase III: 152 New Affordable Housing Units" , "New Orleans, LA &ndash; 2011 (Perez, APC)"];
txt[8] = ["Florida Avenue Housing Development" , "New Orleans, LA &ndash; 2015 (Perez, APC)"];
txt[9] = ["Platforms" , "Tulane Campus, New Orleans, LA &ndash; 2011 (Academic Competition)"];
txt[11] = ["New Orleans Int'l Airport Terminal Improvements" , "Kenner, LA &ndash; 2012 (Perez, APC)"];
txt[13] = ["Mississippi River BeanBoat" , "CANstruction Entry &ndash; 2012"];
txt[14] = ["Peacock Place Mixed-Use Development" , "Montgomery, AL &ndash; Unbuilt (Perez, APC)"];
txt[16] = ["Patrick F. Taylor Science & Technology Academy" , "Avondale, LA &ndash; 2011 (Perez, APC)"];
txt[18] = ["Floyd County Animal Shelter" , "Rome, GA &ndash; 2016 (Peacock Partnership)"];
txt[19] = ["Design for an Air Force Car Wash" , "Prototype &ndash; 2014 (Perez, APC)"];
txt[21] = ["St. Bernard Parish Sherriff's Office Substation" , "Arabi, LA &ndash; 2013 (Perez, APC)"];
txt[22] = ["BGW Braselton Dental Office" , "Braselton, GA &ndash; 2017 (Peacock Partnership)"];

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
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 4:
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
		
		case 8:
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 10:
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[10][0];
		document.getElementById("desc").innerHTML=txt[10][1];
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[11][0];
		document.getElementById("desc").innerHTML=txt[11][1];
		break;
		
		case 13:
		document.getElementById("name").innerHTML=txt[13][0];
		document.getElementById("desc").innerHTML=txt[13][1];
		break;
		
		case 15:
		document.getElementById("name").innerHTML=txt[14][0];
		document.getElementById("desc").innerHTML=txt[14][1];
		break;
		
		case 17:
		document.getElementById("name").innerHTML=txt[16][0];
		document.getElementById("desc").innerHTML=txt[16][1];
		break;
		
		case 18:
		document.getElementById("name").innerHTML=txt[18][0];
		document.getElementById("desc").innerHTML=txt[18][1];
		break;
		
		case 20:
		document.getElementById("name").innerHTML=txt[19][0];
		document.getElementById("desc").innerHTML=txt[19][1];
		break;
		
		case 21:
		document.getElementById("name").innerHTML=txt[21][0];
		document.getElementById("desc").innerHTML=txt[21][1];
		break;
		
		case 23:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[22][0];
		document.getElementById("desc").innerHTML=txt[22][1];
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
		document.getElementById("name").innerHTML=txt[2][0];
		document.getElementById("desc").innerHTML=txt[2][1];
		break;
		
		case 3:
		document.getElementById("name").innerHTML=txt[3][0];
		document.getElementById("desc").innerHTML=txt[3][1];
		break;
		
		case 5:
		document.getElementById("name").innerHTML=txt[5][0];
		document.getElementById("desc").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
		
		case 8:
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11][0];
		document.getElementById("desc").innerHTML=txt[11][1];
		break;
		
		case 13:
		document.getElementById("name").innerHTML=txt[13][0];
		document.getElementById("desc").innerHTML=txt[13][1];
		break;
		
		case 14:
		document.getElementById("name").innerHTML=txt[14][0];
		document.getElementById("desc").innerHTML=txt[14][1];
		break;
		
		case 16:
		document.getElementById("name").innerHTML=txt[16][0];
		document.getElementById("desc").innerHTML=txt[16][1];
		break;
		
		case 18:
		document.getElementById("name").innerHTML=txt[18][0];
		document.getElementById("desc").innerHTML=txt[18][1];
		break;
		
		case 19:
		document.getElementById("name").innerHTML=txt[19][0];
		document.getElementById("desc").innerHTML=txt[19][1];
		break;
		
		case 21:
		document.getElementById("name").innerHTML=txt[21][0];
		document.getElementById("desc").innerHTML=txt[21][1];
		break;
		
		case 22:
		document.getElementById("name").innerHTML=txt[22][0];
		document.getElementById("desc").innerHTML=txt[22][1];
		break;
	}	
}