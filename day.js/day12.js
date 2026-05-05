//  //CRUD IN JS
//how to link js file with html
//in body <script src"./ file name"></script>
const newElement = document.createElement("h2");//returns an object
newElement.textContent = "Hii I am Sonam";
newElement.id = "second";
console.log(newElement);
//select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement('h3'); 
newElement2.textContent = "I am 2nd year student";
newElement2.id = "third";
//newElement2.className = "Student";
// newElement2.className = "Girl";
// //newElement2.className += "Girl"; // ab class ki naam Student Girl dikhegi
// // but if we want to assign both name to aa single class
newElement2.classList.add("Student");
newElement2.classList.add("Girl");
newElement2.classList.remove("Student");
console.log(newElement2);
newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";
element.before(newElement2);
element.before(newElement2.getAttribute("id"));
element.before(newElement2.getAttribute("class"));
element.before(newElement2.setAttribute("hello", "5"));


// const list = document.createElement("li");
// list.textContent = "Milk"
// const list2 = document.createElement("li");
// list2.textContent = "Cake"

// const list3 = document.createElement("li");
// list3.textContent = "Halwa"

// const list4 = document.createElement("li");
// list4.textContent = "Paneer"

// const unorderElement = document.getElementById("listing");

// unorderElement.append(list, list2);

// unorderElement.prepend(list3);

// unorderElement.children[1].after(list4);

const arr = ["Milk", "Halwa", "Paneer","tofu","Tea"];

const unorderElement = document.getElementById("listing");//select parent
const fragment = document.createDocumentFragment();
// array

for(let food of arr){
    const list = document.createElement("li");//create list
    list.textContent = food;
    fragment.append(list);
}
//pehle sb kuch fragment me chla gya
unorderElement.append(fragment);//ab sb ek baar me hi update ho gya

const s1 = document.getElementById("first");
s1.remove();//delete


const month = document.getElementById("ten");

// console.log(month.children);
const lister = document.createElement("li");
lister.textContent = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>";

// lister.innerHTML = "<img src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000'>"

month.prepend(lister);
// month.insertAdjacentElement("afterend",lister)








// //Claude

// //CREATE IN CRUD
// // Step 1: Create a new element
// const newDiv = document.createElement("div")

// // Step 2: Give it content
// newDiv.textContent = "I am a new div!"
// newDiv.innerHTML = "<strong>Bold text</strong>"

// // Step 3: Give it a class or id
// newDiv.className = "card"
// newDiv.id = "myDiv"

// // Step 4: Insert it into the page
// document.body.appendChild(newDiv)          // adds at the END of body
// document.body.prepend(newDiv)              // adds at the START
// document.getElementById("list").append(newDiv)  // inside a specific element

// You can also use insertAdjacentHTML for quick one-liners:
// jsdocument.getElementById("container").insertAdjacentHTML(
//   "beforeend",
//   "<li>New Item</li>"
// )






//READ in CRUD
// const heading = document.querySelector("h1")

// heading.textContent   // plain text inside the tag
// heading.innerHTML     // HTML inside the tag (including tags)
// heading.id            // the element's id attribute
// heading.className     // the element's class attribute
// heading.value         // for input fields — gets what the user typed

// // Getting attribute values
// heading.getAttribute("data-type")

// Reading user input from a form field
// const userInput = document.querySelector("#myInput").value
// console.log(userInput)  // whatever the user typed







// //UPDATE IN CRUD
// const para = document.querySelector("p")

// // Change text
// para.textContent = "Updated text!"

// // Change HTML inside
// para.innerHTML = "<em>Updated with emphasis!</em>"

// // Change a CSS class
// para.className = "newClass"
// para.classList.add("highlight")       // add a class
// para.classList.remove("highlight")    // remove a class
// para.classList.toggle("active")       // add if absent, remove if present

// // Change inline styles
// para.style.color = "red"
// para.style.fontSize = "20px"
// para.style.backgroundColor = "#f0f0f0"

// // Change attributes
// para.setAttribute("id", "newId")
// para.setAttribute("data-role", "admin")







// //DELETE in CRUD
// Method 1: Remove the element itself (modern, preferred)
// const item = document.querySelector(".card")
// item.remove()

// // Method 2: Remove a child from its parent (older method)
// const parent = document.querySelector("#list")
// const child = document.querySelector("#item1")
// parent.removeChild(child)

// // Method 3: Clear everything inside an element
// document.querySelector("#container").innerHTML = ""

















// CRUD on ul/ol with JavaScript
// Now this is where it gets powerful — adding, reading, updating and deleting <li> items using JS.
// CREATE — Add a new <li>
// jsconst ul = document.querySelector("ul")

// // Create a new li
// const newLi = document.createElement("li")
// newLi.textContent = "Grapes"

// // Add to end
// ul.appendChild(newLi)

// // Add to beginning
// ul.prepend(newLi)
// READ — Get items from the list
// jsconst ul = document.querySelector("ul")

// // Get ALL li items
// const items = ul.querySelectorAll("li")

// // Loop through them
// items.forEach((item, index) => {
//   console.log(index, item.textContent)
// })

// // Get specific li by index
// ul.children[0].textContent   // first item
// ul.children[1].textContent   // second item
// UPDATE — Change an <li>'s text
// jsconst items = document.querySelectorAll("li")

// // Change the second item (index 1)
// items[1].textContent = "New Text"
// DELETE — Remove an <li>
// jsconst items = document.querySelectorAll("li")

// // Remove specific item
// items[1].remove()

// // Remove all items (clear the list)
// document.querySelector("ul").innerHTML = ""

