const argv = require('yargs').options('b',{
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe:'es la base de la tabla'
}).check((argv, options)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero';
    }else{
        return true;
    }
}).options('l',{
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe:'muestra la tabla en consola'
})
.options('h',{
    alias: 'hasta',
    type: 'number',
    demandOption:true,
    describe:'El limite del multiplicando'
}).argv

module.exports = argv;