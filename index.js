const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const { getAllVillains, getVillainBySlug, createNewVillain } = require('./controllers/villains');
const villains = require('./villains');


app.get('/villains', getAllVillains);

app.get('/villains/:slug', getVillainBySlug);

app.post('/villains', bodyParser.json(), createNewVillain);

app.listen((1337), () => {
    console.log ('Listening to 1337 ...')
});