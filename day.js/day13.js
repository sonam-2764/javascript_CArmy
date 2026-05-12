// // EVENTS
 //let element = document.getElementById("first");
    
// //text changes when clicked with help of html
// function handleClick() {
//    lement.textContent = "I am Sonam";
// }

const element = document.getElementById("first");
// element.onclick = function handleClick(){
//     element.textContent = "Hii everyone";
// }
// element.onclick = function handleClick(){
//     element.textContent = "I am Sonam";//overrides the first one
// }

//these both will run without problem of overriding
element.addEventListener('click',() => {
    element.textContent = "Hii everyone";
})

element.addEventListener('dblclick', () => {
    element.style.backgroundColor = "pink";
})

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('click',handleClick);
}


parent.addEventListener('click',handleClick);





// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }




// //BUBBLING

//e is the object of events which stores many information
// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',()=>{
    //console.log(e.target); //exactly kaun sa element target hua tha ye bhi pta chl jayega
//    console.log("GrandParent is clicked");
// },truel)

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     // console.log(e);
//     // console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     // console.log(e);
//     // e.stopPropagation(); //stops bubbling
//     // console.log("child is clicked");
// })

// TRUE --capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up andar se bahar(Bubbling phase bolte hai, tab trigger kiya jaayega)

//capture phase
//target phase
//bublling phase
















// // CLAUDE ABOUT EVENT
// Events — the browser talking to your code
// An event is something that happens in the browser — a user clicks a button, presses a key, moves the mouse, submits a form. JavaScript lets you listen for these moments and run code when they occur.

// Think of it like a doorbell. The doorbell is wired up (addEventListener). Someone rings it (the event fires). You answer the door (your function runs).

// The 3 ways to handle events
// // 1. Inline HTML — avoid this, mixes JS into HTML
// <button onclick="doSomething()">Click</button>

// // 2. DOM property — only one handler per event
// btn.onclick = function() { console.log('clicked'); };

// // 3. addEventListener — the correct modern way
// btn.addEventListener('click', function() {
//   console.log('clicked');
// });
// addEventListener is preferred — it lets you attach multiple listeners to the same element and remove them later.





// //MOUSE EVENT TYPE
// Mouse event types
// click
// dblclick
// mousedown
// mouseup
// mouseover
// mouseout
// mousemove
//mouseenter
//mouseleave
// contextmenu
// const box = document.querySelector('#box');

// box.addEventListener('click',     () => log('clicked!'));
// box.addEventListener('dblclick',  () => log('double clicked!'));
// box.addEventListener('mouseover', () => log('mouse entered'));
// box.addEventListener('mouseout',  () => log('mouse left'));





// //KEYBOARD EVENT
// Keyboard event types
// keydown
// keyup
// keypress
// (deprecated)
// const input = document.querySelector('input');

// input.addEventListener('keydown', (e) => {
//   console.log('key pressed:', e.key);     // "a", "Enter", "ArrowUp"
//   console.log('keyCode:', e.keyCode);    // 65, 13, 38  (older)
//   console.log('ctrl held?', e.ctrlKey);  // true / false
// });

// input.addEventListener('keyup', (e) => {
//   // fires when key is released
// });
// Use keydown for detecting key combos (Ctrl+S). Use keyup for "finished typing" actions.

// Live demo — type here
// hii
// keyup: "i"
// keydown: "i" | ctrlKey: false
// keyup: "i"
// keydown: "i" | ctrlKey: false
// keyup: "h"

