const moongoose = require('mongoose');


let Schema = moongoose.Schema;

let VeterinariasSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    img: {
        img1: {
            type: String,
            require: true
        },
        img2: {
            type: String,
            require: false
        }
    },
    horario: {
        type: String,
        require: true
    },
    veterinarioEncargado: {
        type: String,
        require: true
    },
    servicios: {
        img: {
            type: String,
            require: true
        },
        nombre: {
            type: String,
            require: true
        },
        precio: {
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


module.exports = moongoose.model('Veterinarias', VeterinariasSchema);