const fs = require('fs');
require('colors');

const crearTabla = async(base = 5, listar, hasta = 10) =>{
    if(isNaN(base)){
       throw 'No es un numero';
    }
    try {
        let salida = '';
        console.log(`TABLA DEL ${base}`.green);
        for(let i = 1; i <= hasta; i++){
            salida += `${base} ${'x'.red} ${i} ${'='.green} ${base * i}\n`;
        }
        const result = await fs.writeFileSync(`txt/tabla-${base}.txt`, salida);
        if(listar){
            console.log(salida);
        }
        return `Archivo (tabla-${base}.txt)`;
    } catch (error) {
        throw error;
    }
    
}

const mostrar = (base, listar) => {
    console.log(base, listar);
}

module.exports = {
    crearTabla,
    mostrar
};