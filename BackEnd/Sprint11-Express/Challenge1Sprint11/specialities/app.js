const express = require('express');
const app = express();

const usersData = require ('./usersData.js')

const usersMarketing = []
const usersDevelopers = []
const usersVentas = []
const usersQas = []


function filterUsers (usersData){
    usersData.forEach(user => {
        if (user.specialty === "marketing"){
            usersMarketing.push(user) ;
        }else if (user.specialty === "developers"){
            usersDevelopers.push(user) ;
        }else if (user.specialty === "ventas"){
            usersVentas.push(user) ;
        } else {
            usersQas.push(user) ;
        }
    });
}

filterUsers(usersData)
const port = process.env.PORT || 1234;

app.get('/', (req,res)=> {
    res.send('Principal Page' + req.path);
});

app.get('/marketing', (req,res) => {
    console.log(usersMarketing);
})

app.get('/developers', (req,res) => {
})

app.get('/qas', (req,res) => {
})

app.get('/ventas', (req,res) => {
})

app.use ((req,res)=>{
    res.status(404).send('<h1>Error:401 </h1>')
})

app.listen(port, () => {
    console.log(`Listening port http://localhost:${port}`);
})