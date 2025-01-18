// Get the query string into a JSON object
const seriesId = queryObj.id;

const image = document.getElementById("main-poster");
const years = document.getElementById("years");
const seasons = document.getElementById("seasons");
const episodes = document.getElementById("episodes");
const overview = document.getElementById("overview");
const voteAverage = document.getElementById("vote-average");

// Show the images based on the id
tvDetails(seriesId)
    .then(result => {
        console.log(result);
        populateDetails(result);
    })
    .catch(error => console.log(error));

// Make the call to get the info based on the id
tvImages(seriesId)
    .then(result => {
        console.log(result);
        posters = result.posters
        makeImageCarousel(posters, "w500"); // Leaving this here as a hint for making a scrolling gallery
    })
    .catch(error => console.log(error));

getTvCredits(seriesId)
    .then(result => {
        console.log(result)
        populateCredits(result)
    })
    .catch(error => console.log(error));

function populateDetails(result)
{
    document.title += ` ${result.name}`;
    document.body.style.backgroundImage = `url(${imgUrl}w1280${result.backdrop_path})`;
    image.setAttribute("src", `${imgUrl}w500${result.poster_path}`);
    title.innerText = result.name;

    const firstYear = result.first_air_date.split("-");
    const lastYear = result.last_air_date.split("-");
    years.innerText = `Years: ${firstYear[0]} - ${lastYear[0]}`;

    seasons.innerText = `Number of Seasons: ${result.number_of_seasons}`;
    episodes.innerText = `Number of Seasons: ${result.number_of_episodes}`;
    overview.innerText = `Summary: ${result.overview}`;
    voteAverage.innerText = `Rating: ${result.vote_average}`;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<span class="material-symbols-outlined filled">star</span>`;
    voteAverage.appendChild(wrapper.firstElementChild);
}