const fs = require('fs');

const crearTabla = (base = 5) =>{
    let salida = '';
    console.log('TABLA DEL ', base);
    for(let i = 1; i <= 10; i++){
        salida += `${base} x ${i} = ${base * i}\n`;a
    }
    fs.writeFileSync(`txt/tabla-${base}.txt`, salida);
}

module.exports = {
    crearTabla
};