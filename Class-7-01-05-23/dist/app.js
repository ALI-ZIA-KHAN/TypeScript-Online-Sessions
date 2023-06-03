"use strict";
//Decorators
//functions that are bonded with class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//uncomment experimentalDecorators in config first
// function Logger(constructor:Function){
// console.log("Function loggged")
// }
function Logger(message) {
    return function (constructor) {
        //actual decorator       
        console.log("Function loggged");
    };
}
//wecmade a div with id in html file first
function FillHTML(template, elemId) {
    //do functions hain ek factory ek decorator
    //khud jo bhjna hai islie factory bnaya argument dene k lie
    //typecript jo khud constructor arg dega usk lye decorator hai
    //only place to use any ass we wl call contructir and inside it new operator
    return function (constructor) {
        //actual decorator       
        const elem = document.getElementById(elemId);
        //apko  alg sse khud se class nhi btani ise khud pta lgjrarha
        //wrna ye kaam function ko normal call krkakr bhihoskta hai w/o decorator
        //bs new constructor ki jga btaana hoga new p
        const p = new constructor();
        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1").innerText = p.name;
        }
    };
}
//just write it bfr class i want to attach with,
//whenever class loads it will run
let Person = class Person {
    constructor() {
        this.name = "Ishaq";
    }
    contructor() {
    }
};
Person = __decorate([
    Logger("calling from person"),
    FillHTML('<h1>Hello<h1>', 'app')
], Person);
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Types didnot match");
    }
}
//khudse detect
// const value= add("Hello","World")
// const value2=add(2,2)
// value2.toFixed(2)
// console.log(value.split(""))
//if u comment out line 69 and 68
//this is alternative and called typecasting
const value = add("Hello", "World");
const value2 = add(2, 2);
value2.toFixed(2);
console.log(value.split(""));
//# sourceMappingURL=app.js.map