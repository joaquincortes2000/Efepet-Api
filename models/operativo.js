const moongoose = require('mongoose');


let Schema = moongoose.Schema;

let operativoSchema = new Schema({
    fechaCierre: {
        type: Date,
        require: true
    },
    capacidad: {
        type: String,
        require: true
    },
    cuposDisponibles: {
        type: String,
        require: true
    },
    detalles: {
        type: String,
        require: true
    },
    tipoOperativo: {
        type: String,
        require: false
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


module.exports = moongoose.model('Operativo', operativoSchema);