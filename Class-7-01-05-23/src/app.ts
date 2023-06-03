//Decorators
//functions that are bonded with class

//uncomment experimentalDecorators in config first

// function Logger(constructor:Function){
// console.log("Function loggged")
// }



function Logger(message: string) {//factory

    return function (constructor: Function) {
        //actual decorator       
        console.log("Function loggged")

    }
}



//wecmade a div with id in html file first
function FillHTML(template: string, elemId: string) {//factory

    //do functions hain ek factory ek decorator
    //khud jo bhjna hai islie factory bnaya argument dene k lie
    //typecript jo khud constructor arg dega usk lye decorator hai


    //only place to use any ass we wl call contructir and inside it new operator
    return function (constructor: any) {
        //actual decorator       
        const elem = document.getElementById(elemId)

        //apko  alg sse khud se class nhi btani ise khud pta lgjrarha
        //wrna ye kaam function ko normal call krkakr bhihoskta hai w/o decorator
        //bs new constructor ki jga btaana hoga new p
        const p = new constructor();

        if (elem) {
            elem.innerHTML = template;
            elem.querySelector("h1")!.innerText = p.name
        }

    }
}




//just write it bfr class i want to attach with,
//whenever class loads it will run
@Logger("calling from person")
@FillHTML('<h1>Hello<h1>', 'app')
class Person {
    name = "Ishaq"
    contructor() {

        
    }
}



//operator overloading

type Combined = string | number
function add (x:string,y:string):string
function add (x:number,y:number):number

function add(x:Combined,y:Combined){
    if(typeof x==="number" && typeof y ==="number")
    {
        return x+y
    }
    if(typeof x==="string" && typeof y ==="string")
    {
        return x+y
    }else{
        throw new Error("Types didnot match")
    }
}

//khudse detect
// const value= add("Hello","World")
// const value2=add(2,2)
// value2.toFixed(2)
// console.log(value.split(""))



//if u comment out line 69 and 68
//this is alternative and called typecasting
const value= add("Hello","World") as string
const value2=add(2,2) as number
value2.toFixed(2)
console.log(value.split(""))