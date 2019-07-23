const express = require('express');
var router = require('express').Router();

//Import routes
var mascota = require('./mascotas');
var data = require('./data');
var anuncio = require('./anuncio');
var vet = require('./veterinarias');
var muni = require('./municipalidad');
var login = require('./login');

//Use routes
router.use('/mascotas', mascota);
router.use('/propietarios', data);
router.use('/anuncios', anuncio);
router.use('/veterinarias', vet);
router.use('/municipalidad', muni);
router.use('/login', login);


router.get('/', function(req, res) {
    res.json({ msg: '¡Bienvenido a efepet API!' })
})





module.exports = router;