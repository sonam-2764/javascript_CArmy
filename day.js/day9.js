// //CLOSURE
let a =10;
const b =20;
if(true){
    console.log(b);//can be accessed everywhere
}
function greet(){
    console.log(a);
    let c =30;//can be accessed only inside the function
}
greet();
//scope is of three types --- global and functional and block level scope
//global can be accessed anywhere in the code 
//function can be accessed only within the function
//block can be accessed only to that block
