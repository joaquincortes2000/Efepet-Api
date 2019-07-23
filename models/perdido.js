const moongoose = require('mongoose');


let Schema = moongoose.Schema;

let PerdidoSchema = new Schema({
    fechaPerdida: {
        type: Date,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
    },
    imgPerdido: {
        type: String,
        require: true,
    },
    imgZona: {
        type: String,
        require: false

    },
    contacto: {
        telefono: {
            type: String,
            require: true,
        },
        direccion: {
            type: String,
            require: false
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

module.exports = moongoose.model('Perdido', PerdidoSchema);