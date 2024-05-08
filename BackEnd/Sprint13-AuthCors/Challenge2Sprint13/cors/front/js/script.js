
function getCharacterInfo(){
    const characterNameInput = document.getElementById('characterName')
    const characterInfo = document.getElementById('characterInfo')

    const characterName = characterNameInput.value.toLocaleLowerCase()

    fetch(`http://localhost:1234/character/${characterName}`)
    .then(response => response.json())
    .then(data => {
        const {name,status,species,gender,origin: {name: originName } ,image} = data
        characterInfo.innerHTML = `

            <div class="centered-card">
                <h2>${name}</h2>
                <img src="${image}" alt="John Doe">
                <p><strong>Status:</strong> ${status}</p>
                <p><strong>Specie:</strong> ${species}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Origin:</strong> ${originName}</p>
            </div>

        `
    })
    .catch(error  => characterInfo.innerHTML =`<p>Impossible acces to the character ! </p>`)
}