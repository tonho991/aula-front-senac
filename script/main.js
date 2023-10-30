function showMenuDown() {
    var menu = document.getElementById("menu");
    var toolbar = document.getElementById("item1");
    var hamburger = document.getElementById("icon-hamburger");

    if (menu.className === "menu") {
        menu.className += " responsive";
        toolbar.className += " responsive";
        hamburger.textContent = "close"

    } else {
        menu.className = "menu";
        toolbar.className = "toolbar"
        hamburger.textContent = "menu"
    }
}

function fabMouseEnter() {
    document.getElementById("fab").style.animation = "expandIn 0.3s ease-out forwards";
    document.getElementById("fab-title").style.display = "block"
}

function fabMouseLeave() {
    document.getElementById("fab").style.animation = "expandOut 0.3s ease-out forwards"
    document.getElementById("fab-title").style.display = "none"
}

function fabClick() {
    window.location.href = "/pedido.html"
}