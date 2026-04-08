// //String
// const str1 ="Rohit";
// const str2 ='Sonam';
// const day=18;
// const str3 =`Strike is coming on ${day}`;//learnt about this symbol in jonas course
// console.log(str1,str2,str3);

// const str = `Hello Coder army`;
// console.log(str.length);
// console.log(str[2]);

// str[2]="s";
// console.log(str);//ndoesn't change because string is primitive data type and that is immutable

// //CONVERSION TO UPPER CASE
// console.log(str.toUpperCase());
// console.log(str.toLoweCase());

// //FINDING SUBSTRING
// const str = `Hello Coder Army`;
// console.log(str.indexOf('Cer'));//it will return -1 ....-1 is returned when either the data isn't found or aren't together
// console.log(str.indexOf('Cod'));
// // cases issues like lowercase and uppercase may result in data not found so we first convert all the code in uppercase then continue
// //if anything is present in multiple places ...it will return the first index
// const str1 = `Hello Coder Army Coder`;
// console.log(str1.indexOf('Cod'));
// console.log(str1.lastIndexOf('Cod'));
// console.log(str1.includes('Cod'));

// //slice // cuts and extracts the part of the string
// console.log(str.slice(2,5));
// console.log(str.slice(2,7));
// console.log(str.slice(3));//cuts the strings from index 3 and gives that as output
// console.log(str.slice(-4));//cuts the string at last 4 position and gives that as output ...ulta dekhta h
// console.log(str.slice(-5,-2));

// //SUBSTRING //we can't mark -ve index
//const str = `Hello Coder Army Coder`;
// console.log(str.substring(2,5));


// //CONCATENATING STRINGS
// const a ="Sonam";
// const b = "Kumari";
// const c = a+" "+b;
// console.log(c);
// console.log(24+ "Sonam");//convets 24 to string and concatenate 24 and sonam
// console.log(24+"Sonam"+10);//similarly converts 24 and 10 to string
// console.log(24 + 30 +"Sonam");//adds 24 and 30 and convetrs their sum as string and concatenate them with sonam

//replacing substring
console.log(str.replace("ode", "iam"));
console.log(str.replaceAll("ode","iam"));//replaces eveywhere it see ode in entire string

