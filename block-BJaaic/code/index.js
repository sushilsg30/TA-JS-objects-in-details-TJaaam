let animalMethods = {
    eat: function (value) {
        return console.log(`I live in ${this.location} and I can eat ${value}`);
    },
    changeLocation: function(newLocation){
        return this.location = newLocation;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}


function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.legs = numberOfLegs;
}