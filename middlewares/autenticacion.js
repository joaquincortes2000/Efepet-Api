const jwt = require('jsonwebtoken');

//Verificar token
//Validar la ip del cliente


let verificaToken = (req, resp, next) => {

    let token = req.get('token'); //Nombre del header

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return resp.status(401).json({
                ok: false,
                err
            });
        }


        req.usuario = decoded.usuario;

        next();

    });


};


module.exports = {
    verificaToken
}