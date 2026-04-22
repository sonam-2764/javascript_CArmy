// // //CLOSURE
// let a =10;
// const b =20;
// if(true){
//     console.log(b);//can be accessed everywhere
// }
// function greet(){
//     console.log(a);
//     let c =30;//can be accessed only inside the function
// }
// greet();
// //scope is of three types --- global and functional and block level scope
// //global can be accessed anywhere in the code 
// //function can be accessed only within the function
// //block can be accessed only to that block


// let global =30;
// function greet(){
//     let global =40;//no errors as this global is inside greet function
//     function meet(){
//         let global = 10;
//         console.log(global);//no error
//     }
//     meet();
// }
// greet();

// //agar kbhi andar vo function na ho toh pehle vo apne aas paas k block me vo variable dhundega jahan value dikhi print
// //LET supports global and functional but not block




// function createCounter(){
//     function increment(){
//         console.log("I'm increment function");
//     }
//     // increment();
//     return increment;//we returned the reference of increment .... [Function : increment]
//     // //so if we return something we need to store it somewhere
// }
// const count = createCounter();
// console.log(count); //it shows [Function : increment]
// count();

// // //UNDERSTANDING AND BREAKING THE CODE ....
// function createCounter() {
//     function increment() {
//         console.log("I'm increment function");
//     }
//     return increment; // ← returning the function ITSELF, not increment()
// }

// const count = createCounter(); // count now holds the increment function
// console.log(count);            // prints: [Function: increment]
// count();                       // NOW it executes → "I'm increment function"



function createCounter() {
    let count = 0; // private variable
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
//how is it possible that we can access count because that's outside of increment 
// I is possible because of CLOSURE as closure= a function that rememberrs variable from its outer scope even after the outer function hass finished executing