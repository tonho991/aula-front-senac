function showMenuDown() {
    var menu  = document.getElementById("menu");
    var toolbar = document.getElementById("item1");
    var hamburger = document.getElementById("icon-hamburger");

    if (menu.className === "menu") {
        menu.className += " responsive";
        toolbar.className += " responsive";
        hamburger.textContent="close"
        
    } else {
        menu.className = "menu";
        toolbar.className = "toolbar"
        hamburger.textContent="menu"
    }
  }