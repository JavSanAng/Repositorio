const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ?? 3000

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

//GET all the users
app.get('/usuarios', (req, res)=> {
    res.send(usuarios)
})

//GET a single user
app.get ('/usuarios/:nombre', (req, res)=> {
    const nombre = req.params.nombre;
    const usuario = usuarios.findIndex(user => user.nombre === nombre);
    if (!usuario){
        return res.status(404).json({message:'This user dont exist'})
    }
    res.send(usuario);
});

//Post new user
app.post('/usuarios', (req, res)=>{
    const {nombre, edad, lugarProcedencia } = req.body
    const id = usuarios.length + 1;
    const newUsuario = {id, nombre, edad, lugarProcedencia}
    usuarios.push(newUsuario);
    res.status(201).json(newUsuario);
});

//Delete user
app.delete('/usuarios/:nombre', (req, res)=>{
    const nombre = req.params.nombre;
    const usuarioIndex = usuarios.find(user => user.nombre === nombre);
    if(usuarioIndex !== -1){
        usuarios.splice(usuarioIndex,1);
        return res.status(200).json({message: 'User deleted'})
    } else {
        return res.status(404).json({message:'User doesnt exist '})
    }
})

app.listen(port, () => {
    console.log(`Listening port http://localhost:${port}`);
})
