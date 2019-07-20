const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
var router = require('express').Router();

const Municipalidad = require('../models/municipalidad');
const controllerMunicipalidad = require('../controllers/controllerMunicipalidad');

const { verificaToken } = require('../middlewares/autenticacion');

const bodyParser = require('body-parser');

//Obtener registros, datos + cantidad total
router.get('/', verificaToken, controllerMunicipalidad.list);

//Insertar registros
router.post('/', verificaToken, controllerMunicipalidad.save);

//Actualizar el alcalde
router.put('/:id', verificaToken, controllerMunicipalidad.updateAlcalde);

//Actualizar el password
router.put('/:id', verificaToken, controllerMunicipalidad.updatePassword);

//Cambia el estado de una mascota
router.delete('/:id', verificaToken, controllerMunicipalidad.delete);

module.exports = router;