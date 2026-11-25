# UT4 · Objetos definidos por el usuario

Ejercicios de JavaScript sobre objetos de la UT4 de Desarrollo Web en Entorno Cliente (2º DAW): objetos literales, `forEach`, referencias y clonación, funciones constructoras, `Symbol`, `toString()`, herencia de clases y propiedades privadas.

**Página online (GitHub Pages):** https://danirz10.github.io/ut4-objetos/

---

## Cómo probarlo

1. Abre la página: en GitHub Pages (enlace de arriba) o en local con XAMPP, en `http://localhost/ut4-objetos/`.
2. Pulsa el botón del ejercicio que quieras ver.
3. El resultado aparece en la propia página, bajo **Salida**. También se escribe en la consola del navegador (F12 → Console), donde los objetos se pueden desplegar.

Cada botón borra la salida anterior y ejecuta solo su ejercicio, así que se pueden probar en cualquier orden y tantas veces como se quiera.

---

## Estructura

```
/
├── index.html          ← menú con un botón por ejercicio y zona de salida
├── README.md
└── js/
    ├── salida.js       ← mostrar(): escribe cada resultado en la página y en la consola
    ├── main.js         ← conecta cada botón con la función de su ejercicio
    ├── ejercicio1.js
    ├── ...
    └── ejercicio8.js
```

- Cada ejercicio está en su propio archivo y **dentro de su propia función** (`ejercicio1()`, `ejercicio2()`…). Así cada uno tiene su propio ámbito y no interfieren entre sí. Por ejemplo, el ejercicio 4 (función constructora) y el 7 (clase) definen los dos un `Car` sin que choquen.
- Todos los eventos se registran con `addEventListener` desde `main.js`; no hay `onclick` en el HTML.
- Las funciones están documentadas con comentarios JSDoc (`@param`, `@returns`).

---

## Ejercicios

| Nº | Ejercicio | Qué se hace | Resultado esperado |
|---|---|---|---|
| 1 | Creación y acceso a objetos | Se crea `persona` con sintaxis literal, se accede con notación de punto, se añade `pais`, se elimina `trabajo` con `delete` y se accede a `edad` con corchetes. | El objeto final es `{ nombre: "Ana", edad: 28, pais: "España" }`. |
| 2 | Bucle forEach | Se comprueba con `forEach` sobre `Object.keys()` si existen `nombre` y `apellido`, y se recorren clave y valor con `forEach` sobre `Object.entries()`. | `nombre` → `true`, `apellido` → `false`, seguido de la lista de propiedades. |
| 3 | Referencias y clonación | `usuario2 = usuario1` (copia por referencia) y `Object.assign({}, usuario1)` (clonación superficial). | Cambiar `usuario2` cambia también `usuario1`; cambiar el clon no cambia el original. |
| 4 | Constructor y `this` | Función constructora `Car(name, model, year)` que asigna con `this`, y dos objetos creados con `new`. | Dos coches con sus propiedades. |
| 5 | Symbol y claves ocultas | Se crea `Symbol('id')` y se usa como clave en `empleado`; después se recorre con `for...in`. | El `for...in` muestra `nombre` y `puesto`, pero no el `id`. Con `empleado[id]` se comprueba que la propiedad existe. |
| 6 | Conversión a primitivo | `cuentaBancaria` con un método `toString()` propio. | `Saldo: 1000 EUR` |
| 7 | Herencia de clases | Clase `Vehicle` y clase hija `Car extends Vehicle`, que llama a `super(name)`, sobrescribe `move()` y añade `info()`. | `Toyota is Rolling out!` y `Nombre: Toyota · Modelo: BZ4X` |
| 8 | Propiedades privadas | Clase `CajaFuerte` con `#codigo` privado, `verCodigo()` y `cambiarCodigo()`. | Muestra `1234`, lo cambia a `5678` y demuestra que `#codigo` no es accesible desde fuera (`SyntaxError`). |

El ejercicio 10 no está incluido porque se dejó para más adelante, según indica el enunciado.

---

## Notas sobre algunas decisiones

- **Ejercicio 2.** `forEach` no funciona directamente sobre un objeto, solo sobre arrays. Por eso se convierte primero con `Object.keys()` o `Object.entries()`. El `persona` se vuelve a crear en el estado final del ejercicio 1, porque el del ejercicio 1 solo existe dentro de su función.
- **Ejercicio 6.** `console.log(objeto)` muestra el objeto, pero no llama a `toString()`. Lo que llama a `toString()` es convertir el objeto en texto, y por eso se imprime con `String(cuentaBancaria)`.
- **Ejercicio 7.** La propiedad de `Vehicle` se llama `name` (y no `nombre`) para que coincida con los mensajes del enunciado (`[name] se está moviendo`, `[name] is Rolling out!`) y con el constructor de `Car`, que recibe `name` y `model`.
- **Ejercicio 8, el PIN.** El código se guarda como **texto** y no como número, para que un PIN como `0021` conserve sus ceros a la izquierda. `cambiarCodigo()` lo valida con la expresión regular `/^\d{4}$/` (exactamente 4 dígitos; el significado de cada símbolo está comentado en el código), así que rechaza valores como `123`, `12345`, `-123` o `12.5`.
- **Ejercicio 8, el acceso a `#codigo`.** Escribir `miCaja.#codigo` fuera de la clase es un error de **sintaxis**: el navegador no llegaría a ejecutar el archivo y la página dejaría de funcionar. Para demostrarlo sin romperla, ese código se crea con `new Function(...)` dentro de un `try...catch`, que captura el `SyntaxError` y lo muestra en la salida.
