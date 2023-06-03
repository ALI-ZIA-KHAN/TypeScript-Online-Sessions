//typecasting

const input = document.getElementById("input1")! as HTMLInputElement;
//tho second way is actual but it makes error in react so we use first way
const input1=<HTMLInputElement>document.getElementById("input1")!;




// Generics

// const promiseFunc=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("Success")
//     },2000)
// })

// promiseFunc.then((res)=>{
    // in res we are getting string but ts will not allow split aur any other methodn which js will
    //bcz ts doesnot types in promise
//     console.log(res.split())
// })



//so we use generics
//generics=>whatever is returned by promise

//here we r returning from callback so its return type promise is given
// const promiseFunc = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello");
//         }, 2000);
//     });
// }

// promiseFunc()
//     .then((data) => {
//         const arr=data.split(" ");
//         //also it was showing error if I wasn't storing in a variable first
//         console.log(arr.join(" "))
//     });




// type User = {
//     name: string;
//     id: number;
// };


// const promiseFunc = (): Promise<User> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "Ishaq",
//                 id: 123
//             });
//         }, 2000);
//     });
// }

// promiseFunc()
//     .then((data) => {
//         console.log(data.name);
//     });







//this is workaround, we can pass obj of different key/values so we 
//jsut wrote object so not to change it each time

// function merge1(objA:object,objB:object){
// return {...objA,...objB}
// }
// console.log(merge1({name:"Ishaq"},{id:"1"}))=> will show no error
// const merged=merge1({name:"Ishaq"},{id:"1"});
// console.log(merged.name) //now it show error bcz it doesnot know what;s inside the object




//t and U are convention to take , we are telling them to take objA n objB respectively and 
//set type by checking it
//ts is now also smart to know we are merging so if u hover over it it willl show intersection T & U

function merge2<T, U >(objA: T, objB: U) {
    return {...objA, ...objB};
}
const merged2 = merge2({person: "Ishaq"}, {id:123});
console.log(merged2.person);
// const merged3 = merge2({person: "Ishaq"},123); 
//this ^^ was the problem it won't show error if u r giving other type
//as it will say whatever is passed take that in as T & U and will show runtime error then def






//so then
//now we r saying here whatever is coming it is object
//object after extends means it is receiving empty object
//T and U will have the respective keys of their obj then

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return {...objA, ...objB};
}

const merged = merge({person: "Ishaq"}, {id:123});
console.log(merged.person);