const express = require('express')
const app = express()

const indexRouter = require('./routes/index.js')
const endrouteRouter = require('./routes/endroute.js')

const PORT = process.env.PORT ?? 1234;


app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);

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
    </body>
    </html>`)
})

app.listen(PORT, ()=> {
    console.log(`Listenning port http://localhost:${PORT}`);
})