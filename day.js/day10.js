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





//MAPPING
const arr = [10,20,30,5,90,87];
const newArr=arr.map((num)=> num*2);


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=> ({name:product.name, price:product.price}));
// console.log(newProduct);


// const ans = products.map((product)=> ({name:product.name, price:product.price}))
// console.log(ans);


// reduce
// accumulator = sum =0, 
// accumulator = 1400
// [{item:"Bhindi",price:200},{item:'sonpapdi,price:40},{}]
// const totalPrice = products.reduce((accumulator,currenValue)=>{
//     if(currenValue.inStock)
//     return accumulator+currenValue.price;
//     else
//     return accumulator
// },0);

// console.log(totalPrice);


// Data structure: set

// const arr = [10,20,30,10,25,15,10,20];
// // console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);


// console.log(s1.has(23));
// s1.delete(10);
// s1.clear();
// console.log(s1);


// const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

// // const uniqueEmail = [...new Set(email)];
// // console.log(uniqueEmail);

// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }


// map;
const m1 = new Map([
    ["Rohit", 40],
    [2, "Rohit"],
    [true, 11],
    [[10,30,11], "Mohit"]
]);


m1.set({name:"Manish",age:20}, false);

// console.log(m1.size);

for(let [keys,value] of m1){
    console.log(keys, value);

}










//MAPPING CLAUDE
// A factory machine that takes in items on a conveyor belt and transforms each one, giving you a brand new box of transformed items.
// What it does
// Creates a new array by transforming every element. Original array is not changed. Same length in → same length out.


// const prices = [100, 200, 300];

// // Add 10% tax to every price
// const withTax = prices.map(price => price * 1.1);
// // withTax = [110, 220, 330]

// // Transform objects too!
// const products = [
//   { name: "shirt", price: 500 },
//   { name: "pants", price: 800 }
// ];
// const names = products.map(p => p.name);
// // names = ["shirt", "pants"]


// const nums = [1, 2, 3, 4, 5];
// const doubled = nums.map(n => n * 2);
// console.log(doubled);





//FILTER CLAUDE
// 🧠 Think of it like...
// A security guard at a club who lets in only people who pass the test. The ones who fail are removed — you get a shorter list back.
// What it does
// Creates a new array with only the elements that pass a test (return true). Array can get shorter — elements failing the test are removed.

// const marks = [35, 72, 48, 90, 28, 85];

// // Keep only students who passed (≥50)
// const passed = marks.filter(m => m >= 50);
// // passed = [72, 48? NO — 48 fails, 90, 85]
// // passed = [72, 90, 85]

// // Filter products by price
// const expensive = products.filter(p => p.price > 500);

// const ages = [14, 18, 21, 16, 25, 13];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);