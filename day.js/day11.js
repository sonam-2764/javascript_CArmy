//DOM : Document object model
// with the help of js we can change html file: js just converts the properties into an object making it easy to change things 

//browser creates-- windows --> Document --> html
//windows is a global object
//<h2 id="second"> It is coming on dhanteras</h2>
//it is stored as 
//const temp ={
// tagName:"h2",
// id:"second",
// textContent:"It is coming on dhanteras",
// }
//Suppose body has 2 elements or tags h1 and h2; it will create an object of body with all the properties then it will show children: and will create an array as number of tags can vary...--> children:[temp1, temp]; they are the object of each element




//Windows.document.getElementById("title");
//console.dir(document);
//this helps to create an object of an element
//Why had we used getElementById ?
//if not we had to traverse there like this
//document.documentElement.children[1].children[0].textContent = "Hello there";
//this is quite hectic so we use 
//const temp = doccument.getElementById("first");







































//CLAUDE TEACHING DOM
//SECTION 1 
// When your browser loads an HTML file, it converts it into a tree of objects called the DOM. JavaScript uses this tree to read, create, update, or delete parts of your webpage — all without reloading.
//very HTML element becomes a node in a tree structure
//the document or window.document is the main entry point in this tree
// Before you can change anything, you need to select it. Here are the main methods:


// By IDdocument.getElementById('myId')
// By classdocument.getElementsByClassName('myClass')
// By tagdocument.getElementsByTagName('p')
// CSS selectordocument.querySelector('.box')
// All matchesdocument.querySelectorAll('li')
// querySelector vs getElementById
// // getElementById — fastest, only for IDs
// const title = document.getElementById('title');

// // querySelector — flexible, uses CSS syntax
// const title2 = document.querySelector('#title');
// const btn    = document.querySelector('.btn');
// const first  = document.querySelector('ul li');
// Prefer querySelector for flexibility. Use getElementById when you need speed or clarity.


// Reading content
// // Get text inside an element
// el.innerText   // only visible text
// el.textContent // all text including hidden
// el.innerHTML   // text + HTML tags inside

// // Get/set an attribute
// el.getAttribute('href')
// el.setAttribute('href', 'https://example.com')

// // Get/set a CSS style
// el.style.color = 'red';
// el.style.fontSize = '20px';

