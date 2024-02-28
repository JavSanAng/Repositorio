const listCharacter = document.getElementById("character-list");
const buttonPrevPage = document.getElementById("prev-page");
const buttonNextPage = document.getElementById("next-page");
let link = "https://rickandmortyapi.com/api/character/";

document.addEventListener("DOMContentLoaded", () => {
    fetchPersonages(link);

    buttonNextPage.addEventListener("click", () => {
        const nextLink = buttonNextPage.dataset.link;
        fetchPersonages(nextLink);
    });

    buttonPrevPage.addEventListener("click", () => {
        const prevLink = buttonPrevPage.dataset.link;
        fetchPersonages(prevLink);
    });
});

function fetchPersonages(link) {
    fetch(link)
        .then((response) => {
        if (!response.ok) {
            throw new error("No funciona la movida!");
        }
        return response.json();
    })
    .then((data) => {
        const info = data.info;
        buttonPrevPage.dataset.link = info.prev;
        buttonNextPage.dataset.link = info.next;
        showPersonages(data.results);
    })
    .catch((error) => {
        console.log ( 'Error no se puedo obtener');
    });
}

function showPersonages(personages) {
    listCharacter.innerHTML = "";
    personages.forEach((personage) => {
        const liPersonage = document.createElement("li");
        const imgPersonage = document.createElement("img");
        imgPersonage.src = personage.image;

        const namePersonage = document.createElement("h2");
        const nameText = document.createElement("span");
        nameText.textContent = "Name: ";
        nameText.style.fontWeight = "bold";
        const nameValuePersonage = document.createTextNode(personage.name)
        namePersonage.appendChild(nameText);
        namePersonage.appendChild(nameValuePersonage);

        const speciePersonage = document.createElement("h3");
        const specieText = document.createElement("span");
        specieText.textContent = "Specie: ";
        specieText.style.fontWeight = "bold";
        const speciesValuePersonage = document.createTextNode(personage.species)
        speciePersonage.appendChild(specieText);
        speciePersonage.appendChild(speciesValuePersonage);

        liPersonage.appendChild(imgPersonage);
        liPersonage.appendChild(namePersonage);
        liPersonage.appendChild(speciePersonage);

        listCharacter.appendChild(liPersonage);
    });
}