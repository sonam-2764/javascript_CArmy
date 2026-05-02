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
newElement2.className = "Student";
newElement2.className = "Girl";
//the 2nd code over ride the 1st line and ab class name girl dikhega student gayab
console.log(newElement2);