// // Array;
// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);//length of the array

// let arr = [100,30,"Rohit",true];//multiple type of data 
// console.log(arr[2]);
// console.log(typeof arr);

// // arr[1] = 90;
// // console.log(arr);

// // push : Insert element at end

// arr.push(90);
// arr.push("Strike");

// console.log(arr);

// // pop operation: Delete element from end
// arr.pop();
// console.log(arr);


// Starting add kar sakta hu

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // starting se delete kar sakta hu

// arr.shift();
// console.log(arr);
// // it is advised not to use shift and unshift because ek kko shift krne k liye bohut saare elements ko shift krna pdta h ...it can hamper performance

// let arr = [10,30,50,90,11];
// // ek ek krke array ki element ko print krna h
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// //other way to do the same
// for(let num of arr){
//     console.log(num);
// }


// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);
// //original array will also change because they(object) change by reference
// console.log(arr);
// Object(non primitive): Copy by reference hote hai
// Primitive: Copy by value

// const arr = [10,30,50,90,11]
// arr = [20,3,40]; //its not possible because array is already constant
// arr[2] = 30;
// console.log(arr);


// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// //this didn't change the original array
// const arr3 = arr.splice(1,3,"Rohit",19);//this changes the original array
// console.log(arr3);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// arr.push(arr2);
// console.log(arr);
// const arr4 = [90,4,false];

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// const arr3 = [arr,arr2,arr4];
// // this gives whole arrays together


// //spread operator
// // this takes out elements from all the arays and combine them together as a single array
// //It basically expands an array or object into individual elements.
// const arr3= [...arr,...arr2,...arr4];
// console.log(arr3);


// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// names.sort();
// console.log(names);//compares them on basis of ascii table
// names.reverse();
// console.log(names);

// const a = ["101","90","80","32","91"];
// a.sort();
// console.log(a);
// // it sees even number as characters 101 is listed before 90 because ascii code of 1 is less than 9

// const arr = [10,"Rohit","Mohan",true];
// arr.sort();
// console.log(arr);
// why the rule of ascii ? Because in js array contains data from all data type ...number, string, boolean etc..


// //custom sorting
// const arr = [10,40,31,71,5,11];
// arr.sort((a,b)=> a-b);
// // ascending order

// //descending order
// arr.sort((a,b)=> b-a);

// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31

// //-ve : pehle a aayega fr aayega
// //+ve: b aayega fr a aayge
// console.log(arr);


// //NESTED ARRAY
// const arr = [10,30,50,[40,90,[60,19,99],11], 80];
// console.log(arr[3][2][1]);
// const a = arr.flat(Infinity);
// //infinity means flatten all the array if we write 1 then it will flatten to 1 level
// console.log(a);



const a = [10,309,"Rohit",9.3, true];
a.name = "Moahn";
console.log(a);