

const btnJoke = document.getElementById("fetchJoke")
const btnDelete = document.getElementById("btnDelete")
const jokeList = document.getElementById("jokeList")


    //funcion fetch con el click de obtener chiste
function getSaveJoke (){
btnJoke.addEventListener("click",() => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud al servidor");
      }
      return response.json();
    })
    .then((data) => {
      let joke = data.value;
      saveJokeDom(joke);
      saveJokeLocalStorage(joke);
    })
    .catch((error) => {
      console.error("Error al obtener datos de la API!!!:", error);
    });
})}

    // crear elementos del DOM
function saveJokeDom (joke){
    const jokeItem = document.createElement("li");
    jokeItem.textContent = joke;
    jokeList.appendChild(jokeItem);
    const btnItem = document.createElement("button");
    btnItem.textContent = "Eliminar chiste";
    // const btnInside = document.innerHTML(<button>Eliminar chiste</button>)
    jokeList.appendChild(btnItem);
}

    // guardar en localStorage
function saveJokeLocalStorage(joke){
    let jokes;
    if (localStorage.getItem('jokes') === null){
        jokes = [];
    } else {
        jokes = JSON.parse(localStorage.getItem('jokes'));
    }
    jokes.push(joke);
    localStorage.setItem("jokes", JSON.stringify(jokes));
}

    // carga de los chistes guardados al cargar la pagina
document.addEventListener("DOMContentLoaded", function () {
    (JSON.parse(localStorage.getItem("jokes"))||[]).forEach(saveJokeDom);
    deleteJokes();
    });


    // funcion eliminar todos los chistes
function deleteJokes() {
	btnDelete.addEventListener("click", (e)=>{
		localStorage.clear();
		jokeList.textContent = "";
	})};

    // funcion eliminar un chiste
function deleteJoke() {
        btnItem.addEventListener("click", (e)=>{
            localStorage.removeItem(joke);
            jokeItem.textContent = "";
        })};

getSaveJoke();
deleteJoke();