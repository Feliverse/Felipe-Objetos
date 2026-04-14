class Perro:
    def __init__(self, nombre, edad):
        self._nombre = nombre
        self.edad = edad

    def ladrar(self):
        return f"{self.nombre} dice: ¡Guau!"
    
    def comer(self):
        return f"{self.nombre} come carne"
    
    def domestica(self):
        return f"{self.nombre} es un perro doméstico"
    
perro1 = Perro("Firulais", 3)

print(perro1.ladrar())
print(perro1.comer())   
print(perro1.domestica())

print(perro1)

