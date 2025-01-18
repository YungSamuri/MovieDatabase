const searchInput = document.getElementById("search-text");
const searchCategory = document.getElementById("category");
const searchButton = document.getElementById("search-button");

searchCategory.addEventListener("mouseover", () => {
    searchCategory.classList.add("wide-text");
});

searchCategory.addEventListener("mouseout", () => {
    searchCategory.classList.remove("wide-text");
});

searchButton.addEventListener("mouseover", () => {
    searchButton.firstElementChild.classList.add("big");
});

searchButton.addEventListener("mouseout", () => {
    searchButton.firstElementChild.classList.remove("big");
});

searchButton.addEventListener("click", () => {
    window.location.href = `${searchCategory.value}?query=${searchInput.value}`;
});

if (queryObj.query !== undefined)
{
    let search = queryObj.query;
    search = search.replace(/%20/g, " ");
    searchInput.value = search;
}