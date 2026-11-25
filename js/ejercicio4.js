/**
 * Ejercicio 4 · Métodos en objetos y uso de "this".
 * Define la función constructora Car y crea objetos con new.
 */
function ejercicio4() {
  /**
   * Función constructora Car (por convención, en PascalCase).
   * Con new, "this" es el objeto nuevo que se está creando.
   * @param {string} name Marca del coche.
   * @param {string} model Modelo del coche.
   * @param {number} year Año de fabricación.
   */
  function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  // Crear objetos a partir de la plantilla con el operador new
  const coche1 = new Car('Toyota', 'Corolla', 2020);
  const coche2 = new Car('Seat', 'Ibiza', 2018);

  mostrar('coche1:', coche1);
  mostrar('coche2:', coche2);
}
