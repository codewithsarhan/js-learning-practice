// Stack And Heap Memory Concept ;

// Stack Memory Contain (Primitive-Type)
// Heap Memory Contain (Non-Primitve-Type)

// Primitive Type 
// Numbers,Boolean,String,Null,Undefined,BigInt,Symbol

// Non Primitve Type
// Object , Arrays , Functions

// let myName = "Sarhan" ;
// let anotherName = myName ;
// anotherName = "Ali" ;

// console.log(myName);
// console.log(anotherName);

let myObject = {

    car : "buggati" ,
    
}

let anotherObject = myObject ;
anotherObject.car = "BMW M5" ;

console.log(myObject);
console.log(anotherObject);