const fs = require('fs');
var colors = require('colors');



let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`    Tabla del ${base}`.red);
    console.log('========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${ base } no es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}