// class 3
// Tuples
//array of fixed length

// let gender: [string, string] = ["Male", "Female"];

//problem in tuple that tit allows push
// gender.push("asd");

// let admin: [number, string] = [1, "Admin"];
// let error: [number, string] = [404, "Not Found"];

// Class


// class Student {
//     name: string;
//     rollno: number;

//     constructor(n: string, r: number) {
//         this.name = n;
//         this.rollno = r
//     }
// }







// class Student {
//     public name: string;
//     private rollno: number;

//     constructor(n: string, r: number) {
//         this.name = n;
//         this.rollno = r
//     }
// }
// const student3 = new Student("Yasir", 1234);
// console.log(student3.rollno)
// console.log(student3.name)




// class Student {
//     //if u want to give attribute directly to object, no usage of this 
//     constructor(public name: string, public  rollNo: number) {
//     }

// }

// const student1 = new Student("Yasir", 1234);
// console.log(student1)

// same output as previous






// class Student {

//     skills:string[]=[];
//         constructor(public name: string, public  rollNo: number) {
//         }

//     }

//     const student1 = new Student("Yasir", 1234);
//     student1.skills.push("Java")
//     //but if you make length zero all will be wiped off from the array
//     student1.skills.length=0
//       //so make it private and make get/set or sep functions to add 

//     console.log(student1)






// class Student {

//     private skills: string[] = [];
//     constructor(public name: string, public readonly rollNo: number) {
//     }

//     addSkill(x:string){
//         this.skills.push(x)
//     }

// }

// const student1 = new Student("Yasir", 1234);
// student1.addSkill("JavaScript");
// console.log(student1)

// const student2 = new Student("Nadir", 2345);

// student1.addSkill("JavaScript");
// student2.addSkill("Python");
// console.log(student1, student2);
