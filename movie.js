// Get the query string into a JSON object
const movieId = queryObj.id;

const image = document.getElementById("main-poster");
const releaseDate = document.getElementById("release-date");
const overview = document.getElementById("overview");
const runtime = document.getElementById("runtime");
const voteAverage = document.getElementById("vote-average");


// Make the call to get the info based on the id
movieDetails(movieId)
    .then(result => {
        console.log(result);
        populateDetails(result);
    })
    .catch(error => console.log(error));

// Make the call to get the info based on the id
movieImages(movieId)
    .then(result => {
        console.log(result);
        posters = result.posters
        makeImageCarousel(posters, "w500"); // Leaving this here as a hint for making a scrolling gallery
    })
    .catch(error => console.log(error));

getMovieCredits(movieId)
    .then(result => {
        console.log(result)
        populateCredits(result)
    })
    .catch(error => console.log(error));

function populateDetails(result)
{
    document.title += ` ${result.title}`;
    document.body.style.backgroundImage = `url(${imgUrl}w1280${result.backdrop_path})`;
    image.setAttribute("src", `${imgUrl}w500${result.poster_path}`);
    title.innerText = result.title;
    const date = result.release_date.split("-");
    releaseDate.innerText = `Release Date: ${date[1]}/${date[2]}/${date[0]}`;
    overview.innerText = `Summary: ${result.overview}`;
    runtime.innerText = `Runtime: ${Math.floor(result.runtime / 60)} hrs. ${result.runtime % 60} mins.`;
    voteAverage.innerText = `Rating: ${result.vote_average}`;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<span class="material-symbols-outlined filled">star</span>`;
    voteAverage.appendChild(wrapper.firstElementChild);
}