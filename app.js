const express = require('express');
const app = express();
const router = require('./rutas/api');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
// app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/pokedex');

app.use(bodyParser.json());

app.use('/api/v1/pokemon', router);

app.use(function(err, req, res, next) {
    res.status(404).json({ error: err.message });
});

app.use(function(err, req, res, next) {
    res.status(422).json({ error: err.message });
});

app.use(cors());

app.listen(5000, function() {
    console.log('Node server is running..');
});