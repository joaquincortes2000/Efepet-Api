const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const router = require('express').Router();

const Propietario = require('../models/propietario');

const { verificaToken } = require('../middlewares/autenticacion');

const bodyParser = require('body-parser');


//Obtener registros, datos + cantidad total
router.get('/', (req, res) => {

    Propietario.find()
        .exec((err, propietarios) => {

            if (err) {
                return res.json({
                    data: [],
                    msg: 'Error en la petición',
                    code: 400
                });
            }

            Propietario.countDocuments((conteo) => {
                res.json({
                    data: {
                        propietarios,
                        cuantos: conteo
                    },
                    msg: 'Petición exitosa',
                    code: 200
                });
            })

        })
})

//Insertar registros
router.post('/', function(req, res) {
    let body = req.body;

    let propietario = new Propietario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password: bcrypt.hashSync(body.password, 5),
        petImg: body.petImg
    });

    propietario.save((err, propietarioDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }


        res.json({
            data: {
                propietario: propietarioDB
            },
            msg: 'Petición exitosa',
            code: 201
        });
    })

})

//Actualizar registros
router.put('/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'apellido', 'petImg']);

    Propietario.findByIdAndUpdate(id, body, { new: true }, (err, propietarioDB) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        }

        res.json({
            data: {
                propietario: propietarioDB
            },
            msg: 'Petición exitosa',
            code: 200
        });
    })
})

router.delete('/:id', function(req, res) {
    let id = req.params.id;
    let cambiarEstado = {
        estado: false
    }

    Propietario.findByIdAndUpdate(id, cambiarEstado, { new: true }, (err, propietarioBorrado) => {
        if (err) {
            return res.status(400).json({
                data: [],
                msg: 'Error en la petición',
                code: 400
            });
        };

        if (!propietarioBorrado) {
            return res.status(400).json({
                data: [],
                msg: 'Usuario no encontrado',
                code: 404
            });
        }

        res.json({
            data: {
                propietario: propietarioBorrado
            },
            msg: 'Petición exitosa',
            code: 200
        });
    });
})


module.exports = router;