// Taller: Paradigmas - GESTIÓN DE ESTUDIANTES (Paradigma Funcional)
// Tareas:
// - Encuentra todos los estudiantes de JavaScript con nota > 80
// - Calcula el promedio de notas de todos los estudiantes
// - Obtén array con solo nombres de estudiantes mayores de 20 años
// - Encuentra el estudiante con la nota más alta

// Datos de ejemplo (puedes modificar/añadir estudiantes)
const students = [
  { id: 1, name: "Ana", age: 20, grade: 85, course: "JavaScript" },
  { id: 2, name: "Carlos", age: 22, grade: 92, course: "Python" },
  { id: 3, name: "María", age: 19, grade: 78, course: "JavaScript" },
  { id: 4, name: "Luis", age: 21, grade: 88, course: "Java" },
  { id: 5, name: "Sofia", age: 20, grade: 95, course: "JavaScript" }
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
console.log("\n FIN EJERCICIO 1");