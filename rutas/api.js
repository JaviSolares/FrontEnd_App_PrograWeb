const express = require('express');
const router = express.Router();

var datos = require('./data');
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

router.post('/add-new', function (req, res) {
    /*console.log(req.body);
    res.send({ type: 'POST',
        nombre: req.body.nombre,
        región: req.body.region });*/
    var nuevo = datos.createPokemon(req.body.id, req.body.nombre, req.body.tipo_prim,
        req.body.tipo_secu, req.body.region);  
    if (listaPokemon.some(x => x.id === nuevo.id))
    {
        res.statusMessage = `Ya existe un pokémon con el id ${req.body.id}.`;
        res.sendStatus(409);
    }
    else
    {
        listaPokemon.push(nuevo);
        res.sendStatus(201, `El pokémon con id ${req.body.id} fue agregado exitosamente a la lista.`);
    }
});

router.put('/update-pokemon-data/:id', function (req, res) {
    res.send({ type: 'PUT' });
    /*var num = Number(req.params.id);
    if (listaPokemon.some(x => x.id === num))
    {
        document.open('C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/pokeput.html');
        var anticuado = listaPokemon.find(x => x.id === num);
        anticuado = datos.editPokemon(anticuado, req.params.nombre, req.params.tipo_prim,
            req.params.tipo_secu, req.params.region);
    }
    else
    {
        res.send(404, 'No se encontró ningún pokémon con ese id.');
    }
    res.send('PUT Request');*/
});

router.delete('/delete-data/:id', function (req, res) {
    res.send({ type: 'DELETE' });
    /*var num = Number(req.params.id);
    if (listaPokemon.some(x => x.id === num))
    {
        var indice = listaPokemon.findIndex(x => x.id === num);
        listaPokemon.splice(indice, 1);
        res.send(204, 'El pokémon con id' + String(num) + 'fue eliminado de la lista.');
    }
    else
    {
        res.send(404, 'No se encontró ningún pokémon con ese id.');
    }*/
});

module.exports = router;