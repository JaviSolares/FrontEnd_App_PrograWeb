// import { stringify } from "@angular/core/src/util";

var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servidorUrl = '/api/v1/pokemon';
app.use('/api/v1/pokemon', router);


var dataPokemones = require('./src/app/in-memory-data.service.ts');
const listaPokemon = dataPokemones.pokemones;

function readPokemon() {
    app.param('id', function(req, res, next, id) {
        if (id === '')
        {
            res.send(200, JSON.stringify(listaPokemon));
        }
        else
        {
            var pokemon = listaPokemon.find(function(p) {
                return p.id === id;
            });

            if (pokemon === undefined)
            {
                res.send(404, 'No se encontró ningún pokémon con ese id.');
            }
            else
            {
                req.id = id;
                next();
            }
        }
    })
    
    app.get('/api/v1/pokemon/:id', function(req, res) {
        res.sendFile('index.html', 
        { root: 'C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/' });
    });    
}


app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function() {
    console.log('Node server is running..');
});