class Animal:
    def __init__(self, nombre):
        self.nombre = nombre


class Perro(Animal):  # Perro hereda de Animal
    def hablar(self):  # Sobrescritura de método
        return "¡Guau!"
    
class Gato(Animal):
    def hablar(self):
        return "Mau!!!"
    
    def ronronear(self):
        return "grrrrr"
    
mi_perro = Perro("Firulais")
mi_gato = Gato("Maya")

print(mi_perro.hablar())
print(mi_gato.hablar())
 