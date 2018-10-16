// import { stringify } from "@angular/core/src/util";

const express = require('express');
const app = express();
const router = require('./rutas/api');

const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/pokemon', router);

app.listen(5000, function() {
    console.log('Node server is running..');
});