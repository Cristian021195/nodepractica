/*const {crearTabla} = require('./helpers/mult');
crearTabla(5).then(nombre => console.log(nombre, ' creado!'))
.catch(err => console.log(err));*/



const {crearTabla, mostrar} = require('./helpers/mult');
const argv = require('./config/yargs');
require('colors');
//console.log(argv, 'base: ',argv.base);

crearTabla(argv.base, argv.listar, argv.hasta).then(nombre => console.log(nombre.rainbow, ' creado!'))
.catch(err => console.log(err));
