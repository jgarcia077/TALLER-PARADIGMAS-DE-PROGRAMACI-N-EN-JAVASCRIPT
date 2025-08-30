// ejercicio2-poo.js
// Taller: Paradigmas - Ejercicio 2 (Paradigma Orientado a Objetos)
// Tareas:
// - Crear clase Product con propiedades y métodos
// - Crear 5 productos diferentes
// - Calcular valor total del inventario
// - Aplicar descuento por categoría

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