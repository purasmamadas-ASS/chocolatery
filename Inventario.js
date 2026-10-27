const productos = [
    { id: 1, nombre: "Teclado", precio: 450, stock: 10 },
    {id:  2, nombre: "Webcam", precio: 900, stock: 3 },
    { id: 3, nombre: "Mouse", precio: 250, stock: 0 },
    { id: 4, nombre: "Monitor", precio: 2800, stock: 5 },
    { id: 5, nombre: "Audífonos", precio: 600, stock: 8 },
    { id: 6, nombre: "Disco Duro", precio: 1200, stock: 2 }
];
// Mostrar todos los productos
console.log("INVENTARIO COMPLETO");
console.log(productos);

// Mostrar solo productos disponibles
const disponibles = productos.filter(
    producto => producto.stock > 0
);
// Mostrar solo productos agotados
const agotados = productos.filter(
    producto => producto.stock === 0
);
//mostrar productos con precio mayor a 500
const productoscaros = productos.filter(
    producto => producto.precio > 500
);
//busca un producto con id especifico y lo retorna
const buscarProducto = (id) => {
    return productos.find(producto => producto.id === id);
};
const nombres = productos.map
(producto => producto.nombre);


console.log("PRODUCTOS DISPONIBLES");
console.log(disponibles);
console.log(nombres);
// Calcular el valor total del inventario
const valorInventario = productos.reduce(
    (total, producto) =>
        total + producto.precio * producto.stock,
    0
);
console.log("Productos mayor a 500:", productoscaros);
console.log("Disponibles:", disponibles);
console.log("Agotados:", agotados);
console.log("Valor total:", valorInventario);
//poner const para las variables el igual y todo eso 
const resultado = buscarProducto(5);
console.log("Producto encontrado:", resultado);
console.log("Nombre:", resultado?.nombre);