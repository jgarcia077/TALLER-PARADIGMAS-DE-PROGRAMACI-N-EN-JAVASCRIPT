// Taller: Paradigmas - CALCULADORA DE PRODUCTOS (Paradigma Orientado a Objetos)
// Crea una clase Product con las siguientes características:
// - Propiedades: id, name, price, category, stock
// - Métodos: updateStock(), calculateDiscount(), getInfo()
//- Método estático: getTotalValue(products)

// Tareas:
// - Crea 5 productos diferentes
// - Implementa un método para calcular el valor total del inventario
// - Crea un método que aplique descuento por categoría

class Product {
  constructor(id, name, price, category, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  // Actualizar stock
  updateStock(amount) {
    this.stock += amount;
  }

  // Calcular precio con descuento (porcentaje)
  calculateDiscount(percent) {
    return this.price - (this.price * percent) / 100;
  }

  // Información del producto
  getInfo() {
    return `${this.name} (${this.category}) - $${this.price} | Stock: ${this.stock}`;
  }

  // Método estático: valor total del inventario
  static getTotalValue(products) {
    return products.reduce((total, p) => total + p.price * p.stock, 0);
  }
}

// Crear 5 productos
const products = [
  new Product(1, "Portatil", 3000, "Electronics", 10),
  new Product(2, "Mouse", 50, "Electronics", 100),
  new Product(3, "Silla", 400, "Furniture", 15),
  new Product(4, "Escritorio", 600, "Furniture", 8),
  new Product(5, "Monitor", 800, "Electronics", 20),
];

// Mostrar información de los productos
console.log(" EJERCICIO 2: PRODUCTOS (POO) \n");

products.forEach(p => console.log(p.getInfo()));
console.log("");

// Valor total del inventario
const totalValue = Product.getTotalValue(products);
console.log(" Valor total del inventario:", totalValue);
console.log("");

// Descuento en categoría "Electronics" (10%)
const electronicsDiscount = products
  .filter(p => p.category === "Electronics")
  .map(p => ({
    name: p.name,
    original: p.price,
    discount: p.calculateDiscount(10)
  }));

console.log(" Electronicos con 10% descuento:", electronicsDiscount);

console.log("\n FIN EJERCICIO 2 ");