const title = document.getElementById("title");
const slider = document.getElementById("carousel-slider");
const credits = document.getElementById("credits");

let posters;
let currentPoster = 0;
const carouselSize = 7;

function populateCredits(result)
{
    const cast = result.cast;
    populateCards(cast, createCreditsCard, credits, cast.length);
}

function makeImageCarousel(posters, size)
{
    for (let i = 0; i < carouselSize; i++)
    {
        const poster = posters[currentPoster];
        createCarouselImage(poster, size, i); 
    }
}

function createCarouselImage(poster, size, position)
{
    const div = document.createElement("div");
    div.classList.add("carousel-image");
    div.innerHTML = `<img src="${imgUrl}${size}${poster.file_path}"/>`;
    div.style.left = `${position * 15}rem`;
    const animation = div.animate(
        [{
            transform: `translateX(0)`,
            offset: 0
        },
        {
            transform: `translate(-${(position + 1) * 15}rem)`,
            offset: 1
        }],
        {
            duration: (position + 1) * 3000
        }
    );

    animation.onfinish =  () => {
        div.remove();
        const newPoster = posters[currentPoster];
        createCarouselImage(newPoster, size, carouselSize - 1);
    };

    slider.appendChild(div); 
    currentPoster++;
    if (currentPoster == posters.length)
    {
        currentPoster = 0;
    }
}