/**
 * Conecta cada botón de index.html con la función de su ejercicio.
 */

// Tabla que relaciona el número de cada ejercicio con su función
const ejercicios = {
  1: ejercicio1,
  2: ejercicio2,
  3: ejercicio3,
  4: ejercicio4,
  5: ejercicio5,
  6: ejercicio6,
  7: ejercicio7,
  8: ejercicio8
};

const botones = document.querySelectorAll('#botones button');

botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    const numero = boton.dataset.ejercicio; // valor del atributo data-ejercicio
    limpiarSalida(`Ejercicio ${numero}`);
    ejercicios[numero]();                    // ejecuta la función del ejercicio
  });
});