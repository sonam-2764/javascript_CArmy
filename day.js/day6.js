// OBJECT

// key value
// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    "home address": "dwarka"
// }

// console.log(user);
// console.log(user["name"]);//stores it as a string so without double quotes it would be wrong
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(typeof user);
// CRUD operation: Create read update delete


// console.log(user.age);

//  update
// user.aadhar = 1234;
// user.amount = 5000;

// console.log(user);

// // delete
// delete user.emailId;
// console.log(user);


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// const user2 = user;
// user2.age = 90;

// console.log(user);// this will change the user data also since both of them are pointing to same data

// Important

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let keys in user){
//     console.log(keys, user[keys]);
// }

// user.keys user["name"] user["age"]


// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
// }

// for of loop array ke
// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

// console.log(Object.entries(user));//returns in form of an array
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'emailId', 'negi@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys, values);

// } // it gives the result but not in array form...destructing 


// const name = user.name;
// const age = user.age;

// object ko destructing karna
// const {name,age,amount} = user;
// const {name:userName,age:userAge} = user;

// const arr = [10,20,40,90,11];

// const [first,second]= arr;

// console.log(userName,userAge);
// console.log(first,second);



// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }
// user.greeting();

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }
// // the whole function after gereeting went in user 2 that will print user.name as rohit to avoid this we use this.name

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting(); //variable holds the return value
// console.log(va); // prints the return value



// //nested object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// } // object defined inside object address object is defined under user object
// console.log(user);

// //shallow copy
// const user2 = user; //this will point to same user and any change will be implemented in both
// const user2 = {...user};//this will create seperate copy and the change will be implemented in user2 only
// user2.name = "Mohan";
// user2.address.city = "Dwarka"; // this will again change both the user because of nested object

// console.log(user2);

// console.log(user.address.city);


// deep copy

// const user2 = structuredClone(user); // creates independent copy ...both are purely different from each other
// user2.address.city = "Dwarka";
// console.log(user);
// keY; String || Symbol
// // the value of key can be symbol or string


// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hello Ji"
// }
// console.log(user.["0"]);

// const arr = [10,20,30,40];
// //this is stored in this form object form
// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

console.log(user[sym]);