// //EVENT LOOP
// What is the event loop?
// JavaScript is single-threaded — it can only do one thing at a time. But it never freezes waiting for slow things (network, timers, disk). The event loop is the mechanism that makes this possible.
// There are 5 key components:

// Call Stack — where your code actually runs. Functions get pushed on, and popped off when they return.
// Web APIs — browser-provided environment (setTimeout, fetch, DOM events). JS hands off slow work here.
// Callback Queue (Macrotask queue) — completed Web API callbacks wait here (setTimeout, setInterval, click handlers).
// Microtask Queue — higher-priority queue for Promise .then() callbacks and queueMicrotask().
// Event Loop — constantly checks: "Is the call stack empty? If yes, run all microtasks, then one macrotask."

// The golden rule: microtasks always run before the next macrotask.


// The rules of the event loop — memorize these
// Rule 1 — The call stack must be empty before any queue runs.
// Synchronous code always finishes first. No callback ever interrupts running code.
// Rule 2 — Microtasks run before macrotasks, every single time.
// After the stack empties, the event loop drains the entire microtask queue before picking even one macrotask.
// Rule 3 — Microtasks can queue more microtasks.
// If a .then() returns another promise, that .then is added to the microtask queue and runs before any macrotask. The queue must fully drain.
// Rule 4 — Each macrotask gets its own "turn".
// After one macrotask runs, the event loop checks for microtasks again before running the next macrotask.

// Microtask vs Macrotask — what goes where?
// Microtasks (high priority)                  Macrotasks (normal priority)
// Promise.then() / .catch() / .finally()      setTimeout()
// async/await (resumes)                       setInterval()
// queueMicrotask()                            DOM events (click, input, etc.)
// MutationObserver callbacks                  fetch response (macrotask wrapper)

// The classic "what's the output?" question
// jsconsole.log('1');

// setTimeout(() => console.log('2'), 0);

// Promise.resolve().then(() => console.log('3'));

// console.log('4');
// Walk through it: 1 logs (sync) → 2 queued as macrotask → 3 queued as microtask → 4 logs (sync) → stack empty → microtask 3 runs → macrotask 2 runs.
// Output: 1 → 4 → 3 → 2
// This exact question appears in almost every JS interview. Now you understand why.

// Why does this matter in real code?
// js// This can cause UI to freeze — heavy sync code blocks the stack
// for (let i = 0; i < 10_000_000; i++) { /* heavy work */ }

// // Fix: break into chunks using setTimeout to yield to the event loop
// function doChunk(i) {
//   // process chunk
//   if (i < 10_000_000) {
//     setTimeout(() => doChunk(i + 1000), 0); // yield between chunks
//   }
// }
// Understanding the event loop also explains why async/await doesn't actually make code run in parallel — it just frees the stack while waiting, so other code can run.