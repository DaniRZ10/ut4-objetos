/**
 * Utilidades para mostrar los resultados de los ejercicios
 * en la página (dentro de <pre id="salida">) y en la consola a la vez.
 */

/**
 * Borra la salida anterior y pone el título del ejercicio que se va a ejecutar.
 * @param {string} titulo Texto del título (por ejemplo, "Ejercicio 1").
 */
function limpiarSalida(titulo) {
  document.querySelector('#titulo-salida').textContent = titulo;
  document.querySelector('#salida').textContent = '';
  console.log(`===== ${titulo} =====`);
}

/**
 * Convierte un valor en texto para poder escribirlo en la página.
 * Los objetos se pasan a JSON; el resto, a texto con String().
 * @param {*} valor Valor que se quiere mostrar.
 * @returns {string} El valor convertido en texto.
 */
function formatearValor(valor) {
  if (typeof valor === 'object' && valor !== null) {
    return JSON.stringify(valor);
  }
  return String(valor);
}

/**
 * Muestra un mensaje en la página y en la consola.
 * Se puede llamar con un solo texto, o con un texto y un valor:
 *   mostrar('Hola');
 *   mostrar('Edad:', persona.edad);
 * @param {string} etiqueta Texto descriptivo.
 * @param {*} [valor] Valor opcional que se muestra detrás de la etiqueta.
 */
function mostrar(etiqueta, valor) {
  const salida = document.querySelector('#salida');

  // arguments.length dice cuántos argumentos se han pasado.
  // Así se distingue "no hay valor" de "el valor es undefined".
  if (arguments.length > 1) {
    console.log(etiqueta, valor); // en consola se ve el valor real 
    salida.textContent += `${etiqueta} ${formatearValor(valor)}\n`;
  } else {
    console.log(etiqueta);
    salida.textContent += `${etiqueta}\n`;
  }
}