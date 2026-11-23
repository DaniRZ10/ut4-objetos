/**
 * Ejercicio 1 · Creación y acceso a objetos.
 * Crea el objeto persona, accede a sus propiedades con notación de punto,
 * lo modifica y accede a edad con corchetes.
 */
function ejercicio1() {
  // 1. Crear el objeto con sintaxis literal
  const persona = {
    nombre: 'Ana',
    edad: 28,
    trabajo: 'Ingeniera'
  };
  mostrar('Objeto inicial:', persona);

  // 2. Acceder con notación de punto
  mostrar('Nombre (punto):', persona.nombre);
  mostrar('Edad (punto):', persona.edad);

  // 3. Modificar el objeto: añadir una propiedad nueva y eliminar otra
  persona.pais = 'España';
  delete persona.trabajo;
  mostrar('Objeto modificado:', persona);

  // 4. Acceder a la misma propiedad con notación de corchetes (la clave va como texto)
  mostrar('Edad (corchetes):', persona['edad']);
}