//union types

type Animal={
    name:string;
    runningSpeed:number
}

type Bird={
    name:string;
    flyingSpeed:number
}
type Creature=Animal|Bird

const tiger:Creature={
    name:"Tiger",
    //now due to union types  you can either have runningSpeed or flyingSpeed
    runningSpeed:300
}


//intersection types
type Creature2=Animal & Bird;
//now have to give both properties that are different
const cockroach :Creature2={
name:"Cockroach",
runningSpeed:100,
flyingSpeed:100
}



//interfaces

//much alike types
//different syntax
//one difference is that interfaces can be implemented with class as well



interface Animal1{
    name:string;
    runningSpeed:number;
}

interface Bird1{
    name:string;
    flyingSpeed:number;
}

interface Creature3 extends Animal1,Bird1{}

const tiger2:Creature3={
    name:"Tiger",
    runningSpeed:300,
    flyingSpeed:100,
}



///implementation with cllass


interface Animal3{
    name:string;
    runningSpeed:number;
    eat(food : string) :string
}

class Tiger implements Animal {
    //class tiger has these two prop now
    constructor(public name:string,public runningSpeed:number){}

    eat (food:string){
        return "Eating Food"
    }
}



//Type Guards
//in order to tackle the issues when you use the type


type Animal4={
    name:string;
    runningSpeed:number
}

type Bird4={
    name:string;
    flyingSpeed:number
}
type Creature4=Animal4 |Bird4

function log(creature:Creature4){
   // console.log(creature.name)//will not show error as in both
    //console.log(creature.runningSpeed)//shows error as it might generate runtime error being not provided
    //in order to avoid that
    //u can do this
    //if it exists only then it will go in if block
    if("runningSpeed" in creature){  //type guards
        console.log(creature.runningSpeed)
    }
}


//interface vs ABSTRACT
//interface assures that same/parent class has same attributes
//abstract ensures that if child has those attributes of parents