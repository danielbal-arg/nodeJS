const argv = require('yargs')  //parte del paquete yargs permite establecer condiciones de los inputs
              .option('l',{
                alias:'listar',
                type: 'boolean',
                demandOption: true,
                default: false
              })    
              .option('c',{
                alias:'ciclos',
                type: 'number',
                demandOption: true,
                default: 10
              })                        
              .argv

module.exports = {argv}