// Taller: Paradigmas - Ejercicio 3 (Paradigma Procedural)
//Implementa funciones para validar diferentes tipos de datos:
//- validateEmail(email) - verifica formato de email
//- validatePassword(password) 
// - verifica fortaleza de contraseña
//- validateAge(age) - verifica edad válida
//- validateProduct(product) - válida objeto producto completo



// Validar email (formato básico con @ y .)
function validarEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return { valido: false, mensaje: " Email inválido" };
  }
  return { valido: true, mensaje: " Email válido" };
}

// Validar edad (entre 18 y 99)
function validarEdad(edad) {
  if (typeof edad !== "number" || edad < 18 || edad > 65) {
    return { valido: false, mensaje: " Edad inválida (debe estar entre 18 y 65)" };
  }
  return { valido: true, mensaje: " Edad válida" };
}

// Procedimiento principal
function validarUsuario(usuario) {
  console.log(`\n👤 Validando usuario: ${usuario.nombre}`);
  console.log(validarNombre(usuario.nombre).mensaje);
  console.log(validarEmail(usuario.email).mensaje);
  console.log(validarEdad(usuario.edad).mensaje);
}

// Lista de usuarios de prueba
const usuarios = [
  { nombre: "Ana", email: "ana@hotmail.com", edad: 25 },
  { nombre: "Li", email: "correo_invalido", edad: 17 },
  { nombre: "Carlos", email: "carlos@gmail.com", edad: 45 },
  { nombre: "Maria", email: "maria@hotmail", edad: 66 },
];