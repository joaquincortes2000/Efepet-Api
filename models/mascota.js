const moongoose = require('mongoose');

let Estados = {
    values: ['Activa', 'No activa', 'Fallecida'],
    message: ['{VALUE} no es un estado válido']
}


let Schema = moongoose.Schema;

let mascotaSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    especie: {
        type: String,
        require: true
    },
    raza: {
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: Date,
        require: true
    },
    descripcion: {
        type: String,
        require: false
    },
    estadoVacunas: {
        type: String,
        require: true
    },
    img: {
        img1: {
            type: String,
            require: false
        },
        img2: {
            type: String,
            require: true
        }
    },
    microchip: {
        type: String,
        require: true,
    },
    edad: {
        type: Number,
        require: false
    },
    estado: {
        type: String,
        default: 'Activa',
        enum: Estados,
        require: true
    },
    municipalidad: {
        type: String,
        require: true
    }
});


module.exports = moongoose.model('Mascota', mascotaSchema);