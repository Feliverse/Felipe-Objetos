class persona {
    #nombre;
    #apellido;
   #edad    
   constructor(nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get edad() {
        return this.#edad;
    }
    set edad(edad) {
        if (edad < 18) {
            console.log("la persona debe ser mayor de edad");
        } else {
            this.#edad = edad;
        }    
    }
 }

const persona1 = new persona("Juan", "Perez", 25);
persona1.edad = 17;
console.log(persona1.edad);

