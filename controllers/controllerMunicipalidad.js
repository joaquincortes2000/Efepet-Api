const moongoose = require('mongoose');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const bodyParser = require('body-parser');

var controllerMunicipalidad = {};
const Municipalidad = require('../models/municipalidad');



controllerMunicipalidad.list = function(req, res) {
    Municipalidad.find()
        .exec((err, municipalidad) => {
            if (err) {
                return res.json({
                    data: [],
                    msg: 'Error en la petición',
                    code: 400
                });
            }

            res.json({
                data: [
                    municipalidad
                ],
                msg: 'Petición exitosa',
                code: 200
            });
        })
}

controllerMunicipalidad.save = function(req, res) {
    let body = req.body;

    let municipalidad = new Municipalidad({
        nombre: body.nombre,
        rut: body.rut,
        password: bcrypt.hashSync(body.password, 5),
        alcalde: body.alcalde,
        direccion: body.direccion
    });

    municipalidad.save((err, municipalidadDB) => {
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
                municipalidad: municipalidadDB
            },
            msg: 'Petición exitosa',
            code: 201
        });
    })
}

controllerMunicipalidad.updateAlcalde = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['alcalde']);

    Municipalidad.findByIdAndUpdate(id, body, { new: true }, (err, municipalidadDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }
        res.json({
            data: {
                municipalidad: municipalidadDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    })
}

controllerMunicipalidad.updatePassword = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['password']);

    Municipalidad.findByIdAndUpdate(id, body, { new: true }, (err, municipalidadDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }
        res.json({
            data: {
                municipalidad: municipalidadDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    })
}

controllerMascota.delete = function(req, res) {
    let id = req.params.id;
    let cambiarEstado = {
        estado: false
    }

    Mascotas.findByIdAndUpdate(id, cambiarEstado, { new: true }, (err, municipalidadDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        };

        if (!municipalidadDB) {
            return res.status(400).json({
                data: [],
                msg: 'Municipalidad no encontrada',
                code: 404
            });
        }

        res.json({
            data: {
                municipalidad: municipalidadDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    });
}

module.exports = controllerMunicipalidad;