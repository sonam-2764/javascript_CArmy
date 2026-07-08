// PROMISES
// the promise object represents thee eventual completion(or failure) of an asynchronous operation and its resulting value

console.log("Hello world Start");

// const p1 = fetch("https://api.github.com/users");
// //console.log(p1);

// // //it only reads data  either if it is fulfilled or rejected
// // p1.then((response) => {
// //     console.log(response); //for converting it into js object write response.json()
// // })

// const p1 = fetch("https://api.github.com/users");
// const p2 = p1.then((response) => {
//     return response.json();
// })
// p2.then((response) => {
//     console.log(response);
// })

//promise is an object which has three stages : pending, fulfilled , reject

// //2nd method
fetch("https://api.github.com/users")
.then((response) => {
    console.log(response);
    if(!response.ok){
        throw new Error("Data is not present in server");
    }
    return response.json(); //display the data
})
.then((data)=> { // to call data
    //console.log(data);


    const parent = document.getElementById("first");

    for(let i =0; i<data.length;i++){
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "40 px";
    image.style.width = "40 px";

    parent.append(image);
    }
})
.catch((error) => {
    const parent = document.getElementById("first");
    parent.textContent = error.message;
})

//console.log("Hello world End");

//if server responds then promise is fulfilled but only if internet down,server down or DNS down them promise is rejected even if the program fails it is still fulfilled because server responded






// //json vs js object
// json - can't write keywords like undefined, function ; it is in string format; it is universal ie understands all language (C++, java etc)

//  const j1 = {
//     name : "Rohit",
//     address: "dwarka",
//  }

// //convert to json
//  const jsonFormat = JSON.stringify(j1);
//  console.log(jsonFormat);


// const jsonFormat = `{
//     "name": "rohit",
//     "age": 30,
//     "address": "dwarka"
// }`;// it is in string format

// //convert to js object
// const JsObject = JSON.parse(jsonFormat);



