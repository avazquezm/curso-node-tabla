
const fs = require('fs');

const crearArchivo = async(base=1, listar=false) =>{

    try {
        const nombreArchivo=`tabla-del-${base}.txt`;
        let salida = '';


        for(let i = 1; i<=10; i++){
            salida += `${base} X ${i} = ${base*i}\n`;
        } 

        if(listar) console.log(salida);
            

        fs.writeFileSync(`./output/${nombreArchivo}`, salida);

        return nombreArchivo;

    } catch (error) {
        throw error;
    }
   
   
}

module.exports = {
    crearArchivo
}