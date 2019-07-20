const express = require('express');
const _ = require('underscore');
var router = require('express').Router();

const Mascotas = require('../models/mascota');
const controllerMascota = require('../controllers/controllerMascota');

const { verificaToken } = require('../middlewares/autenticacion');

const bodyParser = require('body-parser');


//Obtener registros, datos + cantidad total
router.get('/', controllerMascota.list);

//Insertar registros
router.post('/', controllerMascota.save);

//Actualizar registros
router.put('/:id', controllerMascota.update);

//Cambia el estado de una mascota
router.delete('/:id', controllerMascota.delete);


module.exports = router;