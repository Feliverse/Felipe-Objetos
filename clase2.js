class Usuario {
        #age;
    constructor(nombre, edad) {
        this.name = nombre;
        this.#age = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
    despedir() {
        console.log(`Adiós, ${this.name}. ¡Hasta luego!`);
    }
}   

const Favio = new Usuario("Favio Arnez",20)
const Felipe = new Usuario("Felipe", 44)


console.log(Favio);
console.log(Felipe);

