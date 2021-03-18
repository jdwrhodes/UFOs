function someFunction(){
    console.log("Hello!");
}

function Animal(animalName,animalType,animalSound){
    this.animalName = animalName;
    this.animalType = animalType;
    this.animalSound = animalSound;
}

var motelyProtoype = new Animal('Motely','Cat','Meow');


motelyProtoype.printSound = function (){
    console.log(this.animalSound);
}

motelyProtoype.printSound();

var laikaProtoype = new Animal('Laika','Dog','Woof');

laikaProtoype.printSound()