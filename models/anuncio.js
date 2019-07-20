const moongoose = require('mongoose');



let Schema = moongoose.Schema;

let AnuncioSchema = new Schema({
    fechaPublicacion: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
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

module.exports = moongoose.model('Anuncio', AnuncioSchema);