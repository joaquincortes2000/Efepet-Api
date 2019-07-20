const express = require('express');
const _ = require('underscore');
var router = require('express').Router();

const Anuncios = require('../models/anuncio');
const controllerAnuncio = require('../controllers/controllerAnuncio')

const { verificaToken } = require('../middlewares/autenticacion');

const bodyParser = require('body-parser');


//Obtener registros, datos + cantidad total
router.get('/', controllerAnuncio.list);

//Insertar registros
router.post('/', controllerAnuncio.save)

//Actualizar registros
router.put('/:id', controllerAnuncio.update)

router.delete('/:id', controllerAnuncio.delete)


module.exports = router;