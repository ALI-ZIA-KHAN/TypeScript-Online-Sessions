"use strict";
//union types
const tiger = {
    name: "Tiger",
    //now due to union types  you can either have runningSpeed or flyingSpeed
    runningSpeed: 300
};
//now have to give both properties that are different
const cockroach = {
    name: "Cockroach",
    runningSpeed: 100,
    flyingSpeed: 100
};
const tiger2 = {
    name: "Tiger",
    runningSpeed: 300,
    flyingSpeed: 100,
};
class Tiger {
    //class tiger has these two prop now
    constructor(name, runningSpeed) {
        this.name = name;
        this.runningSpeed = runningSpeed;
    }
    eat(food) {
        return "Eating Food";
    }
}
function log(creature) {
    // console.log(creature.name)//will not show error as in both
    //console.log(creature.runningSpeed)//shows error as it might generate runtime error being not provided
    //in order to avoid that
    //u can do this
    //if it exists only then it will go in if block
    if ("runningSpeed" in creature) { //type guards
        console.log(creature.runningSpeed);
    }
}
//interface vs ABSTRACT
//interface assures that same/parent class has same attributes
//abstract ensures that if child has those attributes of parents
//# sourceMappingURL=app.js.map