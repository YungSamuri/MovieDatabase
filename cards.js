const movieCard = 
`<div class="card">
    <div class="img-div">
        <img src=""/>
    </div>
    <div class="title"></div>
    <div class="info-div">
        <span class="material-symbols-outlined">
            calendar_month
        </span>
        <span class="date"></span>
    </div>
    <div class="info-div">
        <span class="material-symbols-outlined">
            star
        </span>
        <span class="vote-average"></span>
    </div>
</div>`;

const tvCard = 
`<div class="card">
    <div class="img-div">
        <img src=""/>
    </div>
    <div class="title"></div>
    <div class="info-div">
        <span class="material-symbols-outlined">
            calendar_month
        </span>
        <span class="date"></span>
    </div>
    <div class="info-div">
        <span class="material-symbols-outlined">
            star
        </span>
        <span class="vote-average"></span>
    </div>
</div>`;

const personCard = 
`<div class="card">
    <div class="img-div">
        <img src=""/>
    </div>
    <div class="title"></div>
</div>`;

const creditsCard = 
`<div class="card">
    <div class="img-div">
        <img src=""/>
    </div>
    <div class="name"></div>
    <div class="character"></div>
</div>`;

const combinedCreditCard = 
`<div class="card">
    <div class="img-div">
        <img src=""/>
    </div>
    <div class="name"></div>
    <div class="date"></div>
</div>`;

function populateCards(results, func, container, amount = 20)
{
    for (let i = 0; i < amount; i++)
    {
        const card = func(results[i]);
        container.appendChild(card);
    }
}

function createMovieCard(movie)
{
    const wrapper = document.createElement("div");
    wrapper.innerHTML = movieCard;
    const card = wrapper.firstElementChild;

    const title = card.querySelector(".title");
    title.innerText = movie.title;

    const image = card.querySelector("img");
    image.setAttribute("src", imgUrl + "w342" + movie.poster_path);

    const date = card.querySelector(".date");
    date.innerText = movie.release_date.substring(0, 4);

    const voteAverage = card.querySelector(".vote-average");
    voteAverage.innerText = movie.vote_average;

    card.addEventListener("click", () => window.location.href = `movie.html?id=${movie.id}`);
    card.addEventListener("mouseover", () => image.classList.add("big-img"));
    card.addEventListener("mouseout", () => image.classList.remove("big-img"));

    return card;
}

function createTVCard(tvShow)
{
    const wrapper = document.createElement("div");
    wrapper.innerHTML = tvCard;
    const card = wrapper.firstElementChild;
    
    const title = card.querySelector(".title");
    title.innerText = tvShow.name;

    const image = card.querySelector("img");
    image.setAttribute("src", imgUrl + "w342" + tvShow.poster_path);

    const date = card.querySelector(".date");
    date.innerText = tvShow.first_air_date.substring(0, 4);

    const voteAverage = card.querySelector(".vote-average");
    voteAverage.innerText = tvShow.vote_average;

    card.addEventListener("click", () => window.location.href = `series.html?id=${tvShow.id}`);
    card.addEventListener("mouseover", () => image.classList.add("big-img"));
    card.addEventListener("mouseout", () => image.classList.remove("big-img"));

    return card;
}

function createPersonCard(person)
{
    const wrapper = document.createElement("div");
    wrapper.innerHTML = personCard;
    const card = wrapper.firstElementChild;

    const name = card.querySelector(".title");
    name.innerText = person.name;

    const image = card.querySelector("img");
    image.setAttribute("src", imgUrl + "h632" + person.profile_path);

    card.addEventListener("click", () => window.location.href = `person.html?id=${person.id}`);
    card.addEventListener("mouseover", () => image.classList.add("big-img"));
    card.addEventListener("mouseout", () => image.classList.remove("big-img"));

    return card;
}

function createCreditsCard(credits)
{
    const wrapper = document.createElement("div");
    wrapper.innerHTML = creditsCard;
    const card = wrapper.firstElementChild;

    const image = card.querySelector("img");
    image.setAttribute("src", imgUrl + "h632" + credits.profile_path);

    const name = card.querySelector(".name");
    name.innerText = credits.name;

    const character = card.querySelector(".character");
    character.innerText = credits.character;

    card.addEventListener("click", () => window.location.href = `person.html?id=${credits.id}`);
    card.addEventListener("mouseover", () => image.classList.add("big-img"));
    card.addEventListener("mouseout", () => image.classList.remove("big-img"));

    return card;
}

function createCombinedCreditsCard(credits, type)
{
    const wrapper = document.createElement("div");
    wrapper.innerHTML = combinedCreditCard;
    const card = wrapper.firstElementChild;

    const image = card.querySelector("img");
    image.setAttribute("src", imgUrl + "w500" + credits.poster_path);

    const character = card.querySelector(".name");
    character.innerText = credits.character;

    const releaseDate = card.querySelector(".date");
    let date;
    if (type === "movie")
    {
        date = credits.release_date.split("-");
    }
    else if (type === "series")
    {
        date = credits.first_air_date.split("-");
    }
    releaseDate.innerText = `${date[1]}/${date[2]}/${date[0]}`;

    card.addEventListener("click", () => window.location.href = `${type}.html?id=${credits.id}`);
    card.addEventListener("mouseover", () => image.classList.add("big-img"));
    card.addEventListener("mouseout", () => image.classList.remove("big-img"));

    return card;
}