function changePage(event) {
    let pageNumbers = document.querySelector(".productPages").childNodes;
    pageNumbers.forEach((elem) => {
        if(elem.nodeName != "#text") {
            elem.classList.remove("selectedPage");
        }
    });
    event.currentTarget.classList.add("selectedPage");
}