/* 
parse(): Acepta una cadena JSON como parámetro y devuelve el objeto JavaScript correspondiente.
stringify(): Acepta un objeto como parámetro y devuelve la cadena JSON correspondiente.
*/
function parsearBicis(){

    const fs = require('fs');
    const bicis = fs.readFileSync('./bicicletas.json', "utf-8");
    return JSON.parse(bicis);

}

module.exports = parsearBicis;