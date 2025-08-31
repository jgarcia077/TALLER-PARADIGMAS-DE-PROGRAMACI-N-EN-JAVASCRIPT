// Taller: Paradigmas - Ejercicio 4 FILTROS AVANZADOS (Paradigma Funcional)
// Dado el array de productos, implementa filtros usando métodos funcionales:
//Tareas:
//- Filtra productos por rango de precio (min, max)
//- Agrupa productos por categoría
//- Encuentra productos de una marca específica
//- Calcula estadísticas por categoría (promedio, total, cantidad)

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP" },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech" },
    { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA" },
    { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA" },
    { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair" }
]; 

// 1) Filtrar productos por rango de precio (min, max) - inclusive y ordenados de menor a mayor
function filterByPrice(productsList, min, max) {
  return productsList
    // Filtra solo los productos dentro del rango de precios
    .filter(function (p) {
      return p.price >= min && p.price <= max;
    })
    // Ordena los resultados de menor a mayor precio
    .sort(function (a, b) {
      return a.price - b.price;
    });
}

// 2) Agrupar productos por categoría -> { "Electronics": [...], "Furniture": [...] }
function groupByCategory(productsList) {
  return productsList.reduce(function (acc, p) {
    // Si la categoría aún no existe en el objeto, la inicializa como array vacío
    if (!acc[p.category]) acc[p.category] = [];
    // Agrega el producto dentro de su categoría correspondiente
    acc[p.category].push(p);
    return acc;
  }, {}); // Objeto inicial vacío {}
}

// 3) Encontrar productos de una marca específica
function findProductsByBrand(productsList, brandName) {
  // Devuelve solo los productos que coinciden con la marca indicada
  return productsList.filter(function (p) {
    return p.brand === brandName;
  });
}

// 4) Estadísticas por categoría: { total, average, count }
function statsByCategory(productsList) {
  const grouped = groupByCategory(productsList); // Reutiliza la agrupación previa
  const stats = {};
  for (const category in grouped) {
    const items = grouped[category]; // Productos de la categoría actual
    const total = items.reduce(function (sum, it) {
      return sum + it.price; // Suma los precios
    }, 0);
    const count = items.length; // Número de productos en la categoría
    const average = count === 0 ? 0 : total / count; // Promedio de precios
    // Guarda resultados en el objeto final
    stats[category] = {
      total: total,
      average: +average.toFixed(2), // Limita a 2 decimales
      count: count,
    };
  }
  return stats;
}

// Ejecución de pruebas
console.log("1) filterByPrice(products, 1, 999):");
console.log(filterByPrice(products, 1, 999));
console.log("");

console.log("2) groupByCategory(products):");
console.log(groupByCategory(products));
console.log("");

console.log('3) findProductsByBrand(products, "IKEA"):');
console.log(findProductsByBrand(products, "IKEA"));
console.log("");

console.log("4) statsByCategory(products):");
console.log(statsByCategory(products));
console.log("\nFIN EJERCICIO 4");