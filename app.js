const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


//let argv2 = process.argv;
//console.log(argv2);

// console.log(argv);
// console.log(argv.base);
// console.log(argv.limite);

let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado}`, colors.green(archivo)))
            .catch(e => console.log(e).red);
        break;
    default:
        console.log('comando no reconocido');
}




// let parametro = argv[2];
// let base = parametro.split('=')[1];