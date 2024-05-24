const express = require('express');
const app = express();
const routes= require('./routes/posts');
const {dbConnection} = require('./config/config');
require('dotenv').config();


dbConnection();

const port = process.env.PORT || 1234;

app.use(express.json());
app.use('/', routes);

app.listen(port, ()=>{
    console.log(`Listening port http://localhost:${port}`);
})