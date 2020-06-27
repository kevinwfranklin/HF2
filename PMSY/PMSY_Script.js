// JavaScript Document
// PMSY

"use strict";

var i = 0;
var img = [];
img[0] = "PMSY_Wtrm.jpg";
img[1] = "PMSY_Text.jpg";
img[2] = "PMSY_PlnB.jpg";
img[3] = "PMSY_PlnT.jpg";
img[4] = "PMSY_Exs1.jpg";
img[5] = "PMSY_Bagg.jpg";
img[6] = "PMSY_Exs2.jpg";
img[7] = "PMSY_Jazz.jpg";
img[8] = "PMSY_Exs3.jpg";
img[9] = "PMSY_Tict.jpg";
img[10] = "PMSY_Mtrm.jpg";
img[11] = "PMSY_Para.jpg";
img[12] = "PMSY_Nite.jpg";
var k = img.length-1;

var txt = [];
txt[2] = "Baggage Claim Level"
txt[3] = "Ticketing Level"
txt[4] = "Baggage Claim Before Renovation";
txt[5] = "Baggage Claim After Renovation";
txt[6] = "Jazz Alley Before Renovation";
txt[7] = "Jazz Alley After Renovation";
txt[8] = "Main Terminal Before Renovation";
txt[9] = "Main Terminal After Renovation";
txt[11] = "Information Kiosk in Parabola";
txt[12] = "West Terminal at Night";

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
		document.getElementById("caption_Legn").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("name_Legn").innerHTML=txt[2];
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Plan").style.visibility="visible";
		document.getElementById("caption_Legn").style.visibility="visible";
		document.getElementById("name_Legn").innerHTML=txt[3];
		break;
		
		case 4:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[4];
		break;
		
		case 5:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[5];
		break;
		
		case 6:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[6];
		break;
		
		case 7:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[7];
		break;
		
		case 8:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[8];
		break;
		
		case 10:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[9];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[12];
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
		document.getElementById("caption_Plan").style.visibility="visible";
		document.getElementById("caption_Legn").style.visibility="visible";
		document.getElementById("name_Legn").innerHTML=txt[2];
		break;
		
		case 3:
		document.getElementById("name_Legn").innerHTML=txt[3];
		break;
		
		case 4:
		document.getElementById("caption_Plan").style.visibility="hidden";
		document.getElementById("caption_Legn").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[4];
		break;
		
		case 5:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[5];
		break;
		
		case 6:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[6];
		break;
		
		case 7:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[7];
		break;
		
		case 8:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[8];
		break;
		
		case 9:
		document.getElementById("name").className="invert";
		document.getElementById("name").innerHTML=txt[9];
		break;
		
		case 11:
		document.getElementById("name").className="";
		document.getElementById("name").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[12];
		break;
	}
}