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

// Array.filtering = function(compare){
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