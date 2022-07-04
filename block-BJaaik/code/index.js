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
    constructor(name, age, gender, instituteName){
        super(name, age, gender)
        this.instituteName = instituteName;
    }
    teach(){

    }
}
 class Artist extends Person{
    constructor(name, age, gender, kind){
        super(name, age, gender);
        this.kind = kind;        
    }
    createArt(){

    }
 }

 class Player extends Person{
    constructor(name, age, gender, spotsName){
        super(name, age, gender);
        this.spotsName = spotsName;
    }
    play(){

    }
 }

 class Cricketer extends Player{
    constructor(name, age, gender, spotsName, teamName){
        super(name, age, gender, spotsName);
        this.teamName = teamName;
    }
    playCricket(){

    }
 }