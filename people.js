// Get the query string into a JSON object
const personName = queryObj.query;

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
    console.log(`person.html?id=${idInput.value}`);
    window.location.href = `person.html?id=${idInput.value}`;
});

findButton.addEventListener("mouseover", () => {
    findButton.firstElementChild.classList.add("big");
});

findButton.addEventListener("mouseout", () => {
    findButton.firstElementChild.classList.remove("big");
});

moreButton.addEventListener("click", () => {
    if (currentPage <= maxPages)
    {
        if (popularResults)
        {
            peoplePopular(currentPage)
            .then(result => {
                console.log(result);
                populateCards(result.results, createPersonCard, gallery[0]);
                maxPages = result.total_pages;
                currentPage++;
                })
            .catch(error => console.log(error));
        }
        else
        {
            peopleSearch(personName, currentPage)
            .then(result => {
                console.log(result);
                populateCards(result.results, createPersonCard, gallery[0]);
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


if (personName !== undefined && personName !== "")
{
    // Make the call to get results from the search
    peopleSearch(personName)
    .then(result => {
        console.log(result);
        populateCards(result.results, createPersonCard, gallery[0]);
        maxPages = result.total_pages;
        currentPage++;
        })
    .catch(error => console.log(error));
    
    popularResults = false;
}
else
{
    peoplePopular()
    .then(result => {
        console.log(result);
        populateCards(result.results, createPersonCard, gallery[0]);
        maxPages = result.total_pages;
        currentPage++;
        })
    .catch(error => console.log(error));
    
    popularResults = true;
}


searchCategory.value = "people.html";