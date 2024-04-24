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
    res.send(
        `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
    </head>
    <body>
        <header>
            <h1>HOME</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/qas">QA's</a>
            <a href="/ventas">Sales</a>
        </nav>
    </body>
    </html>`
    );
});

app.get('/marketing', (req,res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Marketing</title>
    </head>
    <body>
        <header>
            <h1>Marketing</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/developers">Developers</a>
            <a href="/qas">QAS</a>
            <a href="/ventas">Sales</a>
        </nav>
        <main>
            <h2>Counter users : ${usersMarketing.length} </h2>
            <ul>${usersMarketing.map(user=>`<li> Name: ${user.name}, Id: ${user.id}, Age: ${user.age} </li>` )} </ul>
        </main>
    </body>
    </html>`);
})

app.get('/developers', (req,res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Developers</title>
    </head>
    <body>
        <header>
            <h1>Developers</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/qas">QAS</a>
            <a href="/ventas">Sales</a>
        </nav>
        <main>
            <h2>Counter users : ${usersDevelopers.length} </h2>
            <ul>${usersDevelopers.map(user=>`<li> Name: ${user.name}, Id: ${user.id}, Age: ${user.age} </li>` )} </ul>
        </main>
    </body>
    </html>`);
})

app.get('/qas', (req,res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QAS</title>
    </head>
    <body>
        <header>
            <h1>QAS</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Sales</a>
        </nav>
        <main>
            <h2>Counter users : ${usersQas.length} </h2>
            <ul>${usersQas.map(user=>`<li> Name: ${user.name}, Id: ${user.id}, Age: ${user.age} </li>` )} </ul>
        </main>
    </body>
    </html>`);
})

app.get('/ventas', (req,res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ventas</title>
    </head>
    <body>
        <header>
            <h1>SALES</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/qas">QA's</a>
        </nav>
        <main>
            <h2>Counter users : ${usersVentas.length} </h2>
            <ul>${usersVentas.map(user=>`<li> Name: ${user.name}, Id: ${user.id}, Age: ${user.age} </li>` )} </ul>
        </main>
    </body>
    </html>`);
})

app.use ((req,res)=>{
    res.status(404).send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error404</title>
    </head>
    <body>
        <header>
            <h1>Error 404: Page not found</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/qas">QA's</a>
            <a href="/ventas">Sales</a>
        </nav>
    </body>
    </html>`)
})

app.listen(port, () => {
    console.log(`Listening port http://localhost:${port}`);
})
