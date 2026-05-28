// PROMISES
// the promise object represents thee eventual completion(or failure) of an asynchronous operation and its resulting value

console.log("Hello world Start");

const p1 = fetch("https://api.github.com/users");
//console.log(p1);

// //it only reads data  either if it is fulfilled or rejected
// p1.then((response) => {
//     console.log(response); //for converting it into js object write response.json()
// })

const p2 = p1.then((response) => {
    return response.json();
})
p2.then((response) => {
    console.log(response);
})

//promise is an object which has three stages : pending, fulfilled , reject





console.log("Hello world End");