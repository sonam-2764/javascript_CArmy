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