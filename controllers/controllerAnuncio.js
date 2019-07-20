const moongoose = require('mongoose');
const Anuncios = require('../models/anuncio');
const _ = require('underscore');
const bodyParser = require('body-parser');

var controllerAnuncio = {};

controllerAnuncio.list = function(req, res) {
    Anuncios.find()
        .exec((err, anuncios) => {

            if (err) {
                return res.json({
                    data: [],
                    msg: 'Error en la petición',
                    code: 400
                });
            }

            res.json({
                data: {
                    anuncios
                },
                msg: 'Petición exitosa',
                code: 200
            });

        })
};

controllerAnuncio.save = function(req, res) {
    let body = req.body;

    let anuncio = new Anuncios({
        fechaPublicacion: body.fechaPublicacion,
        descripcion: body.descripcion,
        autor: body.autor,
        municipalidad: body.municipalidad
    });

    anuncio.save((err, anuncioDB) => {
        if (err) {
            return res.status(400).json({
                data: [
                    err
                ],
                msg: 'Error en la petición',
                code: 400
            });
        }

        res.json({
            data: {
                anuncio: anuncioDB
            },
            msg: 'Anuncio registrado correctamente',
            code: 201
        });
    })
};

controllerAnuncio.update = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['descripcion', 'autor']);

    Anuncios.findByIdAndUpdate(id, body, { new: true }, (err, anuncioDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }

        res.json({
            data: {
                anuncio: anuncioDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    })
};

controllerAnuncio.delete = function(req, res) {
    let id = req.params.id;
    let cambiarEstado = {
        estado: false
    }

    Anuncios.findByIdAndUpdate(id, cambiarEstado, { new: true }, (err, anuncioBorrado) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        };

        if (!anuncioBorrado) {
            return res.status(404).json({
                data: [],
                msg: 'Anuncio no encontrado',
                code: 404
            });
        }

        res.json({
            data: {
                anuncio: anuncioBorrado
            },
            msg: 'Petición exitosa',
            code: 200
        });
    });
};

module.exports = controllerAnuncio;