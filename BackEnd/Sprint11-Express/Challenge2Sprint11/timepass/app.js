const express = require('express')
const app = express()

const indexRouter = require('./routes/index.js')
const endrouteRouter = require('./routes/endroute.js')

const PORT = process.env.PORT ?? 1234;


app.use('/', indexRouter);
app.use('/endroute', endrouteRouter);



app.listen(PORT, ()=> {
    console.log(`Listenning port http://localhost:${PORT}`);
})