const express = require('express');
const router = express.Router();
const Monster = require('../modules/pokemon');

var datos = require('../data');
var listaPokemon = datos.getLista();

router.get('/', function(req, res) {
    var jsonLista = JSON.stringify({listaPokemon});
    res.send(jsonLista);
});

router.get('/get/:id', function(req, res, next) {
    var num = Number(req.params.id);
    /*if (req.params.id === 'add-new')
    {
        res.sendFile('pokepost.html', 
        { root: 'C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/' });
    }*/
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
    
});    
//}

router.post('/add-new', function (req, res, next) {
    Monster.create(req.body).then(function(pokemon) {
        res.send(pokemon);
    }).catch(next); 
});

router.put('/update-pokemon-data/:id', function (req, res, next) {
    Monster.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(function(pokemon) {
            res.send(pokemon);
        });
});

router.delete('/delete-pokemon-data/:id', function (req, res, next) {
    Monster.findOneAndDelete({ id: req.params.id })
        .then(function(pokemon) {
            res.send(pokemon);
        });
});

module.exports = router;