// Taller: Paradigmas - VALIDACIÓN DE DATOS (Paradigma Procedural)
// Implementa funciones para validar diferentes tipos de datos:
// - validateEmail(email) - verifica formato de email
// - validatePassword(password) - verifica fortaleza de contraseña
// - validateAge(age) - verifica edad válida
// - validateProduct(product) - valida objeto producto completo


// Validar email (formato básico con regex)
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/; // patrón básico: texto@texto.texto
  return regex.test(email);       // retorna true si coincide, false si no
}

// Validar contraseña (mínimo 8 caracteres, con números y letras)
function validatePassword(password) {
  if (typeof password !== "string") return false; // solo cadenas válidas
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
  return regex.test(password); // verifica letras y números, mínimo 8
}

// Validar edad (18 a 99)
function validateAge(age) {
  return typeof age === "number" && age >= 18 && age <= 99; // rango permitido
}

// Validar producto completo
function validateProduct(product) {
  return (
    typeof product.id === "number" &&        // id debe ser numérico
    typeof product.name === "string" &&      // nombre debe ser texto
    typeof product.price === "number" &&     // precio debe ser numérico
    product.price > 0 &&                     // precio positivo
    typeof product.category === "string"     // categoría debe ser texto
  );
}

// 🔎 Pruebas de validación
console.log(" Email válido:", validateEmail("usuario@example.com")); // true
console.log(" Email inválido:", validateEmail("correo_invalido"));   // false

console.log(" Password válido:", validatePassword("clave1234"));     // true
console.log(" Password inválido:", validatePassword("123"));         // false

console.log(" Edad válida:", validateAge(25));                        // true
console.log(" Edad inválida:", validateAge(15));                      // false

const productOk = { id: 1, name: "Laptop", price: 1200, category: "Electronics" };
const productBad = { id: "X", name: 123, price: -50, category: null };

console.log(" Producto válido:", validateProduct(productOk));         // true
console.log(" Producto inválido:", validateProduct(productBad));      // false

console.log("\nFIN EJERCICIO 3"); // mensaje final