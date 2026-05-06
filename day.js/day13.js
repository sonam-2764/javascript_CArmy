// // EVENTS

//text changes when clicked
function handleClick() {
    let element = document.getElementById("first");
    element.textContent = "I am Sonam";
}









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





//MOUSE EVENT TYPE
// Mouse event types
// click
// dblclick
// mousedown
// mouseup
// mouseover
// mouseout
// mousemove
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







