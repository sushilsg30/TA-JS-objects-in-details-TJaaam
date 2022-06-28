# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
function createObj() {
let obj = {
  obj.item1 = xyz;
  obj.item2 = xyz;
}
return obj;
}

- [ ] Using Object.create (prototypal pattern)
function ceateObj(){
let obj = Object.create();
obj.item1 = xyz;
obj.item2 = xyz;
return obj;
}

- [ ] Using Pseudoclassical Way

function createObj() {
  this.item1 = xyz;
  this.item2 = xyz; 
}


- [ ] Using Class

class {
  constructor() {
  this.item1 = xyz;
  this.item2 = xyz; 
  }
}

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

class {
  constructor(name, id, noOfProjects)
  this.name = name;
  this.id = id;
  this.noOfProject = noOfProjects;

  getProjects(){
    return this.noOfProject;
  }
  changeName(name){
    return this.name;
  }
  incrementProject(num){
    return this.noOfProject + num;
  }
  decrementProject(num){
    return this.noOfProject - num;
  }
}
Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

console.log(this.decrementProject(2));
console.log(this.decrementProject(1));