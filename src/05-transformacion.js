//EJERCICIO 5: TRANSFORMACIÓN DE DATOS (Paradigma Funcional)
//Transforma el array de productos usando map y reduce:
//- Agrega campo "priceWithTax" (19% IVA)
//- Agrega campo "status" basado en stock (High, Medium, Low)
//- Crea un resumen de inventario por categoría

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", brand: "HP" },
    { id: 2, name: "Mouse", price: 25, category: "Electronics", brand: "Logitech" },
    { id: 3, name: "Desk", price: 200, category: "Furniture", brand: "IKEA" },
    { id: 4, name: "Chair", price: 150, category: "Furniture", brand: "IKEA" },
    { id: 5, name: "Keyboard", price: 80, category: "Electronics", brand: "Corsair" }
];
