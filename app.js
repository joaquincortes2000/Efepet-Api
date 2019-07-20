var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


mongoose.Promise = global.Promise;
//aca se cambia el nombre segun la BD
var db = 'efepet';

mongoose.connect('mongodb+srv://bdefepet:jxdGBON53pLlfMqU@clusterfree-n8dig.mongodb.net/efepet?', {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

//Habilitar cors 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//Definir rutas
var router = require('./routes');
app.use('/efepet/v1', router);


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});