// import { stringify } from "@angular/core/src/util";

var express = require('express');
var app = express();
var router = express.Router();
var datos = require('./data');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servidorUrl = '/api/v1/pokemon';
app.use(servidorUrl, router);

var listaPokemon = datos.getLista();

//function readPokemon() {
    app.get(servidorUrl, function(req, res) {
        var jsonLista = JSON.stringify({listaPokemon});
        res.send(jsonLista);
    });

    app.get(servidorUrl + '/:id', function(req, res) {
        var num = Number(req.params.id);
        if (req.params.id === 'add-new')
        {
            res.sendFile('pokepost.html', 
            { root: 'C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/' });
        }
        else if (!listaPokemon.some(x => x.id === num))
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
        
    });    
//}

app.post('/submit-pokemon-data', function (req, res) {
    var json = datos.createPokemon(req.body.id, req.body.nombre, req.body.tipo_prim,
        req.body.tipo_secu, req.body.region);  
    var nuevo = JSON.parse(json);
    listaPokemon.push(nuevo);
    res.send(JSON.stringify(listaPokemon));
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