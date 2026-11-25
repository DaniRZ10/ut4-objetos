/**
 * Ejercicio 7 · Herencia de clases.
 * Define la clase base Vehicle y la clase hija Car, que la extiende,
 * sobrescribe move() y añade info().
 */
function ejercicio7() {
  /**
   * Clase base: cualquier vehículo.
   */
  class Vehicle {
    /**
     * @param {string} name Nombre del vehículo.
     */
    constructor(name) {
      this.name = name;
    }

    /** Mensaje genérico de movimiento. */
    move() {
      mostrar(`${this.name} se está moviendo`);
    }
  }

  /**
   * Clase hija: un coche es un vehículo con modelo.
   */
  class Car extends Vehicle {
    /**
     * @param {string} name Nombre (marca) del coche.
     * @param {string} model Modelo del coche.
     */
    constructor(name, model) {
      super(name);        // llama al constructor de Vehicle, que asigna this.name
      this.model = model;
    }

    /** Sobrescribe el move() de Vehicle con un mensaje propio. */
    move() {
      mostrar(`${this.name} is Rolling out!`);
    }

    /** Muestra el nombre y el modelo. */
    info() {
      mostrar(`Nombre: ${this.name} · Modelo: ${this.model}`);
    }
  }

  const myCar = new Car('Toyota', 'BZ4X');
  myCar.move();
  myCar.info();
}
