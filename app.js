
console.clear(); //limpio la terminal

const {crearbase} = require('./helpers/multiplicar'); //llamo la funcion desestructurada
const {argv} = require('./config/yargs'); //llamo la funcion desestructurada


crearbase(argv.base, argv.listar, argv.ciclos)
  .then(archivocreado =>console.log(archivocreado,'Creacion con exito'))
  .catch(err => console.log(err))