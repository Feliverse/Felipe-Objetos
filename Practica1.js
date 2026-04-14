class Estudiante {
    #nombre
    constructor(nombre, apellido, edad, curso) {
        this.#nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
    obtenerNombreCompleto() {
        console.log( `${this.#nombre} ${this.apellido} `);
    }  
    cambiarNombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    } 
}

let estudiante1 = new Estudiante("Favio", "Arnez", 20, "Programación");
let estudiante2 = new Estudiante("Felipe", "Gonzalez", 44, "Matemáticas");  
let estudiante3 = new Estudiante("Maria", "Lopez", 22, "Historia");
let estudiante4 = new Estudiante("Juan", "Perez", 19, "Física");

estudiante1.obtenerNombreCompleto();
estudiante1.cambiarNombre("Favio Antonio");
estudiante1.obtenerNombreCompleto();
console.log(estudiante1.apellido)
console.log(estudiante1.nombre)