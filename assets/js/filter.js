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

function showFilter() {
    let filterMenu = document.querySelector(".filterContainer");
    if(filterMenu.style.display === "flex") {
        filterMenu.style.display = "none";
    } else {
        filterMenu.style.display = "flex";
    }
};

function resizeFunction() {
    let filterMenu = document.querySelector(".filterContainer");
    if (document.documentElement.clientWidth > 720) {
        filterMenu.style.display = "flex";
    } else {
        filterMenu.style.display = "none";
    }
}

window.addEventListener('resize', resizeFunction);