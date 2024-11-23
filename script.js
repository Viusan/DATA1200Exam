//This function is for the hamburger menu which is displayed on all sites
function toggleMenu(){
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        document.getElementById("osloMetLogo").src = "Images/indexPage/oslometLogoWhite.png";
        document.getElementById("osloMetLogoContainer").style.backgroundColor = '#162957';
    } else {
        menu.classList.add("hidden");
        document.getElementById("osloMetLogo").src = "Images/indexPage/oslometLogo.png";
        document.getElementById("osloMetLogoContainer").style.backgroundColor = '#fff'; 
    }
}


//This is for the collapsable menu in index page
var coll = document.getElementsByClassName("collapsible");//Gets the button for the collapsible menus
for (var i = 0; i < coll.length; i++) {//Loops through how many collapsibles there are
  coll[i].addEventListener("click", function() {//Adds a function to the button/collapsible
    this.classList.toggle("active");//Gives a class to the collapsible when it is pressed
    var content = this.nextElementSibling;//This is what tells which collapsible you pressed, so not all activates at once
    if (content.style.display === "block") {
      content.style.display = "none";//Shows content
    } else {
      content.style.display = "block";//Closes content
    }
  });
}

var img = document.querySelector('#radio-1');
if (img){
  img.checked = true;
}
