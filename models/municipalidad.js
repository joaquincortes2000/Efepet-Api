const moongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



let Schema = moongoose.Schema;

let MunicipalidadSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    rut: {
        type: String,
        require: true,
        unique: true
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

propietarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

module.exports = moongoose.model('Municipalidad', MunicipalidadSchema);