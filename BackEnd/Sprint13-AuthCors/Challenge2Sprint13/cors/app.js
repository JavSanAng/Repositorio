const express = require ('express');
const app = express();

const axios = require('axios');
const cors = require ('cors');

const port = process.env.port || 1234;

const url = `https://rickandmortyapi.com/api/character/`

app.use(cors());

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
    const characterName = req.params.name
    const characterUrl = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
    try{
        const response = await axios.get(`${characterUrl}`)
        const characterData = response.data.results[0];
        if (characterData){
            const {name,status,species,gender,origin,image} = characterData;
            res.json({name,status,species,gender,origin,image});
        } else {
            res.status(404).json({error:'404:Character not found.'})
        }
    } catch (ERROR) {
        res.status(500).json({error: '500. Error Server'})
    }
})

app.listen(port, ()=>{
    console.log(`Server running in http://localhost:${port}`);
})