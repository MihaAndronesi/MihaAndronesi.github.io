function showAboutus() {
  document.getElementById("Aboutus").style.display = "block";
  document.getElementById("Packing Tips").style.display = "none";
  document.getElementById("Guides").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display = "none";
}

function showDestinationspage() {
  document.getElementById("Aboutus").style.display = "none";
  document.getElementById("Packing Tips").style.display = "none";
  document.getElementById("Guides").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display =
    "block";
}
function showPackingTipspage() {
  document.getElementById("Aboutus").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display = "none";
  document.getElementById("Guides").style.display = "none";
  document.getElementById("Packing Tips").style.display = "block";
}
function showGuidespage() {
  document.getElementById("Aboutus").style.display = "none";
  document.getElementById("Packing Tips").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display = "none";
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
