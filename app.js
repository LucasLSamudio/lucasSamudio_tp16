const parsearBicis = require("./datosBici");

const dhBici = {
    bicicletas: parsearBicis(),
    
    buscarBici(id){
        const x = this.bicicletas.filter(bici => bici.id === id);
        if (x.length == 0){
            return null;
        }
            return x;
    },

    venderBici(id){
        const bici = this.buscarBici(id);
        if(bici){
            bici.vendido = true;
            return bici;
        }
        else{
            return "Bicicleta no encontrada."
        }
    },

    bicisParaLaVenta(){
        const biciParaVender = this.bicicletas.filter((bici) => bici.vendido == false)
        return biciParaVender;
    },

    totalDeVentas() {
        return this.bicicletas.filter(bici => bici.vendido).reduce((total, bici) => total + bici.precio, 0);
    },

    /* ----------------------------------------------------- */

    aumentoBici(aum){ 
        let aumento = this.bicicletas.map((bici) => bici.precio = ((bici.precio * aum) / 100)+bici.precio); 
        for(let i = 0; i<this.bicicletas.length; i++){
            console.log(`Aumento del ${aum}%, bicicleta con ID ${i+1} tiene un precio final de: $`+aumento[i]);
        }
    },

    biciPorRodado(numRodado){
        const biciXRodado = this.bicicletas.filter((bici) => bici.rodado == numRodado);
        return biciXRodado;
    },

    listarTodasLasBicis(){
        for(let elem of this.bicicletas){
            console.log(elem);
        }
    }
}

    // console.log(dhBici.buscarBici(21));
    // console.log(dhBici.buscarBici(3));
    // console.log(dhBici.buscarBici(8));
    // console.log(dhBici.venderBici(2));
    // console.log(dhBici.bicisParaLaVenta());
    // console.log(dhBici.totalDeVentas());

// dhBici.aumentoBici(25);
// console.log(dhBici.biciPorRodado(29));
// dhBici.listarTodasLasBicis();