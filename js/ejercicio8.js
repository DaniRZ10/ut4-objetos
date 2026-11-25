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
     * @param {number} codigoInicial Código secreto inicial.
     */
    constructor(propietario, codigoInicial) {
      this.propietario = propietario;
      this.#codigo = codigoInicial;
    }

    /**
     * Devuelve el código secreto.
     * @returns {number} El código actual.
     */
    verCodigo() {
      return this.#codigo;
    }

    /**
     * Cambia el código solo si el nuevo tiene exactamente 4 dígitos.
     * @param {number} nuevoCodigo Código que se quiere poner.
     * @returns {boolean} true si se ha cambiado; false si no era válido.
     */
    cambiarCodigo(nuevoCodigo) {
      const texto = String(nuevoCodigo);
      if (texto.length === 4 && !isNaN(nuevoCodigo)) {
        this.#codigo = nuevoCodigo;
        return true;
      }
      return false;
    }
  }

  // Crear la caja y probar sus métodos
  const miCaja = new CajaFuerte('Ana', 1234);
  mostrar('Propietario:', miCaja.propietario);
  mostrar('verCodigo():', miCaja.verCodigo());

  mostrar('cambiarCodigo(5678):', miCaja.cambiarCodigo(5678));
  mostrar('verCodigo() tras el cambio:', miCaja.verCodigo());

  mostrar('cambiarCodigo(99) (no tiene 4 dígitos):', miCaja.cambiarCodigo(99));
  mostrar('verCodigo() (no ha cambiado):', miCaja.verCodigo());

  // Intentar acceder al código desde fuera de la clase
  mostrar('--- Acceso directo desde fuera de la clase ---');
  mostrar('miCaja.codigo:', miCaja.codigo);   // undefined: no existe una propiedad pública "codigo"
  mostrar('Object.keys(miCaja):', Object.keys(miCaja)); // #codigo no aparece

  // Escribir miCaja.#codigo aquí sería un error de sintaxis y el archivo no se ejecutaría.
  // Para demostrarlo sin romper la página, se crea ese código con new Function
  // dentro de un try...catch y se captura el error.
  try {
    const leerCodigo = new Function('caja', 'return caja.#codigo;');
    leerCodigo(miCaja);
  } catch (error) {
    mostrar('miCaja.#codigo →', `${error.name}: ${error.message}`);
  }
}
