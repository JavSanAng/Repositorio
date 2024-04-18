

const http = require('node:http');
const infoWebData = require("./data.js");

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log("Request Ok");
    const infoWebHTML = (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Create Server</title>
    </head>
    <body>
        <main>
            <h1>${infoWebData.infoWeb.title}</h1>
            <h2>${infoWebData.infoWeb.subtitle}</h2>
            <p>${infoWebData.infoWeb.description}</p>
        </main>
    </body>
    </html>    
    `);
    res.end (infoWebHTML)
});

server.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`);
})