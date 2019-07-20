const moongoose = require('mongoose');


let Schema = moongoose.Schema;

let SociedadProtectoraSchema = new Schema({
    telefono: {
        type: String,
        require: true
    },
    imgRef: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    horario: {
        type: String,
        require: true
    },
    nombre: {
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


module.exports = moongoose.model('SociedadP', SociedadProtectoraSchema);