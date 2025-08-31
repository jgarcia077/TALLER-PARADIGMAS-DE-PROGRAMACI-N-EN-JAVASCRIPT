//EJERCICIO 5: TRANSFORMACIÓN DE DATOS (Paradigma Funcional)
//Transforma el array de productos usando map y reduce:
//- Agrega campo "priceWithTax" (19% IVA)
//- Agrega campo "status" basado en stock (High, Medium, Low)
//- Crea un resumen de inventario por categoría

//Se agrega stock para poder realizar el status High, Medium, low)
const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP", stock: 110}, 
    { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech", stock: 90 },
    { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA" , stock: 40},
    { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA", stock: 85 },
    { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair", stock: 120 }
];

// 1) Agregar campo priceWithTax (19% IVA)
const productsWithTax = products.map(p => ({
  ...p, // copiamos el objeto original
  priceWithTax: +(p.price * 1.19).toFixed(2) // se calcula el precio con IVA y se redondea
}));

// 2) Agregar campo status según stock
// High: stock > 100, Medium: 50-100, Low: < 50
const productsWithStatus = productsWithTax.map(p => {
  let status = "Low"; // valor por defecto
  if (p.stock > 100) status = "High"; // si stock es mayor a 100
  else if (p.stock >= 50) status = "Medium"; // si stock está entre 50 y 100
  return { ...p, status }; // se retorna el producto con el nuevo campo "status"
});

// 3) Resumen de inventario por categoría
const inventorySummary = productsWithStatus.reduce((acc, p) => {
  // si la categoría no existe en el acumulador, se inicializa
  if (!acc[p.category]) {
    acc[p.category] = { totalProducts: 0, totalStock: 0, totalValue: 0 };
  }
  // se van sumando los valores de cada producto
  acc[p.category].totalProducts += 1; // cuenta de productos
  acc[p.category].totalStock += p.stock; // suma de stock
  acc[p.category].totalValue += p.price * p.stock; // valor total por categoría
  return acc;
}, {}); // objeto vacío inicial

// Se muestran los resultados en consola
console.log("Productos con IVA:");
console.log(productsWithTax);

console.log("\nProductos con Status:");
console.log(productsWithStatus);

console.log("\nResumen de inventario por categoría:");
console.log(inventorySummary);