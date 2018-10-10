// import { stringify } from "@angular/core/src/util";

var express = require('express');
var app = express();
var router = express.Router();
var datos = require('./data');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servidorUrl = '/api/v1/pokemon';
app.use('/api/v1/pokemon', router);

var listaPokemon = datos.getLista();

//function readPokemon() {
    app.get('/api/v1/pokemon', function(req, res) {
        var jsonLista = JSON.stringify({listaPokemon});
        res.send(jsonLista);
    });

    app.get('/api/v1/pokemon/:id', function(req, res) {
        var num = Number(req.params.id);
        if (!listaPokemon.some(x => x.id === num))
        {
            res.send(404, 'No se encontró ningún pokémon con ese id.');
        }
        else
        {
            var pokemon = listaPokemon.find(x => x.id === num);
                
            res.send('Id: ' + pokemon.id + '<br />Nombre: ' +
            pokemon.nombre + '<br />Tipo Primario: ' + pokemon.tipo_prim
            + '<br />Tipo Secundario: ' + pokemon.tipo_secu +
            '<br />Región: ' + pokemon.region);
        }
        //res.sendFile('index.html', 
        //{ root: 'C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/' });
    });    
//}

app.post('/submit-pokemon-data', function (req, res) {
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