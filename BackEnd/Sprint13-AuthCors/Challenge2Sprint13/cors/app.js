const express = require ('express');
const app = express();

const axios = require('axios');
const cors = require ('cors');

const port = process.env.port || 1234;

const url = `https://rickandmortyapi.com/api/character/`

app.get('/characters', async(req,res)=>{
    try{
        const response = await axios.get(url);
        data = response.data
        res.json(data.results);
    } catch (ERROR) {
        res.status(404).json({error: '404. No encontrado'})
    }
})

app.get('/character/:name', async(req, res) => {
    const characterName = req.params['name'].toLocaleLowerCase();
    const characterUrl = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    try{
        const response = await axios.get(`${characterUrl}`)
        const {name, status, species, gender, origin, image} = response.data
        res.json(data.results)
    } catch (ERROR) {
        res.status(404).json({error: '404. Character no encontrado'})
    }
})

app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
})