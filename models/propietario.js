const moongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');



let Schema = moongoose.Schema;

let propietarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    petImg: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }

});


//No mostrar password mediante un toJson
propietarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

propietarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});


module.exports = moongoose.model('Propietario', propietarioSchema);