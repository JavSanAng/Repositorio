import peliculas from "./peliculas.js";

const sectionAction = document.getElementById('genero-28'); 
const sectionThriller = document.getElementById('genero-53');
const sectionAdventure = document.getElementById('genero-12');
const linkImage = 'https://image.tmdb.org/t/p/w500';

function films (section, films) {
    films.forEach(pelicula => {
        // Creo el div donde guardo la info de las pelis
        const divFilm = document.createElement("div");

        // Creo el img para meter la portada de la peli
        const imgFilm = document.createElement("img");
        imgFilm.src = `${linkImage}${pelicula.poster_path}`; // Usar poster_path para la imagen

        // Creo el H3 para meter los títulos
        const title = document.createElement("h3");
        title.textContent = pelicula.title;

        // Meto las movidas en el div 
        divFilm.appendChild(imgFilm);
        divFilm.appendChild(title);

        // Meto los div en los section:
        section.appendChild(divFilm);
    });
};

// Filtrar películas y mostrarlas en las secciones correspondientes
const arrayThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
films(sectionThriller, arrayThriller);

const arrayAction = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
films(sectionAction, arrayAction);

const arrayAdventure = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
films(sectionAdventure, arrayAdventure);
