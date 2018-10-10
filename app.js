// import { stringify } from "@angular/core/src/util";

var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servidorUrl = '/api/v1/pokemon';
app.use('/api/v1/pokemon', router);

const listaPokemon = [
    { id: 1, nombre: 'Bulbasaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
    { id: 2, nombre: 'Ivysaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
    { id: 3, nombre: 'Venusaur', tipo_prim: 'Planta', tipo_secu: 'Veneno', region: 'Kanto' },
    { id: 155, nombre: 'Cyndaquil', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
    { id: 156, nombre: 'Quilava', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
    { id: 157, nombre: 'Typhlosion', tipo_prim: 'Fuego', tipo_secu: '---', region: 'Johto' },
    { id: 258, nombre: 'Mudkip', tipo_prim: 'Agua', tipo_secu: '---', region: 'Hoenn' },
    { id: 259, nombre: 'Marshtomp', tipo_prim: 'Agua', tipo_secu: 'Tierra', region: 'Hoenn' },
    { id: 260, nombre: 'Swampert', tipo_prim: 'Agua', tipo_secu: 'Tierra', region: 'Hoenn' }
];

//function readPokemon() {
    /*app.param('id', function(req, res, next, id) {
        if (id === null)
        {
            res.send(200, JSON.stringify(listaPokemon));
        }
        else
        {
            var pokemon = listaPokemon.find(x => x.id === id);

            if (true)
            {
                res.send(404, 'No se encontró ningún pokémon con ese id.');
            }
            else
            {
                req.params.id = id;
                next();
            }
        }
    });*/
    
    app.get('/api/v1/pokemon/:id', function(req, res) {
        if (req.params.id === '')
        {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: listaPokemon }));
            res.end();
        }
        else
        {
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
        }
        
        //res.sendFile('index.html', 
        //{ root: 'C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/' });
    });    
//}


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