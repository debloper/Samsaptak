header = document.getElementsByTagName("header");
function toggleContent(a) {
	if (a == "hide") {
		header.item(0).style.visibility = "collapse";
		header.item(0).style.opacity = "0";
	} else if (a == "show") {
		header.item(0).style.visibility = "visible";
		header.item(0).style.opacity = "1";
	}
}
