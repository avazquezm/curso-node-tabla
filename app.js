
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

// const [,,arg3='base=1'] = process.argv;
// const[,base=1] = arg3.split('=');

// console.log(base);


crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err));
