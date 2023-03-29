// class Product {
//     constructor(
//         private id:number,
//         private name:string,
//         private price:number
//     ){}

//     public getId():number{
//         return this.id
//     }
//     public getName():string{
//         return this.name
//     }
//     public getPrice():number{
//         return this.price
//     }

// }


// const product1 = new Product(1,"Cup",100)

// console.log("product1",product1.getName())



//another convenient way

//use of get keyword and then give attribute name so when u call u have to write the name of it only

// class Product {
//     constructor(
//         private _id:number,
//         private _name:string,
//         private _price:number
//     ){}

//      get id():number{
//         return this._id
//     }
//     get name():string{
//         return this._name
//     }

//     set name (newName:string) {
//     if(!newName){
//         throw new Error("Name cannot be empty")
//     }
//       this._name=newName
//     }


//     get price():number{
//         return this.price
//     }

// }


// const product1 = new Product(1,"Cup",100)
// product1.name="Apple"
// console.log("product1",product1.name)




//inheritance
//By extends we get the whole class of product in clothing
// class ClothingProduct extends Product{

//     constructor(
//         id:number,
//         name:string,
//         price:number,
//         //below two are this class attribute
//         //but constructor will definitley take the parent's constructor attribute as well
//         private _color:string,
//         private _size : "S" | "M" | "L"| "XL"
//     ){
//         //by super we send the values to parent's constructor
//        super(id,name,price)
//     }

// }

// const tShirt= new ClothingProduct(2,"T-Shirt",1000,"Blue","M")

// console.log("TSHIRT",tShirt)





// class Cart{

//     //though Product is our class but we can use it here as type, array will have such
//     private products:Product[]=[]
// }




//abstract classes
//I have added a before each so not to have error
//if want to define abstract funct then add abstract keyword bfr class
abstract class aProduct {
    constructor(
        private _id:number,
        private _name:string,
        private _price:number
    ){}

     get id():number{
        return this._id
    }
    get name():string{
        return this._name
    }

    set name (newName:string) {
    if(!newName){
        throw new Error("Name cannot be empty")
    }
      this._name=newName
    }


    get price():number{
        return this.price
    }

    abstract getDiscountedRates():number

}


// const product1 = new Product(1,"Cup",100)
// product1.name="Apple"
// console.log("product1",product1.name)




//inheritance
//By extends we get the whole class of product in clothing
class aClothingProduct extends aProduct{

    constructor(
        id:number,
        name:string,
        price:number,
        //below two are this class attribute
        //but constructor will definitley take the parent's constructor attribute as well
        private _color:string,
        private _size : "S" | "M" | "L"| "XL"
    ){
        //by super we send the values to parent's constructor
       super(id,name,price)
    }

    //abstract method must be called in child if u have made abstract the parent
    getDiscountedRates() {
        return this.price * 0.5;
    }

}

const atShirt= new aClothingProduct(2,"T-Shirt",1000,"Blue","M")

console.log("TSHIRT",atShirt)










//Singletons 
//of whose class u want to make object/instance once
//so make the constructor private

//static methods
//wo methods jsk like u don't have to create a instance with new
//u can directly call them


//eg we have date class in js
//we used to to const date=new Date()
//created new obj  and now we can use methods from date
//but for date.now() we don't write new bcz it is static method of date class
class Util {

    //instance is just variable but since it will not get type uTIL SO WE HAVE TO give same type
    private static instance :Util;
    private constructor(){

    }
    static getInstance(){
        
        if(!this.instance){
            this.instance=new Util()
        }

        return this.instance
    }
}


//when it will run instance will be created
const Util1=Util.getInstance();


//now when this will run, since instance is already created once, it will meet if condition as false
//and return the same instance
const Util2=Util.getInstance();

//this ^^ pattern is called singletons