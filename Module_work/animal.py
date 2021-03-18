#%%
class Animal():

    def __init__(self, animalName, animalType, animalSound) -> None:
        self.animalName = animalName
        self.animalType = animalType
        self.animalSound = animalSound

    def printName(self):
        print(self.animalName)
#%%
motelyObject = Animal(animalName='Motely', animalType='Cat', animalSound='Meow')
#%%
motelyObject.animalName

#%%
motelyObject.printName()
#%%
laikaObject = Animal(animalName='Laika', animalType='Dog', animalSound='Woof')
#%%
laikaObject.animalName

#%%
laikaObject.printName()

#%%
laikaObject.canFetch = True

#%%
laikaObject.someNewMethod