const productos = [
    { id: 1, nombre: "Teclado", precio: 450, stock: 10 },
    { id: 2, nombre: "Webcam", precio: 900, stock: 3 },
    { id: 3, nombre: "Mouse", precio: 250, stock: 0 }
];
function buscarProducto(id) {
    return productos.find(producto => producto.id === id);
}

module.exports = { productos, buscarProducto };