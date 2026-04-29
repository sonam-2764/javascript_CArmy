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










 













// ---

// **Q2 — Hoisting with Functions (Detailed)**

// When JS runs your file, **before executing any code**, it does a hoisting pass. Here's what JS actually sees:

// ```javascript
// // WHAT YOU WROTE
// greet();
// sayHi();

// function greet() {
//     console.log("Hello!");
// }

// var sayHi = function() {
//     console.log("Hi!");
// }
// ```

// ```javascript
// // WHAT JS ACTUALLY SEES AFTER HOISTING
// function greet() {        // ✅ fully hoisted - entire body moves up
//     console.log("Hello!");
// }
// var sayHi;                // ⚠️ only declaration hoisted, value is undefined

// greet();                  // ✅ works! function is fully available
// sayHi();                  // ❌ sayHi is undefined here, calling undefined() = TypeError

// sayHi = function() {      // assignment happens here, too late
//     console.log("Hi!");
// }
// ```

// **The rule is simple:**
// - `function declaration` → entire function hoisted ✅
// - `var functionName = function()` → only `var functionName` hoisted as `undefined` ❌

// **Interview one liner:**
// > "Function declarations are fully hoisted but function expressions are not — only the variable declaration is hoisted, not the assignment"

// ---

// **Q4 — Closure in Loop (Detailed)**

// ```javascript
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
// ```

// **Why it prints `3,3,3`:**

// Think of it this way — `var` creates ONE single `i` variable shared across the entire loop. The setTimeout callbacks don't execute immediately, they wait 1000ms. By that time the loop has already finished and `i` is `3`. All 3 callbacks look at the **same `i`** and see `3`.

// ```
// Loop runs:  i=0 → schedules callback
//             i=1 → schedules callback  
//             i=2 → schedules callback
//             i=3 → loop ends

// 1000ms later: all 3 callbacks wake up
//               all 3 look at i → i is 3
//               prints: 3, 3, 3
// ```

// ---

// **Fix 1 — Use `let`**
// ```javascript
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
// // prints 0, 1, 2 ✅
// ```
// `let` creates a **brand new `i` for each iteration**. Each callback captures its own private copy of `i`. Simple and clean — this is what you'd use in real code.

// ---

// **Fix 2 — IIFE (Immediately Invoked Function Expression)**
// ```javascript
// for (var i = 0; i < 3; i++) {
//     (function(j) {          // creates new scope, captures i as j
//         setTimeout(function() {
//             console.log(j); // j is private to this function call
//         }, 1000);
//     })(i);                  // immediately call with current i
// }
// // prints 0, 1, 2 ✅
// ```

// The IIFE creates a **new function scope on every iteration**. We pass `i` as argument `j`, so each iteration has its own `j` that doesn't change. This was the standard fix before `let` existed in ES6.

// ```
// Iteration 0: IIFE called with j=0, callback captures j=0
// Iteration 1: IIFE called with j=1, callback captures j=1
// Iteration 2: IIFE called with j=2, callback captures j=2

// 1000ms later: 
//   first callback  → j is 0 → prints 0
//   second callback → j is 1 → prints 1
//   third callback  → j is 2 → prints 2
// ```

// ---

// **The core concept connecting both fixes:**

// > Closures capture **variables**, not **values**. So if the variable changes, the closure sees the changed value. The fix is always to create a **new scope** so each closure gets its own private variable.

// This is one of the most asked JS interview questions ever. If someone asks you about the closure loop problem in an interview, walk them through all three versions — broken with `var`, fixed with `let`, fixed with IIFE. That answer alone will impress most interviewers. 🎯