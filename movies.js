// Get the query string into a JSON object
const movieName = queryObj.query;

const idInput = document.getElementById("id-text");
const findButton = document.getElementById("find-button");
const gallery = document.getElementsByClassName("gallery");
const moreButton = document.getElementById("more");

let currentPage = 1;
let maxPages;
let popularResults;

current.addEventListener("click", e => {
    e.preventDefault();
});

// Navigate with a query String
findButton.addEventListener("click", e => {
    e.preventDefault();
    console.log(`movie.html?id=${idInput.value}`);
    window.location.href = `movie.html?id=${idInput.value}`;
});

findButton.addEventListener("mouseover", () => {
    findButton.firstElementChild.classList.add("big");
});

findButton.addEventListener("mouseout", () => {
    findButton.firstElementChild.classList.remove("big");
});

moreButton.addEventListener("mouseover", () => {
    moreButton.classList.add("wide-text");
    moreButton.querySelector("span").classList.add("filled");
});

moreButton.addEventListener("mouseout", () => {
    moreButton.classList.remove("wide-text");
    moreButton.querySelector("span").classList.remove("filled");
});

moreButton.addEventListener("click", () => {
    if (currentPage <= maxPages)
    {
        if (popularResults)
        {
            moviePopular(currentPage)
            .then(result => {
                console.log(result);
                populateCards(result.results, createMovieCard, gallery[0]);
                maxPages = result.total_pages;
                currentPage++;
                })
            .catch(error => console.log(error));
        }
        else
        {
            movieSearch(movieName, currentPage)
            .then(result => {
                console.log(result);
                populateCards(result.results, createMovieCard, gallery[0]);
                currentPage++; 
                })
            .catch(error => console.log(error));
        }

        if (currentPage > maxPages)
        {
            moreButton.remove();
        }
    }
});


if (movieName !== undefined && movieName !== "")
{
    // Make the call to get results from the search
    movieSearch(movieName)
    .then(result => {
        console.log(result);
        populateCards(result.results, createMovieCard, gallery[0]);
        maxPages = result.total_pages;
        currentPage++;
        })
    .catch(error => console.log(error));
    
    popularResults = false;
}
else
{
    moviePopular()
    .then(result => {
        console.log(result);
        populateCards(result.results, createMovieCard, gallery[0]);
        maxPages = result.total_pages;
        currentPage++;
        })
    .catch(error => console.log(error));
    
    popularResults = true;
}


searchCategory.value = "movies.html";