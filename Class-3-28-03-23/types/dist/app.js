"use strict";
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;
// const add = function (val1: number, val2: number) {
//     return val1 + val2;
// };
// button.addEventListener("click", function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, +secondVal));
// });
// Basic Types
// 1. String: string => "Apple", "Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false
// let person: number;
// person = 8;
// let arr: string[];
// arr = ["Apple", "Orange", ];
// arr.push("Pineapple");
// arr.push();
// const arr2: number[] = [1, 2, 3];
// arr2.push();
// This is my new comment.
// type Person = {
//     name: string;
//     rollNo: number;
//     hobbies: string[];
//     email?: string
// };
// let person: Person = {
//     name: "Ishaq",
//     rollNo: 405,
//     hobbies: ["Video Games"],
// };
// person.email = "test@test.com";
// const persons: Person[] = [];
// persons.push({
//     name: "Ameen",
//     rollNo: 301,
//     hobbies: ["Cricket"],
//     email: "test@test.com"
// });
// const add = function (val1: number, val2: number, cb: (x: string) => void): number {
//     cb("Hello");
//     return val1 + val2;
// };
// let func: (x: number, y: number, z: (x: string) => void) => number;
// func = add;
// type Calc = "add" | "subtract" | "+" | "-";
// const add = function (val1: number, val2: number, calc: Calc) {
//     if (calc === "add" || calc === "+") {
//         return val1 + val2;
//     } else if (calc === "subtract" || calc === "-") {
//         return val1 - val2;
//     }
// };
// console.log(add(10, 5, "subtract"));
// Tuples
// let gender: [string, string] = ["Male", "Female"];
// gender.push("asd");
// let admin: [number, string] = [1, "Admin"];
// let error: [number, string] = [404, "Not Found"];
// Class
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill);
    }
}
const student1 = new Student("Yasir", 1234);
const student2 = new Student("Nadir", 2345);
student1.addSkill("JavaScript");
student2.addSkill("Python");
console.log(student1, student2);
//# sourceMappingURL=app.js.map