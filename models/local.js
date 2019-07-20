const moongoose = require('mongoose');



let Schema = moongoose.Schema;

let LocalSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    contacto: {
        telefono: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    img: {
        img1: {
            type: String,
            require: true
        },
        img2: {
            type: String,
            require: true
        }
    },
    estado: {
        type: Boolean,
        default: true
    },
    municipalidad: {
        type: String,
        require: true
    }
});