//FUNCTION

// // //declaring function
//  function greeting(){
//     console.log("hello there, I am 20 years old");
//  }

//  // calling function
//  greeting();
  
//  //function is created for reusability
//  function addNumber(num1,num2){
//     const sum = num1 + num2;
//     console.log(sum);
//  }
//  addNumber(3,4); // 3 and 4 are arguments and num1 and num2 are parameters
//  addNumber(6,7);

//  greeting(); //calls the function and gives undefined in output because no return value is assigned 
// function greeting(){
//     console.log("hello there, I am 20 years old");
//     return 10;
//  }

// Suppose a function with variable parameters
// function addNumber(num1,num2,num3 = 0){
//     const sum = num1 + num2 + num3;
//     console.log(sum);
//  }
//  addNumber(3,4);
//  addNumber(6,7,8);
// //this ensures that when only 2 numbers are given take default value of 3rd number that is 0
 


// // REST OPERATOR
// // if we keep on increasing the arguments then how long will we change the parameter so we use rest operator
// // rest operator creates an array if 2 elements put then into array if 3 puts them into array and so on
// function addNumber(...num){
//     let sum =0;
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
//  }
//  addNumber(10,20,30);

// const arr = [10,20,30,40,50];
// // const [first,second] = arr; //destructuing of array 
// console.log(first,second);
// const [first,second,...num] = arr;//stores rest number in form of array 
// console.log(first,second, num); 
// const arr2 =[30,70,90,10];
// const ans = [...arr,...arr2];
// console.log(ans);
// //spread operators opens the array or object and rest operator helps in catching many individual values



// //FUNCTION : expression
// const addNumber = function(num1,num2){
//     return num1 + num2;
// }
// console.log(addNumber(3,4));

// //function declaration allows to call function before declaring whereas function expression doesn't allow to call function before declaring





// //ARROW FUNCTION
// // ()=>{}
// const addNumber = (num1,num2)=> {
//     console.log("Hello");
//     return num1 +num2;
// }
// console.log(addNumber(3,4));

// // if we are returning only one value
// const addNumber =(num1,num2) => num1+num2;
// console.log(addNumber(3,4));
// const sqaureNumber =(num) => num*num;
// console.log(squareNumber(6));
 
// //arrow single paremeter 
// // if we have single parameter no need of () or return or {}
// const sqaureNumber = num => num*num;
//  console.log(squareNumber(6));





