function someFunction(){
    console.log("hello!")
}

function Animal(animalName, animalType, animalSound){
    this.animalName = animalName; // 'this' is the equivalent to 'self' in python
    this.animalType = animalType;
    this.animalSound = animalSound;


}

motelPrototype = Animal('Motely', 'Cat', 'Meow' );

function printSound(someObject){
    console.log(someObject.animalSound);
}

motelPrototype.printSound();

laikaPrototype = Animal('laika', 'dog', 'woof')

