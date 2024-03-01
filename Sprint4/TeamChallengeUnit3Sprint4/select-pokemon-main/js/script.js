//Coded by Javier Santiago & Adrián Giner
const getPoke = document.getElementById('get-pokemon');
const selectPoke = document.getElementById('pokemon-select');
const showPoke = document.querySelector('.show-pokemon');
let link = "https://pokeapi.co/api/v2/pokemon/";

getPoke.addEventListener('click', () => {
    const selectValuePoke = (selectPoke.value);
    
    showPoke.style.display = 'flex';

    fetchPokeApi();

    function fetchPokeApi() {
        fetch(link + selectValuePoke)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Couldent get the response.');
            } else {
            return response.json();
            }
        })
        .then((data) => {
            const info = data;
            showPokeData(info);
        })
        .catch ((error) => {
            console.log('Error: couldnt get the wanted data.');
        })
    }

    function showPokeData(info) {
        showPoke.innerHTML = `
        <ul class='poke-data-list'>
            <li class='poke-data-value'> <b>species:</b> ${info.name}</li>
            <li class='poke-data-value'> <img src="${info.sprites.front_default}" alt ="image Poke"> </li>
            <li class='poke-data-value'> <b>Weight:</b> ${info.weight / 10} kg</li>
            <li class='poke-data-value'> <b>Height:</b> ${info.height * 10} cm</li>
            <li class='poke-data-value'> <b>Type:</b> ${info.types[0].type.name}</li>
        </ul>
        `
    };
});


