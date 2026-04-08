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

// //replacing substring
// console.log(str.replace("ode", "iam"));
// console.log(str.replaceAll("ode","iam"));//replaces eveywhere it see ode in entire string

// // trimming whitespaces
// // .trim()-----removes whitespace from both the begining and end of the string
// // .trimStart()//.trimEnd()-----removes whitespace from only the start or the end
// const user = "  Rohit  Negi ";
// console.log(user.trim());

// //split
// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" ")) //splits on the basis of space and returns the data in form of array
// console.log(names.split(","))


// //DATE AND TIME --- it takes time from our system
// const now = new Date();
// //question --how does js got access to my system time
// console.log(now);//it shows utc universal time coordinate
// console.log(now.toString());// according to indian standard time
// console.log(now.toISOString());
// console.log(now.toLocaleString());
// // Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());//it starts from 0 ...january is 0
// console.log(now.getHours());
// console.log(now.getSeconds());

// days: Mon-tue(1 based)//meaning starts from 1
// Month: 0 1// meaning starts from 0

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);
// console.log(now.toString());


// // Timestamp
// const now = Date.now();
// console.log(now); //prints time in milliseconds//utc time
// const dates = new Date(1759275037293);
// // console.log(dates.toString());
// const dates = new Date(0); //it shows ki miliseconds zero kb tha

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp
// //type this n console of a browser 
// const dates = new Date(1759275037293);
//dates
// then browser convers the utc time in milliseconds into IST and returns the indian time

