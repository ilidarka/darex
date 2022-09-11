function sort(event, sortName) {
    let sortItem = event.currentTarget;
    let sortTriangle = sortItem.children[0];
    sortTriangle.classList.toggle("rotate");
}