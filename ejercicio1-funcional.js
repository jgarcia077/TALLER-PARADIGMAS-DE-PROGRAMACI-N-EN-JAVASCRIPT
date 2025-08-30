// ejercicio1-funcional.js
// Taller: Paradigmas - Ejercicio 1 (Paradigma funcional)
// Tareas:
// - Encuentra todos los estudiantes de JavaScript con nota > 80
// - Calcula el promedio de notas de todos los estudiantes
// - Obtén array con solo nombres de estudiantes mayores de 20 años
// - Encuentra el estudiante con la nota más alta

// Datos de ejemplo (puedes modificar/añadir estudiantes)
const students = [
  { name: "Ana", course: "JavaScript", grade: 85, age: 22 },
  { name: "Luis", course: "Python", grade: 90, age: 19 },
  { name: "Marta", course: "JavaScript", grade: 75, age: 25 },
  { name: "Carlos", course: "JavaScript", grade: 95, age: 21 },
  { name: "Lucía", course: "Java", grade: 88, age: 23 },
];

// 1) Estudiantes de JavaScript con nota > 80
function getJsStudentsWithHighGrades(list) {
  // filter devuelve un nuevo array con los que cumplan la condición
  return list.filter(function (s) {
    return s.course === "JavaScript" && s.grade > 80;
  });
}

// 2) Promedio de notas de todos los estudiantes
function getAverageGrade(list) {
  if (!Array.isArray(list) || list.length === 0) return 0;
  // reduce acumula las notas y luego dividimos por la cantidad
  const sum = list.reduce(function (acc, s) {
    return acc + s.grade;
  }, 0);
  return sum / list.length;
}

// 3) Nombres de estudiantes mayores de 20 años
function getNamesOver20(list) {
  return list
    .filter(function (s) {
      return s.age > 20;
    })
    .map(function (s) {
      return s.name;
    });
}

// 4) Estudiante con la nota más alta
function getTopStudent(list) {
  if (!Array.isArray(list) || list.length === 0) return null;
  return list.reduce(function (best, s) {
    // best es el estudiante con mayor nota hasta ahora
    return s.grade > best.grade ? s : best;
  }, list[0]);
}

// === Ejecutar y mostrar resultados ===
console.log("=== EJERCICIO 1: GESTIÓN DE ESTUDIANTES ===\n");

const jsHigh = getJsStudentsWithHighGrades(students);
console.log("1) Estudiantes de JavaScript con nota > 80:");
console.log(jsHigh);
console.log(""); // línea en blanco para legibilidad

const avg = getAverageGrade(students);
console.log(`2) Promedio de notas de todos los estudiantes: ${avg.toFixed(2)}`);
console.log("");

const names20 = getNamesOver20(students);
console.log("3) Nombres de estudiantes mayores de 20 años:");
console.log(names20);
console.log("");

const top = getTopStudent(students);
console.log("4) Estudiante con la nota más alta:");
console.log(top);
console.log("\n=== FIN EJERCICIO 1 ===");