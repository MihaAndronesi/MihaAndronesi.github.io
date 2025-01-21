function hide(id) {
  document.getElementById(id).style.display = "none";
}
function showAboutus() {
  hide("Packing Tips");
  hide("Guides");
  hide("Destinations");
  document.getElementById("Aboutus").style.display = "block";
}

function showDestinationspage() {
  hide("Aboutus");
  hide("Packing Tips");
  hide("Guides");
  document.getElementById("Destinations").style.display = "block";
}
function showPackingTipspage() {
  hide("Aboutus");
  hide("Destinations");
  hide("Guides");
  document.getElementById("Packing Tips").style.display = "block";
}
function showGuidespage() {
  hide("Aboutus");
  hide("Packing Tips");
  hide("Destinations");
  document.getElementById("Guides").style.display = "block";
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
