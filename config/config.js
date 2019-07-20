// Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datos
let urlDB;

//if (process.env.NODE_ENV === 'dev') {
//    urlDB = 'DBLOCAL'; //URL db local
//} else {
//    urlDB = 'DBNUBE'; //URL db nube
//}

urlDB = 'url';

//Vencimiento token 60 * 60 * 24 = 24 horas
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24;



//SEED
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

process.env.URLDB = urlDB;