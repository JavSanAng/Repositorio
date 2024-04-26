const express = require('express')
const router = express.Router()

const hourMiddleware = require('../middlewares/horaMiddleware')

router.get('/', hourMiddleware, (req, res)=>{
    const hour = req.timeLog.toLocaleTimeString();
    if(req.query.mensaje){
        res.send(` <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <header>
                <h1>Welcome</h1>
            </header>
            <h2> The current time: ${hour} </h2>
            <h3>It is not yet the time to access (remember from 12 am to midnight).</h3>
            <a href = "/"><button> Return </button></a>
        </body>
        </html>`)
    } else {
        res.send(` <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <header>
                <h1>Welcome</h1>
            </header>
            <h2> The current time: ${hour} </h2>
            <a href = "/endroute"><button> Go </button></a>
        </body>
        </html>`)
        }
})

module.exports = router;
