# Implementação da interface de cor
class Color:
    def __init__(self, color):
        self.color = color

    def getColor(self):
        return self.color

# Impelmentações concretas de cores
class RedColor(Color):
    def __init__(self):
        super().__init__("Red")

class BlueColor(Color):
    def __init__(self):
        super().__init__("Blue")

class GreenColor(Color):
    def __init__(self):
        super().__init__("Green")

# Implementação da interface de forma
class Shape:
    def __init__(self, color):
        self.color = color
   
    def setColor(self, color):
        self.color = color

    def draw(self):
        raise NotImplementedError("Este método precisa ser implementado pela subclasse")

# Abstrações Refinadas
class CircleShape(Shape):
    def draw(self):
        print(f"Desenhando um circulo {self.color.getColor()}.")

class SquareShape(Shape):
    def draw(self):
        print(f"Desenhando um quadrado {self.color.getColor()}.")

class ShapeFactory:
    def createShape(self, color):
        raise NotImplementedError("Este método precisa ser implementado pela subclasse")

class CircleShapeFactory(ShapeFactory):
    def createShape(self, color):
        return CircleShape(color)

class SquareShapeFactory(ShapeFactory):
    def createShape(self, color):
        return SquareShape(color)

# Cliente - Utilização do método #######################
red = RedColor()
blue = BlueColor()
green = GreenColor()

circleShapeFactory = CircleShapeFactory()
squareShapeFactory = SquareShapeFactory()

circle1 = circleShapeFactory.createShape(red)
circle2 = circleShapeFactory.createShape(green)
square1 = squareShapeFactory.createShape(blue)
square2 = squareShapeFactory.createShape(green)

circle1.draw()
square1.draw()
circle2.draw()
square2.draw()

