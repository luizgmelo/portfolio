function changeMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

function checkWindow() {
    if (window.innerWidth >= 768) {
        menu.style.display = "inline-block"
    } else {
        menu.style.display = "none"
    }
}
