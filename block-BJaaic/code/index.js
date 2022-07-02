let animalMethods = {
    eat: function (value) {
        console.log(`I live in ${this.location} and I can eat ${value}`);
    },
    changeLocation: function(newLocation){
        return this.location = newLocation;
    },
    summary: function() {
        console.log(`I live in ${this.location} and I have ${this.numberOfLegs}`)
    }
}


function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.legs = numberOfLegs;
    return animal;
}

let dogsMethods = {
    bark: function () {
        alert(`I am ${name} and I can bark 🐶`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColor(newColor){
        this.color = newColor;
        return this.color;
    },
    summary() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
};
Object.setPrototypeOf(dogsMethods, animalMethods);

function createAnimal(location, numberOfLegs, name, color){
    let animal = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(animal, dogsMethods);
    animal.name = name;
    animal.color = color;
    return animal;
}

let catsMethods = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColorEyes(newColor){
        this.colorOfEye = newColor;
        return this.colorOfEye;
    },
    summary() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};
Object.setPrototypeOf(catsMethods, animalMethods);

function createAnimal(location, numberOfLegs){
    let animal = createAnimal(location, numberOfLegs);
    Object.setPrototypeOf(animal, catsMethods);

    animal.name =  location;
    animal.legs = numberOfLegs;
    return animal;
}


