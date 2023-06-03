// whatever u r getting in by getElemnt in imput1 else.g it can be empty or even don't exist
// so typecript wants assurity that it actually exists so  u give ! as HTMLInputElement after that

// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.getElementById("btn")!;



//if have simply run add function as js it would have concatenate instead off adding as .value gives string by def
//by giving types now it will add the numbers
// const add = function (val1: number, val2: number) {
//     return val1 + val2;
// };

// button.addEventListener("click", function () {
//     const firstVal = input1.value;
//     const secondVal = input2.value;
//     console.log(add(+firstVal, +secondVal));
// });
//using +with arg is must to make it number as given data type in parameter



// Basic Types

// 1. String: string => "Apple", "Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false

let person: number;

person = 8;

let arr: string[];

arr = ["Apple", "Orange", ];
arr.push("Pineapple");
arr.push();
console.log(arr)


const arr2: number[] = [1, 2, 3];
arr2.push();


// This is my new comment.
// when u add any code comile it again so u will see updated js file