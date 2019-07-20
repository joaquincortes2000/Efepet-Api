const moongoose = require('mongoose');
const Mascotas = require('../models/mascota');
const _ = require('underscore');
const bodyParser = require('body-parser');

var controllerMascota = {};

controllerMascota.list = function(req, res) {
    Mascotas.find()

    .exec((err, mascotas) => {
        if (err) {
            return res.json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }
        res.json({
            data: {
                mascotas
            },
            msg: 'Petición exitosa',
            code: 200
        });


    })
};

controllerMascota.save = function(req, res) {
    let body = req.body;

    let mascota = new Mascotas({
        nombre: body.nombre,
        especie: body.especie,
        raza: body.raza,
        fechaNacimiento: body.fechaNacimiento,
        descripcion: body.descripcion,
        estadoVacunas: body.estadoVacunas,
        img1: body.img1,
        img2: body.img2,
        edad: body.edad,
        municipalidad: body.municipalidad
    });

    mascota.save((err, mascotaDB) => {
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
                mascota: mascotaDB
            },
            msg: 'Petición exitosa',
            code: 201
        });
    })
};

controllerMascota.update = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'descripcion', 'estadoVacunas', 'img1', 'img2']);

    Mascotas.findByIdAndUpdate(id, body, { new: true }, (err, mascotaDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }
        res.json({
            data: {
                mascota: mascotaDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    })
};

controllerMascota.delete = function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['estado']);

    Mascotas.findByIdAndUpdate(id, body, { new: true }, (err, mascotaBorrada) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        };

        if (!mascotaBorrada) {
            return res.status(400).json({
                data: [],
                msg: 'Mascota no encontrada no encontrado',
                code: 404
            });
        }

        res.json({
            data: {
                mascota: mascotaBorrada
            },
            msg: 'Petición exitosa',
            code: 200
        });
    });
};

module.exports = controllerMascota;