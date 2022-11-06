
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');



crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));
