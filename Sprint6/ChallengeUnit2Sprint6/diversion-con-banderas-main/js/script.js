const countriesList = document.getElementById("countries-list");
const closeBtn = document.getElementById("close-btn");
const countryDetails = document.getElementById("popup");

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://restcountries.com/v3/all")
        .then((response) => {
            if (!response.ok) {
                throw new Error("No funciona el fetch");
            }
            return response.json();
        })
        .then((countries) => {
            const resultCountries = arraySorted(countries);
            showCountries(resultCountries);
        });
});

function arraySorted(countries) {
    let targets = [];
    countries.forEach((country) => {
        const countryName = country.name.common;
        const countryImg = country.flags[1];
        targets.push([countryName, countryImg]);
    });
    targets.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });
    return targets; 
}

function showCountries(targets) {
    countriesList.innerHTML = "";
    targets.forEach((country) => {
        const countryName = country[0];
        const countryImg = country[1];

        const liCountryDom = document.createElement("li");
        liCountryDom.classList.add('liCountry');
        const nameCountryDom = document.createElement("h2");
        nameCountryDom.classList.add('nameFlag');
        const imgCountryDom = document.createElement("img");
        
        const nameValueCountry = document.createTextNode(countryName)
        nameCountryDom.appendChild(nameValueCountry);
        imgCountryDom.src = countryImg;

        liCountryDom.appendChild(nameCountryDom);
        liCountryDom.appendChild(imgCountryDom);
        countriesList.appendChild(liCountryDom);
    });
}

countriesList.addEventListener('click', (e) => {
    const clickedFlag = e.target.closest('li');

    const clickedH2 = clickedFlag.querySelector('h2').textContent;
    fetch(`https://restcountries.com/v3/name/${clickedH2}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No funciona el fetch");
            }
            return response.json();
        })
        .then((countryData) => {
            detailsCountry(countryData);
        });
});

function detailsCountry(countryData) {
    countryData.forEach((countryDetail) => {
        const urlFlagDetail =countryDetail.flags[0];
        const nameC = document.getElementById('nameC');
        const capital = document.getElementById('capital');
        const population = document.getElementById('population');
        const road = document.getElementById('road');
        const flag = document.getElementById('flag');

        flag.src = urlFlagDetail;
        nameC.textContent = `Nombre: ${countryDetail.name.official}`;
        capital.textContent = `Capital: ${countryDetail.capital}`;
        population.textContent = `Poblacion: ${countryDetail.population}`;
        road.textContent = `Lado carretera: ${countryDetail.car.side}`;

        countryDetails.classList.remove("hidden");
    });
}

closeBtn.addEventListener("click", () => {
    countryDetails.classList.add("hidden");
});





