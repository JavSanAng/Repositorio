const express = require('express')
const router = express.Router()

const hourMiddleware = require('../middlewares/horaMiddleware.js')
const validationTime = require('../middlewares/validarHora.js')


router.get('/', hourMiddleware, validationTime, (req, res)=>{

    res.send(`<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Enroute</title>
    </head>
    <body>
        <header>
            <h1>Welcome to endroute</h1>
            <h2>Good luck, you have reached enroute</h2>
        </header>
    
    </body>
    </html>`)
})

module.exports = router;