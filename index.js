const movieSection = document.getElementById("movie-section");
const tvSection = document.getElementById("tv-section");
const peopleSection = document.getElementById("people-section");

let numCards = 6;

current.addEventListener("click", e => {
    e.preventDefault();
});

moviePopular()
    .then(result => {
        console.log(result);
        populateCards(result.results, createMovieCard, movieSection.querySelector(".gallery"), 6);
    })
    .catch(error => console.log(error));

tvPopular()
    .then(result => {
        console.log(result);
        populateCards(result.results, createTVCard, tvSection.querySelector(".gallery"), 6);
    })
    .catch(error => console.log(error));

peoplePopular()
    .then(result => {
        console.log(result);
        populateCards(result.results, createPersonCard, peopleSection.querySelector(".gallery"), 6);
    })
    .catch(error => console.log(error));