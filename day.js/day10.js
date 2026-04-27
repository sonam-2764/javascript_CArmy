// //FOR EACH, FILTER, REDUCER, MAP, SET



// // FOR EACH
// const arr = [10,20,30,"Sonam",90];
// //for each is used to iterating an array
// arr.forEach((number) =>{
//     console.log(number);
// }) 


// const arr = [10,20,30,40,90];
// let sum =0;
// arr.forEach((number, index ,arr)=>{//this can take upto 3 parameter
//     console.log(number,index,arr);
// sum+=number;
// })
// console.log(sum);



// //FILTER : It is used to select specific elements from the array 
// const arr = [10,20,30,50,70];
// // arr.filter((number) => number >25); // this returns a new array
// const newArr = arr.filter((number) => number >25);
// console.log(newArr);

// arr.filtering = function(compare){
//     const ans =[];
//     for(let num of arr){//can write 'this' word in place of arr
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr=arr.filtering((num)=> num >25);
// console.log(newArr);



// // //REUSABLE METHOD WITH PROTOTYPE
// // // if we create a new array we won't be able to use the filtering property as it was custom method for that only
// // const a = [80,30,15,31,42,70]
// // const answer = a.filtering((num)=> num>25);
// // console.log(answer); //this will throw an error as it was a custom methid for that particular array
// // //to over come this we need to change the property of original array
// // //in line 29 instead of arr.filtering = function(compare) we write
// Array.prototype.filtering= function(compare){
//     const ans =[];
//     for(let num of arr){//can write 'this' word in place of arr
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }
// const newArr=arr.filtering((num)=> num >25);
// console.log(newArr);

// //now for any number of array no error