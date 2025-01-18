// Get the query string into a JSON object
const personId = queryObj.id;

const image = document.getElementById("main-poster");
const birthday = document.getElementById("birthday");
const deathDate = document.getElementById("death-date");
const birthplace = document.getElementById("birthplace");
const biography = document.getElementById("biography");

// Show the images based on the id
personDetails(personId)
    .then(result => {
        console.log(result);
        populateDetails(result);
    })
    .catch(error => console.log(error));

// Make the call to get the info based on the id
personImages(personId)
    .then(result => {
        console.log(result);
        posters = result.profiles
        makeImageCarousel(posters, "h632"); // Leaving this here as a hint for making a scrolling gallery
    })
    .catch(error => console.log(error));

getPersonCredits(personId)
    .then(result => {
        console.log(result)
        populateCombinedCredits(result.cast)
    })
    .catch(error => console.log(error));

function populateDetails(result)
{
    document.title += ` ${result.name}`;
    image.setAttribute("src", `${imgUrl}w500${result.profile_path}`);
    title.innerText = result.name;

    if (result.birthday != null)
    {
        const formattedBirthday = result.birthday.split("-");
        birthday.innerText = `Birthday: ${formattedBirthday[1]}/${formattedBirthday[2]}/${formattedBirthday[0]}`;
    }
    
    if (result.deathday === null)
    {
        deathDate.remove();
    }
    else
    {
        const deathday = result.deathday.split("-");
        deathDate.innerText = `Death Date: ${deathday[1]}/${deathday[2]}/${deathday[0]}`;
    }

    birthplace.innerText = `Birthplace: ${result.place_of_birth}`;

    biography.innerText = `Bio: ${result.biography}`;
}

function populateCombinedCredits(cast)
{
    for (credit of cast)
    {
        if (credit.media_type === "movie")
        {
            const card = createCombinedCreditsCard(credit, "movie");
            credits.appendChild(card);
        }
        else if (credit.media_type === "tv")
        {
            const card = createCombinedCreditsCard(credit, "series");
            credits.appendChild(card);
        }
    }
}