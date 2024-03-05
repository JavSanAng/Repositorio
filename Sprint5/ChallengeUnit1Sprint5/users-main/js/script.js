const ulUsers = document.getElementById('listaUsuarios');


function fetchRandomUser(){
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok){
        throw new Error ('No responde la movida');
    } else {
        return response.json();
    }
    })
    .then((data)=> {
        const users = data;
        showRandomUser(users);
    })
    .catch((error) => {
        console.log ('Error: todo roto')
    })
}

function randomAge(){
    var min = 16;
    var max = 99;
    let randomAge = Math.floor(Math.random()*(max-min+1)+min);
    return randomAge;
}

function showRandomUser (users) {
    users.forEach((user)=> {
        const liUser = document.createElement("li");
        const imgUser = document.createElement("img");
        imgUser.src = "./assets/img/" + `${user.id}`+ ".jpeg "

        let {name, username, phone, email,company, address} = user ;
        const userInfo = document.createElement("div");
        userInfo.classList.add('container');
        
        userInfo.innerHTML = 
        `<div id="target">
            <h3>Nombre: ${name}</h3>
            <p> <b>Edad: </b> ${randomAge()} </p>
            <p> <b>Username: </b> ${username} </p>
            <p> <b>Teléfono: </b> ${phone}</p>
            <p> <b> Email: </b> ${email}</p>
        </div>
        <div id="extraInfo">
            <p> <b>Compañia:</b> ${company.name} </p>
            <p> <b>Dirección:</b> ${address.street + ', ' + address.suite + ', '+ address.city + '.'}</p>
        </div>`;

        
        liUser.appendChild(userInfo);
        userInfo.appendChild(imgUser);
        ulUsers.appendChild(liUser);
    })
    
}
fetchRandomUser();
