class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){

    }
    sleep(){

    }
    walk(){

    }
}

class Teacher extends Person{
    constructor(instituteName){
        // super(name, age, gender)
        this.instituteName = instituteName;
    }
    teach(){

    }
}
 class Artist extends Person{
    constructor(kind){
        // super(name, age, gender);
        this.kind = kind;        
    }
    createArt(){

    }
 }

 class Player extends Person{
    constructor(spotsName){
        this.spotsName = spotsName;
    }
    play(){
        
    }
 }