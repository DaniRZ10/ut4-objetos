/**
 * Ejercicio 6 · Conversión de objetos a valores primitivos.
 * Implementa toString() para que el objeto se muestre de forma legible
 * cuando se convierte en texto.
 */
function ejercicio6() {
  const cuentaBancaria = {
    saldo: 1000,

    /**
     * JavaScript llama a este método automáticamente cuando
     * necesita convertir el objeto en texto.
     * @returns {string} El saldo en formato legible.
     */
    toString() {
      return `Saldo: ${this.saldo} EUR`;
    }
  };

  // Al convertir el objeto en texto se usa nuestro toString()
  mostrar(String(cuentaBancaria));      // conversión explícita
  mostrar(`${cuentaBancaria}`);         // dentro de una plantilla de texto
  mostrar('' + cuentaBancaria);         // concatenando con un texto

  // Si cambia el saldo, el texto se actualiza porque toString() usa this.saldo
  cuentaBancaria.saldo = 1250;
  mostrar(String(cuentaBancaria));
}
