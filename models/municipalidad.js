const moongoose = require('mongoose');



let Schema = moongoose.Schema;

let MunicipalidadSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    rut: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    alcalde: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        default: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = moongoose.model('Municipalidad', MunicipalidadSchema);