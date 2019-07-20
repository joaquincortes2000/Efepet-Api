const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


var router = require('express').Router();
const Municipalidad = require('../models/municipalidad');


router.post('/', (req, res) => {
    let body = req.body;

    UsuarMunicipalidadio.findOne({ rut: body.rut }, (err, municipalidadDB) => {

        if (err) {
            return res.json({
                data: [],
                msg: 'Error en la petición',
                code: 500
            });
        }

        if (!municipalidadDB) {
            if (err) {
                return res.json({
                    data: [],
                    msg: 'Usuario y/o contraseña incorrectos',
                    code: 400
                });
            }
        }


        if (!bcrypt.compareSync(body.password, municipalidadDB.password)) {
            if (err) {
                return res.json({
                    data: [],
                    msg: 'Usuario y/o contraseña incorrectos',
                    code: 400
                });
            }
        }

        let token = jwt.sign({
            municipalidad: municipalidadDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            Municipalidad: municipalidadDB,
            token
        });

    });

});








module.exports = app;