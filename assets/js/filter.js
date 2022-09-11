function toggleMenu(event, menuBoxName) {
    let currentMenu = event.currentTarget;
    let currentTriangle = currentMenu.firstChild;
    let currentMenuBox = document.getElementById(menuBoxName);
    
    currentTriangle.classList.toggle("rotate");

    if(currentMenuBox.style.display === "block") {
        currentMenuBox.style.display = "none";
    } else {
        currentMenuBox.style.display = "block";
    }
};