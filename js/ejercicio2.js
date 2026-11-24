/**
 * Ejercicio 2 · Bucle forEach.
 * Comprueba con forEach si existen las propiedades nombre y apellido
 * en el objeto persona, y recorre todas sus propiedades mostrando clave y valor.
 */
function ejercicio2() {
  // El objeto persona tal como quedó al final del ejercicio 1
  // (cada ejercicio está en su propia función, así que se vuelve a crear aquí)
  const persona = {
    nombre: 'Ana',
    edad: 28,
    pais: 'España'
  };
  mostrar('Objeto persona:', persona);

  // 1. Comprobar si existen nombre y apellido usando forEach
  mostrar('¿Existe "nombre"?', existePropiedad(persona, 'nombre'));
  mostrar('¿Existe "apellido"?', existePropiedad(persona, 'apellido'));

  // 2. Recorrer todas las propiedades con forEach e imprimir clave y valor.
  //    Object.entries() devuelve un array de pares [clave, valor].
  mostrar('Propiedades de persona:');
  Object.entries(persona).forEach(function ([clave, valor]) {
    mostrar(`  ${clave}:`, valor);
  });
}

/**
 * Comprueba si un objeto tiene una propiedad recorriendo sus claves con forEach.
 * @param {Object} objeto Objeto en el que se busca.
 * @param {string} nombrePropiedad Nombre de la propiedad buscada.
 * @returns {boolean} true si la propiedad existe; false si no.
 */
function existePropiedad(objeto, nombrePropiedad) {
  let encontrada = false;

  // Object.keys() devuelve un array con los nombres de las propiedades
  Object.keys(objeto).forEach(function (clave) {
    if (clave === nombrePropiedad) {
      encontrada = true;
    }
  });

  return encontrada;
}