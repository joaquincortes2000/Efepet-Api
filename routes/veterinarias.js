const express = require('express');
const _ = require('underscore');
var router = require('express').Router();

const Veterinaria = require('../models/veterinarias');
const controllerVeterinaria = require('../controllers/controllerVeterinaria');

const { verificaToken } = require('../middlewares/autenticacion');

const bodyParser = require('body-parser');


//Obtener registros, datos + cantidad total
router.get('/', controllerVeterinaria.list);

//Insertar registros
router.post('/', controllerVeterinaria.save);

//Actualizar registros
router.put('/:id', controllerVeterinaria.update);

//Cambia el estado de una mascota
router.delete('/:id', controllerVeterinaria.delete);


module.exports = router;