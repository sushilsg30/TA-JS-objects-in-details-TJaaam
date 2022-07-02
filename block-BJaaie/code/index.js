function createAnimal(location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

createAnimal.prototype = {
eat: function(){
    console.log(`I live in ${this.location} and I can eat`)
},
changeLocation: function(newLocation){
    this.location = newLocation;
    return this.location;
},
summary: function(){
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
},
};

function createDogs(location, numberOfLegs, name, color){
    createAnimal.apply(this, [location, numberOfLegs]);
    this.name = name;
    this.color = color;   
}

createDogs.prototype = {
    bark: function(){
        alert(`a message saying I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        return this.name = newName;
    },
    changeColor: function(color){
        return this.color = color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
Object.setPrototypeOf(createDogs.prototype, createAnimal.prototype)

