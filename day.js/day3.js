//number
// let a = 10;
// let b = 345.6821;
// let c = b.toFixed(2);//since b is number which is primitive data type and immutable when we use toFixed it doesn't change value it creates a new variable with the desired value....so we can store that in a new variable
// console.log(a);
// console.log(b.toFixed(2));//it only picks two decimal places as we set toFixed to 2
// console.log(typeof c);
// //toFixed returns string
// console.log(b.toPrecision(4));//it gives the given number of values....return type is string
// console.log(b.toString());//converts it purely in string

// let a = new Number(20);
// let b = new Number(20);
// console.log(a==b);//this will give false because they are treated as object

// let obj1 ={
//     name:"Rohit"
// }
// let obj2 ={
//     name:"mohit"
// }
// console.log(obj1==obj2);//this checks by reference they check whether they point to the same refernce 
// //in this case they both points to the different references 
// let obj2 = obj1;
// console.log(obj2 == obj1);//this will give true as now they both are pointing to the same reference

//console.log(Boolean({name:Rohit}));//this will give true as it doesn't check the value is empty or not it just checks whether the object is pointing something or not
//console.log(Boolean(null));//false because the object is pointing to null or nothing

//Non primitive : Reference based comparison
//Primitive : Value by comparison & copy by value


//INTRODUCTION TO MATH OBJECT
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.ceil(2.4));//take to upper value so gives 3
console.log(Math.floor(2.8));//takes to lower value so gives 2
console.log(Math.log10(100));