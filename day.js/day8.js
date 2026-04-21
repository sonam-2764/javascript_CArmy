// //HOISTING
// code run --> execution context 
// 1.Memory allocation
// 2.Execution phase
// // even when a number is called these two phases again take place when a function is called 
//Primitive data in stack and rest in heap //memory allocation
//GEC: global execution context

//temporal dead zone(cannot be accessed without initialization)
//with let and const

//for var it shows undefined if called before initialization

//function works before execution phase because function code is already present as during memory allocation memory is allocated to function and function code is also presengt there

//const wale ke saath kuch bhi temporal dead zone me jayega

//hoisting in js is a behaviour of knowing about a variable or function's existence before executing the code ..How it treats the knowledge depends upon the keyword function,var,let or const.