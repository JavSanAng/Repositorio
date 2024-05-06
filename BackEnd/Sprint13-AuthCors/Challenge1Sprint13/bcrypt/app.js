const express = require ('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');
const { hashedSecret } = require ('./crypto/config')
const routes = require ('./routes/users'); 

const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
        session({
            secret: hashedSecret,
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false },
        })
);

app.use('/' , routes);

app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
});