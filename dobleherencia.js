
// Clase Base / Padre 1
class Camara {
  tomarFoto() {
    console.log("📸 Foto capturada.");
  }
}

// Objeto de comportamiento / "Padre 2"
const GrabadoraMixin = {
  grabadora() {
    console.log("🎙️ Grabando audio.");
  }
};

// Clase Hija
class Smartphone extends Camara {
    #miNumero = "555-0100"; // Propiedad privada
  constructor() {
    super(); // Llamamos al constructor de Camara
    this.#miNumero = "555-0100"; // Inicializamos la propiedad privada
  }
  
  hacerLlamada(numero) {
    console.log(`📞 Mi Celular Nro ${this.#miNumero} estaLlamando al ${numero}...`);
  }
  navegar() {
    console.log("🌐 Navegando en internet.");
  }
}

// Copiamos los métodos del Mixin al prototipo de Smartphone
Object.assign(Smartphone.prototype, GrabadoraMixin);

// Uso
const miCel = new Smartphone();
miCel.tomarFoto();    // Heredado de Camara
miCel.hacerLlamada("72204904"); // Copiado de TelefonoMixin
miCel.grabadora();      // Propio