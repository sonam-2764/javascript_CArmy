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