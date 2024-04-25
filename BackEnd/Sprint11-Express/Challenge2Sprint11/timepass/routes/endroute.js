const express = require('express')
const router = express.Router()

const timeLog = require('../middlewares/horaMiddleware.js')
const validationTime = require('../middlewares/validarHora.js')


router.get('/', timeLog, validationTime, (req, res)=>{

    res.send(`<!DOCTYPE html>
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
    
    </body>
    </html>`)
})