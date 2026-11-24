/**
 * Ejercicio 3 · Referencias de objetos y clonación.
 * Muestra la diferencia entre copiar un objeto por referencia
 * y hacer una clonación superficial con Object.assign.
 */
function ejercicio3() {
  const usuario1 = {
    nombre: 'Laura',
    edad: 30,
    email: 'laura@daw.es'
  };
  mostrar('usuario1 original:', usuario1);

  // 1. Copia por referencia: usuario2 NO es un objeto nuevo,
  //    apunta al mismo objeto en memoria que usuario1
  const usuario2 = usuario1;
  usuario2.edad = 31;

  mostrar('--- Copia por referencia (usuario2 = usuario1) ---');
  mostrar('Se cambia la edad en usuario2 a 31.');
  mostrar('usuario2:', usuario2);
  mostrar('usuario1:', usuario1);
  mostrar('¿Son el mismo objeto? (usuario1 === usuario2):', usuario1 === usuario2);

  // 2. Clonación superficial: Object.assign copia las propiedades
  //    de usuario1 en un objeto vacío {} que es nuevo e independiente
  const clon = Object.assign({}, usuario1);
  clon.email = 'clon@daw.es';

  mostrar('--- Clonación superficial (Object.assign) ---');
  mostrar('Se cambia el email en el clon.');
  mostrar('clon:', clon);
  mostrar('usuario1:', usuario1);
  mostrar('¿Son el mismo objeto? (usuario1 === clon):', usuario1 === clon);
}