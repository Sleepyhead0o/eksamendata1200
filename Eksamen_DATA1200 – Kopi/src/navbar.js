//Navigasjonsbar
function closeMenu() {
    var x = document.getElementById("hoved-navbar");
    if (x.className === "navbar"){
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}