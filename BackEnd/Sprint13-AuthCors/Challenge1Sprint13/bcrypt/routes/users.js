const express = require('express');
const router = express.Router();
const { generateToken, verifyToken } = require('../middlewares/authMiddleware');
const {users} = require('../data/users');

router.get ('/', (req, res)=>{
    console.log ('Pag Inicio (Form Inicio Sesión/Enlace Panel Control)')
    if (req.session.token) {
        res.send(`
            <h1>Bienvenido</h1>
            <a href="/dashboard">Ir al dashboard</a>
            <form action="/logout" method="post">
                <button type="submit">Cerrar sesión</button>
            </form>
        `);
        } else {
            const loginForm = `
            <form action="/login" method="post">
                <label for="username">User:</label>
                <input type="text" id="username" name="username" required><br>
        
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>
        
                <button type="submit">Iniciar sesión</button>
            </form>
            <a href="/dashboard">Dashboard</a>
            `;
        
        res.send(loginForm);
        }
    });

router.post('/login', (req, res)=>{
    console.log ('Autenticar y generar un token JWT');
    const { username, password } = req.body;
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
        if (user) {
        const token = generateToken(user);
        req.session.token = token;
        res.redirect('/dashboard');
        } else {
        res.status(401).json({ mensaje: 'Credenciales Incorrectas' });
        }
});

router.get ('/dashboard', verifyToken, (req, res)=>{
    console.log ('Panel de control accesible solo con token JWT valido.')
    const userId = req.user;
    const user = users.find((user) => user.id === userId);
    if (user) {
        res.send(`
            <h1>Welcome, ${user.name}</h1>
            <p>ID: ${user.id}</p>
            <p>UserName: ${user.username}</p>
            <a href="/">HOME</a>
            <form action="/logout" method="post">
                <button type="submit">Cerrar sesión</button> 
            </form>
        `);
    } else {
        res.status(401).json({ mensaje: 'Usuario no encontrado' });
    }
});

router.post ('/logout', (req,res)=>{
    console.log ('Cerrar sesión y destruir la sesión')
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;