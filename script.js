/*
	Student Name: Katelyn Bellamy
	File Name: script.js
	Date: 4/21/25
*/

//Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
	menu.style.display = "none";
	logo.style.display = "block";
} else {
	menu.style.display = "block";
	logo.style.display = "none";
	}
}