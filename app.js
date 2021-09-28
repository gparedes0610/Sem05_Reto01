//cantidad de litros de produce
let l = 50;
let precioGalon = 10;
//convertir litros a galones

let litrosaGalones = l / 3.785;

let cantidaddeGalones = parseInt(litrosaGalones.toString());

console.log(`El total de litros convertidos a galones es ${cantidaddeGalones}`);

//ganancia
let GananciaporGalones = cantidaddeGalones * precioGalon;
console.log(`Tiene una ganancia de ${GananciaporGalones}`);
