function showHomePage() {
  document.getElementById("About us").style.display = "block";
}

function showDestinationsWeveExploredpage() {
  document.getElementById("About us").style.display = "none";
  document.getElementById("Packing Tips").style.display = "none";
  document.getElementById("Guides").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display =
    "block";
}
function showPackingTipspage() {
  document.getElementById("About us").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display = "none";
  document.getElementById("Guides").style.display = "none";
  document.getElementById("Packing Tips").style.display = "block";
}
function showGuidespage() {
  document.getElementById("About us").style.display = "none";
  document.getElementById("Packing Tips").style.display = "none";
  document.getElementById("Destinations We've Explored").style.display = "none";
  document.getElementById("Guides").style.display = "block";
}
showHomePage();

var DestinationsWeveExploredLink =
  document.querySelectorAll("#top-menu-bar a")[1];
DestinationsWeveExploredLink.addEventListener(
  "click",
  showDestinationsWeveExploredpage
);

var PackingTipsLink = document.querySelectorAll("#top-menu-bar a")[2];
PackingTipsLink.addEventListener("click", showPackingTipspage);

var GuidesLink = document.querySelectorAll("#top-menu-bar a")[3];
GuidesLink.addEventListener("click", showGuidespage);
