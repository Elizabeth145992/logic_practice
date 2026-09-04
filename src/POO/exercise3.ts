abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    public makeSound(): void {
        console.log('Guau');
    }
}

class Cat extends Animal {

    public makeSound(): void {
        console.log('Miau');
    }
}

class Cow extends Animal {

    public makeSound(): void {
        console.log('Muuu');
    }
}

const animals: Animal[] = [
    new Dog(),
    new Cat(),
    new Cow(),
];

for (const animal of animals) {
    animal.makeSound();
}