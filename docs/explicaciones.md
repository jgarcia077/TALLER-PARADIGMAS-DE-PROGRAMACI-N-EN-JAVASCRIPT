# Explicaciones del Taller: Paradigmas en JavaScript

Este documento explica los conceptos aplicados en cada ejercicio y cómo se usaron los paradigmas de programación.


#  Paradigmas de Programación Aplicados

- **Paradigma Funcional**  
  Basado en el uso de funciones puras y métodos de arrays como `map`, `filter`, `reduce`, `find`.  
  Evita modificar datos directamente y promueve la inmutabilidad.

- **Paradigma Orientado a Objetos (POO)**  
  Organiza el código en clases y objetos, encapsulando propiedades y métodos.  
  Se enfoca en reutilización, herencia y responsabilidad de los objetos.

- **Paradigma Procedural**  
  Basado en la secuencia de instrucciones paso a paso mediante funciones que procesan datos.  
  Suele usarse para validaciones y lógica de control clara.



#  Ejercicios

# Ejercicio 1: Gestión de Estudiantes (Funcional)
- Se usaron métodos:
  - `filter` → estudiantes de JavaScript con nota > 80.
  - `reduce` → cálculo del promedio y mejor estudiante.
  - `map` → obtener solo los nombres.
- Paradigma aplicado: **Funcional**.



# Ejercicio 2: Calculadora de Productos (POO)
- Se creó una clase `Product` con:
  - Propiedades: `id`, `name`, `price`, `category`, `stock`.
  - Métodos: `updateStock()`, `calculateDiscount()`, `getInfo()`.
  - Método estático: `getTotalValue(products)`.
- Paradigma aplicado: **Orientado a Objetos**.



# Ejercicio 3: Validación de Datos (Procedural)
- Se implementaron funciones independientes:
  - `validateEmail(email)`
  - `validatePassword(password)`
  - `validateAge(age)`
  - `validateProduct(product)`
- Paradigma aplicado: **Procedural**, porque son pasos secuenciales de validación.



# Ejercicio 4: Filtros Avanzados (Funcional)
- Se trabajó sobre un array de productos con:
  - `filterByPrice(min, max)`
  - `groupByCategory()`
  - `findProductsByBrand(brand)`
  - `statsByCategory()`
- Paradigma aplicado: **Funcional**, con `filter`, `reduce` y `sort`.



# Ejercicio 5: Transformación de Datos (Funcional)
- Se usaron transformaciones con:
  - `map` → añadir campo `priceWithTax`.
  - `map` → añadir campo `status` según stock.
  - `reduce` → resumen de inventario por categoría.
- Paradigma aplicado: **Funcional**.



# Notas Finales
- Se aplicaron los 4 paradigmas solicitados.  
- Para reforzar los ejercicios se investigaron métodos (`map`, `filter`, `reduce`) y se mantuvo apoyo constante de IA para mejorar, organizar y evitar errores.  
- Todo el código incluye comentarios para mayor claridad.  
- Muy bajo el manejo del lenguaje Js y poco conocomiento con git y gitbub por lo cual fue ha sido un poco lento el desarrollo de los ejercicios.
- Se mantiene la disposición de seguir aprendiendo realizando el uso correcto de herramientas.