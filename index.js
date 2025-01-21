function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function showAboutus() {
  hide("Packing Tips");
  hide("Guides");
  hide("Destinations");
  show("Aboutus");
}

function showDestinationspage() {
  hide("Aboutus");
  hide("Packing Tips");
  hide("Guides");
  show("Destinations");
}
function showPackingTipspage() {
  hide("Aboutus");
  hide("Destinations");
  hide("Guides");
  show("Packing Tips");
}
function showGuidespage() {
  hide("Aboutus");
  hide("Packing Tips");
  hide("Destinations");
  show("Guides");
}
showAboutus();

var AboutusLink = document.querySelectorAll("#top-menu-bar a")[0];
AboutusLink.addEventListener("click", showAboutus);

var DestinationsLink = document.querySelectorAll("#top-menu-bar a")[1];
DestinationsLink.addEventListener("click", showDestinationspage);

var PackingTipsLink = document.querySelectorAll("#top-menu-bar a")[2];
PackingTipsLink.addEventListener("click", showPackingTipspage);

var GuidesLink = document.querySelectorAll("#top-menu-bar a")[3];
GuidesLink.addEventListener("click", showGuidespage);
