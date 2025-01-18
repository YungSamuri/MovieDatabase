const current = document.getElementById("current-link");
const menuButton = document.getElementById("menu-button");
const menuIcon = menuButton.firstElementChild;
const links = document.getElementsByClassName("nav-link");

const queryObj = queryStringToJson(window.location.search);

let isNavOpen = false;

menuButton.addEventListener("click", () => {
    isNavOpen = !isNavOpen;
    drawer.dataset.open = `${isNavOpen}`;

    if (isNavOpen)
    {
        menuButton.style.backgroundColor ="#4ECDC4";
        menuButton.style.color ="black";
        // menuIcon.classList.add("bigger");
    }
    else
    {
        menuButton.style.backgroundColor = "";
        menuButton.style.color = "";
        // menuIcon.classList.remove("bigger");
    }
    
});

menuButton.addEventListener("mouseover", () => menuIcon.classList.add("bigger"));
menuButton.addEventListener("mouseout", () => menuIcon.classList.remove("bigger"));

for (const link of links)
{
    link.addEventListener("mouseover", () => {
        link.classList.add("wide-text");
    });
    
    link.addEventListener("mouseout", () => {
        link.classList.remove("wide-text");
    });
}