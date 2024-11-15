function toggleMenu(){
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        document.getElementById("menuIcon").style.color = "white"; 
    } else {
        menu.classList.add("hidden");
        document.getElementById("menuIcon").style.color = "black"; 

    }
}