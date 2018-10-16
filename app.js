// import { stringify } from "@angular/core/src/util";

var express = require('express');
var app = express();
var datos = require('./data');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const servidorUrl = '/api/v1/pokemon';
app.use('/api/v1/pokemon', require('./rutas/api'));

var listaPokemon = datos.getLista();

app.listen(5000, function() {
    console.log('Node server is running..');
});