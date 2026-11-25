/**
 * Ejercicio 8 · Encapsulación con propiedades privadas.
 * La clase CajaFuerte guarda el código en una propiedad privada (#codigo)
 * que solo se puede leer o cambiar mediante sus métodos públicos.
 */
function ejercicio8() {
  class CajaFuerte {
    // Propiedad privada: solo es accesible desde dentro de la clase
    #codigo;

    /**
     * @param {string} propietario Nombre del propietario (propiedad pública).
     * @param {string} codigoInicial Código secreto inicial, de 4 dígitos.
     */
    constructor(propietario, codigoInicial) {
      this.propietario = propietario;
      this.#codigo = codigoInicial;
    }

    /**
     * Devuelve el código secreto.
     * @returns {string} El código actual.
     */
    verCodigo() {
      return this.#codigo;
    }

    /**
     * Cambia el código solo si el nuevo tiene exactamente 4 dígitos.
     * El código se trata como texto y no como número para que un PIN
     * como '0021' conserve sus ceros a la izquierda.
     * @param {string} nuevoCodigo Código que se quiere poner.
     * @returns {boolean} true si se ha cambiado; false si no era válido.
     */
    cambiarCodigo(nuevoCodigo) {
      // Expresión regular /^\d{4}$/:
      //   ^    → el texto empieza aquí (no puede haber nada delante)
      //   \d   → un dígito del 0 al 9
      //   {4}  → exactamente 4 veces lo anterior
      //   $    → el texto termina aquí (no puede haber nada detrás)
      // test() devuelve true si el texto cumple ese patrón.
      // Así se rechazan, por ejemplo, '123', '12345', '-123' o '12.5'.
      if (/^\d{4}$/.test(nuevoCodigo)) {
        this.#codigo = nuevoCodigo;
        return true;
      }
      return false;
    }
  }

  // Crear la caja con propietario "Ana" y código inicial 1234
  const miCaja = new CajaFuerte('Ana', '1234');
  mostrar('verCodigo():', miCaja.verCodigo());

  // Cambiar el código a 5678
  mostrar('cambiarCodigo(\'5678\'):', miCaja.cambiarCodigo('5678'));
  mostrar('verCodigo() tras el cambio:', miCaja.verCodigo());

  // Intentar acceder directamente a #codigo desde fuera de la clase.
  // Escribir miCaja.#codigo aquí sería un error de sintaxis y el archivo
  // entero no llegaría a ejecutarse. Para demostrarlo sin romper la página,
  // ese código se crea con new Function dentro de un try...catch y se captura el error.
  try {
    const leerCodigo = new Function('caja', 'return caja.#codigo;');
    leerCodigo(miCaja);
  } catch (error) {
    mostrar('miCaja.#codigo →', `${error.name}: ${error.message}`);
  }
}
