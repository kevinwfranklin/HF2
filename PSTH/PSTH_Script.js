// JavaScript Document
// PSTH

"use strict";

var i = 0;
var img = [[]];
img[0] = ["PSTH_Laum.jpg", "solid"];
img[1] = ["PSTH_Text.jpg", "solid"];
img[2] = ["PSTH_Natn.png", "none"];
img[3] = ["PSTH_Flor.png", "none"];
img[4] = ["PSTH_Thes.png", "none"];
img[5] = ["PSTH_Plnt.png", "none"];
img[6] = ["PSTH_Urbn.jpg", "solid"];
img[7] = ["PSTH_Prog.jpg", "solid"];
img[8] = ["PSTH_Traf.jpg", "solid"];
img[9] = ["PSTH_Frm1.jpg", "solid"];
img[10] = ["PSTH_Frm2.jpg", "solid"];
img[11] = ["PSTH_Frm3.jpg", "solid"];
img[12] = ["PSTH_Frm4.jpg", "solid"];
img[13] = ["PSTH_Frm5.jpg", "solid"];
img[14] = ["PSTH_Pln1.jpg", "solid"];
img[15] = ["PSTH_Pln2.jpg", "solid"];
img[16] = ["PSTH_Pln3.jpg", "solid"];
img[17] = ["PSTH_Gonc.jpg", "solid"];
img[18] = ["PSTH_Exel.jpg", "solid"];
img[19] = ["PSTH_Trin.jpg", "solid"];
img[20] = ["PSTH_Mdl1.png", "none"];
img[21] = ["PSTH_Mdl2.png", "none"];
img[22] = ["PSTH_Cour.jpg", "solid"];
var k = img.length-1;

var txt = [[]];
txt[4] = ["Thesis Argument" , "While transit hubs are often highly visible projects that establish regional connections, transit notes &ndash; intermediate stops along a route &ndash; are just as important as they connect local population clusters that would not otherwise have access to the network. The problem is, as of now, many of these nodes are nothing more than a covered place to wait for the train. As more people begin riding trains, it will be important to think of these places as more dynamic hubs integrated into the city."]
txt[5] = ["Plant City" , "Plant City is one of the largest cities in central Florida without an Amtrak stop, and is one of the most likely to be connected in the near future. The historic downtown &ndash; the social heart of the city &ndash; straddles the old South Florida Railroad where trains carrying automobiles, phosphate, and orange juice pass by. The addition of passengers to this line provides the opportunity to create a new node that can reinforce the importance of the city center. Through the addition of supplimental programs (a bookstore and small grocery store) this small transit node can transcend its infrastructural role and become a functioning part of the city."]
txt[6] = ["Urban Strategy" , "The new building bounds the park"]
txt[7] = ["Program Strategy" , "Functions added to the station compliment existing ones nearby"]
txt[8] = ["Access + Entry Strategy" , "The site must accommodate multiple types of entry from all four sides"]
txt[9] = ["1.) Stratify Program Vertically" , "Due to the small footprint of the site, the bookstore and grocery store are situated above the train station"]
txt[10] = ["2.) Wall of Shelves" , "The shelves, being the common element between the programs, are consolidated into a single apparatus"]
txt[11] = ["3.) Push + Pull" , "The wall is deformed to create nodal (rather than linear) breakout spaces in the public space below"]
txt[12] = ["4.) Connect Entries" , "The wall of shelves is carved to allow circulation through and entries from all for sides to flow together"]
txt[13] = ["5.) Extend Paths" , "Floor slabs are extended to define entries and create sub-spaces away from the shelving"]
txt[14] = ["First Floor Plan" , "Train Station"]
txt[15] = ["Second Floor Plan" , "Grocery Store"]
txt[16] = ["Third Floor Plan" , "Bookstore"]
txt[17] = ["Transverse Elevation & Section" , ""]
txt[18] = ["Longitudinal Elevation & Section" , ""]
txt[20] = ["Model" , "The final model was built at 1/8\"=1\'-0\" to illustrate the spaces inside. The base measures 3' x 4'."]
txt[21] = ["Model" , "The shelving was laser cut out of .02\" styrene with exquisite care so as to avoid burning. Notching allowed for an egg-crate like assembly with minimal gluing."]
txt[22] = ["Exploded Perspective" , ""]

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
		document.getElementById("caption_Natn").style.visibility="hidden";
		document.getElementById("summary").style.visibility="visible";
		break;
		
		case 2:
		document.getElementById("caption_Flor").style.visibility="hidden";
		document.getElementById("caption_Natn").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Thes").style.visibility="hidden";
		document.getElementById("caption_Flor").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("name_Thes").innerHTML=txt[4][0];
		document.getElementById("desc_Thes").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Thes").style.visibility="visible";
		document.getElementById("name_Thes").innerHTML=txt[5][0];
		document.getElementById("desc_Thes").innerHTML=txt[5][1];
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
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("name").innerHTML=txt[10][0];
		document.getElementById("desc").innerHTML=txt[10][1];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11][0];
		document.getElementById("desc").innerHTML=txt[11][1];
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[12][0];
		document.getElementById("desc").innerHTML=txt[12][1];
		break;
		
		case 13:
		document.getElementById("name").innerHTML=txt[13][0];
		document.getElementById("desc").innerHTML=txt[13][1];
		break;
		
		case 14:
		document.getElementById("name").innerHTML=txt[14][0];
		document.getElementById("desc").innerHTML=txt[14][1];
		break;
		
		case 15:
		document.getElementById("name").innerHTML=txt[15][0];
		document.getElementById("desc").innerHTML=txt[15][1];
		break;
		
		case 16:
		document.getElementById("name").innerHTML=txt[16][0];
		document.getElementById("desc").innerHTML=txt[16][1];
		break;
		
		case 17:
		document.getElementById("name").innerHTML=txt[17][0];
		document.getElementById("desc").innerHTML=txt[17][1];
		break;
		
		case 18:
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[18][0];
		document.getElementById("desc").innerHTML=txt[18][1];
		break;
		
		case 19:
		document.getElementById("caption_Modl").style.visibility="hidden";
		break;
		
		case 20:
		document.getElementById("name_Modl").innerHTML=txt[20][0];
		document.getElementById("desc_Modl").innerHTML=txt[20][1];
		break;
		
		case 21:
		document.getElementById("caption").style.visibility="hidden";
		document.getElementById("caption_Modl").style.visibility="visible";
		document.getElementById("name_Modl").innerHTML=txt[21][0];
		document.getElementById("desc_Modl").innerHTML=txt[21][1];
		break;
		
		case 22:
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
	pic.style.outlineStyle=img[i][1];
	pic.src = img[i][0];
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
		document.getElementById("caption_Natn").style.visibility="visible";
		break;
		
		case 3:
		document.getElementById("caption_Natn").style.visibility="hidden";
		document.getElementById("caption_Flor").style.visibility="visible";
		break;
		
		case 4:
		document.getElementById("caption_Flor").style.visibility="hidden";
		document.getElementById("caption_Thes").style.visibility="visible";
		document.getElementById("name_Thes").innerHTML=txt[4][0];
		document.getElementById("desc_Thes").innerHTML=txt[4][1];
		break;
		
		case 5:
		document.getElementById("name_Thes").innerHTML=txt[5][0];
		document.getElementById("desc_Thes").innerHTML=txt[5][1];
		break;
		
		case 6:
		document.getElementById("caption_Thes").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[6][0];
		document.getElementById("desc").innerHTML=txt[6][1];
		break;
		
		case 7:
		document.getElementById("name").innerHTML=txt[7][0];
		document.getElementById("desc").innerHTML=txt[7][1];
		break;
		
		case 8:
		document.getElementById("name").innerHTML=txt[8][0];
		document.getElementById("desc").innerHTML=txt[8][1];
		break;
		
		case 9:
		document.getElementById("name").innerHTML=txt[9][0];
		document.getElementById("desc").innerHTML=txt[9][1];
		break;
		
		case 10:
		document.getElementById("name").innerHTML=txt[10][0];
		document.getElementById("desc").innerHTML=txt[10][1];
		break;
		
		case 11:
		document.getElementById("name").innerHTML=txt[11][0];
		document.getElementById("desc").innerHTML=txt[11][1];
		break;
		
		case 12:
		document.getElementById("name").innerHTML=txt[12][0];
		document.getElementById("desc").innerHTML=txt[12][1];
		break;
		
		case 13:
		document.getElementById("name").innerHTML=txt[13][0];
		document.getElementById("desc").innerHTML=txt[13][1];
		break;
		
		case 14:
		document.getElementById("name").innerHTML=txt[14][0];
		document.getElementById("desc").innerHTML=txt[14][1];
		break;
		
		case 15:
		document.getElementById("name").innerHTML=txt[15][0];
		document.getElementById("desc").innerHTML=txt[15][1];
		break;
		
		case 16:
		document.getElementById("name").innerHTML=txt[16][0];
		document.getElementById("desc").innerHTML=txt[16][1];
		break;
		
		case 17:
		document.getElementById("name").innerHTML=txt[17][0];
		document.getElementById("desc").innerHTML=txt[17][1];
		break;
		
		case 18:
		document.getElementById("name").innerHTML=txt[18][0];
		document.getElementById("desc").innerHTML=txt[18][1];
		break;
		
		case 19:
		document.getElementById("caption").style.visibility="hidden";
		break;
		
		case 20:
		document.getElementById("caption_Modl").style.visibility="visible";
		document.getElementById("name_Modl").innerHTML=txt[20][0];
		document.getElementById("desc_Modl").innerHTML=txt[20][1];
		break;
		
		case 21:
		document.getElementById("name_Modl").innerHTML=txt[21][0];
		document.getElementById("desc_Modl").innerHTML=txt[21][1];
		break;
		
		case 22:
		document.getElementById("caption_Modl").style.visibility="hidden";
		document.getElementById("caption").style.visibility="visible";
		document.getElementById("name").innerHTML=txt[22][0];
		document.getElementById("desc").innerHTML=txt[22][1];
		break;
	}
}