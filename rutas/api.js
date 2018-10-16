const express = require('express');
const router = express.Router();

app.route(servidorUrl).get(function(req, res) {
    var jsonLista = JSON.stringify({listaPokemon});
    res.send(jsonLista);
});

app.route(servidorUrl + '/get/:id').get(function(req, res, next) {
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

app.route(servidorUrl + '/add-new')
.get(function(req, res, next) {
    window.open('C:/Users/Javier/Desktop/FrontEnd_App_PrograWeb-master/FrontEnd_App_PrograWeb/pokepost.html');
})
.post(function (req, res) {
var nuevo = datos.createPokemon(req.body.id, req.body.nombre, req.body.tipo_prim,
    req.body.tipo_secu, req.body.region);  
if (listaPokemon.some(x => x.id === nuevo.id))
{
    res.statusMessage = `Ya existe un pokémon con el id ${req.params.id}.`;
    res.sendStatus(409);
}
else
{
    listaPokemon.push(nuevo);
    res.sendStatus(201, `El pokémon con id ${req.params.id} fue agregado exitosamente a la lista.`);
}
});

app.put(servidorUrl + '/update-pokemon-data', function (req, res) {
    var num = Number(req.params.id);
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
    res.send('PUT Request');
});

app.delete(servidorUrl + '/delete-data/:id', function (req, res) {
    var num = Number(req.params.id);
    if (listaPokemon.some(x => x.id === num))
    {
        var indice = listaPokemon.findIndex(x => x.id === num);
        listaPokemon.splice(indice, 1);
        res.send(204, 'El pokémon con id' + String(num) + 'fue eliminado de la lista.');
    }
    else
    {
        res.send(404, 'No se encontró ningún pokémon con ese id.');
    }
});