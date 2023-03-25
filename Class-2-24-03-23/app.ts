// let person={
//     name:"Ali",
//     rollNo:405,
//     hobbies:["Hobbies"]
// }

//custom type

type Person={
    name:string;
    rollNo:number;
    hobbies:string[];
    email:string;
}

let person:Person={
    name:"Ishaq",
    rollNo:5,
    hobbies:["cricket","hockey"],
    email:"hello"
    //if we give any diff atribute it will give error
}

const persons:Person[]=[];
persons.push({
    name:"Ameen",
    rollNo:252,
    hobbies:["a","b"],
    email:"ali123"
})


//for example we don't know email initially
//1
let person1:Person={
    name:"Ishaq",
    rollNo:5,
    hobbies:["cricket","hockey"],
    email:""
}
person1.email="teast@gmail.com"
//2
type Person1={
    name:"string";
    //give Q mark=>optional
    email?:string
}


//function
//returning number
const add= function (val1 :number,val2:number):number{
    return val1+val2
}

console.log("hello",add(6,3))


//or   where number after arrow is return type
let func:(x:number,y:number)=>number;
func=add
console.log("hello",func(6,3))


//with callback
//u can write Function instead of void which isn't best practice as it would accept any funcyion
// const add1= function (val1 :number,val2:number,cb:(x:string)=>void):number{
//     cb("Hello")
//     return val1+val2
// }

// let func1:(x:number,y:number)=>number;
// func1=add


//type literals
const add1= function (val1 :number,val2:number,calc:string){
    if(calc==="add"){
        return val1+val2
    }else if(calc==="subtract"){
        return val1-val2
    }
}

console.log(add1(10,5,"subtract"))

//it won't give error if we give other than add subtract




//when it is fixed what will u give then u use literals  
// | is union operator
const add2= function (val1 :number,val2:number,calc : "add" | "subtract" ){
    if(calc==="add"){
        return val1+val2
    }else if(calc==="subtract"){
        return val1-val2
    }
}

console.log(add2(10,5,"subtract"))





//also
type Calc = "add" | "subtract" |"+" | "-"

const add3=function(val1:number,val2:number,calc :Calc){
    if(calc==="add" || calc==="+"){
        return val2+val1
    }else if(calc==="subtract" || calc==="-"){
        return val1-val2
    }
}

console.log("final",add3(1,6,"+"))