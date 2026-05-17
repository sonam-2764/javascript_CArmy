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
// e.target.textContent = "T am clicked";
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










// Bubbling & Capturing — the big concept
// When you click a nested element, the event doesn't just fire on that element. It travels in two phases:

// Capturing phase — event travels DOWN the DOM tree (window → document → body → parent → child)
// Target phase — reaches the actual element you clicked
// Bubbling phase — event travels BACK UP (child → parent → body → document → window)

// By default, addEventListener listens in the bubbling phase. Pass true as a third argument to listen in the capturing phase.
// Bubbling (default) — fires on the way UP
// parent.addEventListener('click', handler);          // useCapture = false

// // Capturing — fires on the way DOWN
// parent.addEventListener('click', handler, true);    // useCapture = true

 



// // preventDefault — stops the BROWSER's default action
// // (link navigating, form submitting, checkbox checking)
// link.addEventListener('click', (e) => {
//   e.preventDefault(); // link won't go anywhere
// });

// // stopPropagation — stops the event from bubbling UP to parents
// btn.addEventListener('click', (e) => {
//   e.stopPropagation(); // parent's click listener won't fire
// });

// // stopImmediatePropagation — stops even OTHER listeners on the SAME element
// btn.addEventListener('click', (e) => {
//   e.stopImmediatePropagation();
// });




// 4. Event Delegation — the pro pattern
// Instead of adding a listener to every child element, add ONE listener to the parent. It works because of bubbling.
// js// ❌ Bad — 100 items = 100 listeners
// document.querySelectorAll('.item').forEach(item => {
//   item.addEventListener('click', handleClick);
// });

// // ✅ Good — 1 listener handles everything, even dynamically added items
// document.querySelector('#list').addEventListener('click', (e) => {
//   if (e.target.classList.contains('item')) {
//     handleClick(e);
//   }

//   // closest() is safer — works even if you click a child inside .item
//   const item = e.target.closest('.item');
//   if (item) handleClick(item);
// });
// This is why delegation is so powerful — dynamically added elements are automatically handled. Try it in the "Event delegation" tab above: add a new task and its delete button works immediately.





// 5. Removing event listeners
// js// You MUST use a named function to remove it
// function handleClick(e) {
//   console.log('clicked');
// }

// btn.addEventListener('click', handleClick);
// btn.removeEventListener('click', handleClick); // works!

// // ❌ This won't work — arrow functions create a new reference each time
// btn.removeEventListener('click', (e) => { ... }); // fails silently





// 6. The once option — fires only once
// jsbtn.addEventListener('click', handleClick, { once: true });
// // automatically removed after the first click



// //CHEATSHEET
//what you want                              How
// Listen for a click                       el.addEventListener('click', fn)
// Stop browser default                      e.preventDefault()
// Stop bubbling                             e.stopPropagation()
// What was actually clicked                 e.target
// Element with the listener                 e.currentTarget
// Listen in capture phase                  addEventListener('click', fn, true)
// Fire only once                           addEventListener('click', fn, { once: true })
// One listener for many children            Add listener to parent, check e.target