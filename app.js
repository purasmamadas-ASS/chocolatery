const { productos, buscarProducto } = require("./productos");

console.log("Total de productos:", productos.length);

const resultado = buscarProducto(5);
console.log("Producto encontrado:", resultado);