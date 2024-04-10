// ACTIVATE MENU
let btnMenu = document.querySelector(".btn-menu");
let itemsNavbar = document.querySelector(".ulNavbar");

btnMenu.addEventListener("click", () => {
    itemsNavbar.classList.toggle("actived");
});
// ACTIVATE MENU




// DESCRIPTION | PAGE PRODUCTS

let cardArea = document.getElementsByClassName("card-prod");
let description = document.getElementsByClassName("description-prod");

for (let i = 0 ; i < cardArea.length ; i++) {
    cardArea[i].addEventListener("mouseenter", () => {
        description[i].style.color = "black";
    })
}
for (let i = 0 ; i < cardArea.length ; i++) {
    cardArea[i].addEventListener("mouseout", () => {
        description[i].style.color = "transparent";
    })
}


// DESCRIPTION | PAGE PRODUCTS

