/**
 * Ejercicio 5 · Symbol y claves ocultas.
 * Usa un Symbol como clave de una propiedad y comprueba que
 * el bucle for...in la ignora al recorrer el objeto.
 */
function ejercicio5() {
  // 1. Crear el símbolo. "id" es solo una etiqueta descriptiva: cada Symbol es único
  const id = Symbol('id');

  const empleado = {
    nombre: 'Marta',
    puesto: 'Desarrolladora'
  };

  // 2. Añadir la propiedad usando el símbolo como clave (siempre con corchetes)
  empleado[id] = 501;

  // 3. Recorrer el objeto con for...in: la propiedad con clave Symbol no aparece
  mostrar('Recorrido con for...in:');
  for (const clave in empleado) {
    mostrar(`  ${clave}:`, empleado[clave]);
  }

  // 4. La propiedad sí existe: se puede leer si se tiene el símbolo
  mostrar('Acceso directo con el símbolo (empleado[id]):', empleado[id]);
  // Object.getOwnPropertySymbols() devuelve las claves Symbol que for...in no ve
  const simbolos = Object.getOwnPropertySymbols(empleado);
  mostrar('Claves Symbol del objeto:', simbolos.map(function (simbolo) {
    return simbolo.toString(); // un Symbol hay que pasarlo a texto de forma explícita
  }));
}
