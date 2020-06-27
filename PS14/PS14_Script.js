// JavaScript Document
// PS14

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PS14_Ctyd.jpg", "solid"];
img[1] = ["PS14_Text.jpg", "solid"];
img[2] = ["PS14_Site.jpg", "solid"];
img[3] = ["PS14_Frm1.jpg", "solid"];
img[4] = ["PS14_Frm2.jpg", "solid"];
img[5] = ["PS14_Frm3.jpg", "solid"];
img[6] = ["PS14_Frm4.jpg", "solid"];
img[7] = ["PS14_Cutf.jpg", "solid"];
img[8] = ["PS14_Prog.jpg", "solid"];
img[9] = ["PS14_Plnl.jpg", "solid"];
img[10] = ["PS14_Plnu.jpg", "solid"];
img[11] = ["PS14_Elev.jpg", "solid"];
img[12] = ["PS14_Sect.jpg", "solid"];
img[13] = ["PS14_Axon.jpg", "solid"];
img[14] = ["PS14_Modl.png", "none"];
img[15] = ["PS14_Road.jpg", "solid"];
img[16] = ["PS14_Haze.jpg", "solid"];
var k = img.length-1;

var txt = [];
txt[2] = "Site Plan";
txt[3] = "Initial Bands";
txt[4] = "Adapt to Topography";
txt[5] = "Orient Towards View of Port of LA";
txt[6] = "Subtract to Form Outdoor Space";
txt[9] = "Lower Level Plan";
txt[10] = "Upper Level Plan";
txt[11] = "Building Elevations";
txt[12] = "Building Sections";
txt[15] = "Perspective from Crest Road";
txt[16] = "Perspective of Courtyard";


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
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption_Form").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("desc").className="invert";
		document.getElementById("desc").innerHTML=txt[2];
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
		document.getElementById("caption_Cutf").style.visibility="hidden";
		document.getElementById("caption_Form").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[6];
		break;
		
		case 7:
		document.getElementById("caption_Prog").style.visibility="hidden";
		document.getElementById("caption_Cutf").style.visibility="visible";
		break;
		
		case 8:
		document.getElementById("caption_Prog").style.visibility="visible";
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 9:
		document.getElementById("desc").innerHTML=txt[9];
		break;
		
		case 10:
		document.getElementById("desc").className="";
		document.getElementById("desc").innerHTML=txt[10];
		break;
		
		case 11:
		document.getElementById("desc").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("caption_Axon").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("desc").className="invert";
		document.getElementById("desc").innerHTML=txt[12];
		break;
		
		case 13:
		document.getElementById("caption_Modl").style.visibility="hidden";
		document.getElementById("caption_Axon").style.visibility="visible";
		break;
		
		case 14:
		document.getElementById("caption_Road").style.visibility="hidden";
		document.getElementById("caption_Modl").style.visibility="visible";
		break;
		
		case 15:
		document.getElementById("desc_Road").className="invert";
		document.getElementById("desc_Road").innerHTML=txt[15];
		break;
		
		case 16:
		document.getElementById("caption_Road").style.visibility="visible";
		document.getElementById("desc_Road").className="";
		document.getElementById("desc_Road").innerHTML=txt[16];
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
		case 0:
		document.getElementById("caption_Road").style.visibility="hidden";
		break;
	
		case 1:
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("summary").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("desc").className="invert";
		document.getElementById("desc").innerHTML=txt[2];
		break;
		
		case 3:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Form").style.visibility="visible";
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
		document.getElementById("caption_Form").style.visibility="hidden";
		document.getElementById("caption_Cutf").style.visibility="visible";
		break;
		
		case 8:
		document.getElementById("caption_Cutf").style.visibility="hidden";
		document.getElementById("caption_Prog").style.visibility="visible";
		break;
		
		case 9:
		document.getElementById("caption_Prog").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("desc").className="";
		document.getElementById("desc").innerHTML=txt[9];
		break;
		
		case 10:
		document.getElementById("desc").innerHTML=txt[10];
		break;
		
		case 11:
		document.getElementById("desc").className="invert";
		document.getElementById("desc").innerHTML=txt[11];
		break;
		
		case 12:
		document.getElementById("desc").innerHTML=txt[12];
		break;
		
		case 13:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Axon").style.visibility="visible";
		break;
		
		case 14:
		document.getElementById("caption_Axon").style.visibility="hidden";
		document.getElementById("caption_Modl").style.visibility="visible";
		break;
		
		case 15:
		document.getElementById("caption_Modl").style.visibility="hidden";
		document.getElementById("caption_Road").style.visibility="visible";
		document.getElementById("desc_Road").className="invert";
		document.getElementById("desc_Road").innerHTML=txt[15];
		break;
		
		case 16:
		document.getElementById("desc_Road").className="";
		document.getElementById("desc_Road").innerHTML=txt[16];
		break;
	}
}