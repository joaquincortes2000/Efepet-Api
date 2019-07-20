const moongoose = require('mongoose');
const Veterinarias = require('../models/veterinarias');
const _ = require('underscore');
const bodyParser = require('body-parser');

var controllerVeterinaria = {};

controllerVeterinaria.list = function(req, res) {
    Veterinarias.find()
        .exec((err, veterinarias) => {

            if (err) {
                return res.json({
                    data: [],
                    msg: 'Error en la petición',
                    code: 400
                });
            }

            res.json({
                data: [
                    veterinarias
                ],
                msg: 'Petición exitosa',
                code: 200
            });

        })
};

controllerVeterinaria.save = function(req, res) {
    let body = req.body;

    let veterinaria = new Veterinarias({
        nombre: body.nombre,
        direccion: body.direccion,
        telefono: body.telefono,
        email: body.email,
        img1: body.img1,
        img2: body.img2,
        horario: body.horario,
        veterinarioEncargado: body.veterinarioEncargado,
        img: body.img,
        nombre: body.nombre,
        precio: body.precio,
        municipalidad: body.municipalidad
    })

    veterinaria.save((err, veterinariaDB) => {

        if (err) {
            return res.json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }

        res.json({
            data: [
                veterinariaDB
            ],
            msg: 'Veterinaria registrada correctamente',
            code: 201
        });

    })
};

controllerVeterinaria.update = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['direccion', 'telefono', 'correo', 'img1', 'img2', 'horario', 'veterinarioEncargado', 'img', 'nombre', 'precio']);
    Veterinarias.findByIdAndUpdate(id, body, { new: true }, (err, veterinariaDB) => {

        if (err) {
            return res.json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }

        res.json({
            data: {
                veterinaria: veterinariaDB
            },
            msg: 'Veterinaria actualizada correctamente',
            code: 200

        });
    })
};

controllerVeterinaria.delete = function(req, res) {
    let id = req.params.id;
    let cambiarEstado = {
        estado: false
    }

    Veterinarias.findByIdAndUpdate(id, cambiarEstado, { new: true }, (err, veterinariaDB) => {

        if (err) {
            return res.json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }

        if (!veterinariaDB) {
            return res.status(404).json({
                data: [],
                msg: 'Veterinaria no encontrada',
                code: 404
            });
        }

        res.json({
            data: {
                veterinaria: veterinariaDB
            },
            msg: 'Veterinaria eliminada correctamente',
            code: 200

        });
    })
};

module.exports = controllerVeterinaria;