const fs = require('fs');
const colores = require('../config/colors'); //llamo la funcion desestructurada
//const { argv } = require('../config/yargs');

const crearbase = async(base = 1, listar = false, ciclos = 10) =>{

  try {
    let salida = '';

    for (let i=1;i<=ciclos;i++) {
      salida += colores.silly(`${base} x ${i} = ${base*i}\n`);
    }

    fs.writeFileSync(`./salida/tablaDel${base}.txt`, salida);

    if(listar){
      console.log(salida);
    }

    return (colores.verde(`Tabla del ${base} creada`)); 
  } catch (err) {
    throw(err);
  }
 

}

  
module.exports = { //de esta forma exporto archivos para ser llamados por la app principal.
  crearbase
}

