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



// function createCounter() {
//     let count = 0; // private variable
//     function increment() {
//         count++;
//         console.log(count);
//     }
//     return increment;
// }

// const counter = createCounter();
// //console.log(counter());
// counter(); // 1
// counter(); // 2
// counter(); // 3
// //how is it possible that we can access count because that's outside of increment 
// //It is possible because of CLOSURE as closure= a function that rememberrs variable from its outer scope even after the outer function hass finished executing



// //USECASE OF CLOSURE
// //let balance =500;
// // //suppose by mistake we change the balance becqause we have direct access of balance
// // balance +="Sonam";
// // console.log(balance);
// // //to solve this problem we create object restricting direct access

// let user = {
//     balance : 500,
//     deposit :function(amount){
//         if(typeof amount === "number" && amount >0){
//         console.log(this); //this - points out to the reference
//         this.balance += amount;
//         return this.balance;
//     }
// },
// //console.log(user.deposit(200));
    
// // //now this will not allow any string or else to change balance and it still has the access of balance as 
//         withdraw :function(amount){
//         if(typeof amount === "number" && amount >0 && this.balance >= amount){13455
//         this.balance -= amount;
//         return this.balance;
//     }
//         },
//         getBalance : function(){
//             return this.balance;
//         }
//     }

// user.balance = "sonam";
// console.log(user.getBalance());
// // this still creates problem 
// //we want ki user method ko access(function) ko access kr paye
// // balance: usko directly access nhi kr paye 



// // ACCIDENTAL CHANGES KO AVOID KRTA H FUNCTION K BAHAR SE KUCH CHANGE NHI KR SKTE
// function createBankAccount(){

//     let balance = 500;
//     return { //returns user ...shortcut to write instead of line 123 and 142 
//     //const user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }

//  //return user;
// }
// // now developer can't directly access balance

// const customer= createBankAccount();
// console.log(customer);
// //console.log(customer.getBalance(200));




// //HIGHER ORDER FUNCTION
// Higher Order Functions in JavaScript
// A Higher Order Function (HOF) is a function that either:

// Takes one or more functions as arguments, or
// Returns a function as its result
function double(value){
    return function execute(num){
        return num*value;
    }
}
// const n = double(20);
// console.log(n(5));
//above two lines and below 2 lines will produce the same result
 const n = double(20)(5);
 console.log(n); 