# Javascript-projects
# the upcoming pieces of code are just my own understanding and practical application to what I have learnt during my internship period, I hope it helps! you may take a piece by piece function and try it out 
JavaScript notes:
-created in 1995 and released in 1996, brenden eich? must be put in a HTML document and enclosed
in brackets of <script></script>. The script function can be put any where, in the example 
it was shown in the end. 

<script type="javascript" charset="utf-8">
    document.write("hello world this is my first document.write")
</script>

document.write("<h1>JavaScript Tutorial</h1>");

- the console.log() make us to log messages and check for errors and warnings when running 
the code. displays the message on the console

console.log("Hello from console!")

- To change the direction of the application in CSS:

<script src="app.js"> </script>

-Variables:(do not forget the semi-colon, becareful of extra spaces)
variable must start with a letter or underscore (_), or a dollar sign ($).
var x= 5;
var time = "six o'clock";

-comment
// This right here, is a comment!
alert("Beep! Alert box popping out!");
/* This multiple Line is going to tell you that
 This code is about to execute a message box! */
alert("Beep Boop! Alert box popping out!")

-Data types:
we can put a backslash behind the last quote to escape it, backslash the first and last 
quotation, before and after. The boolean true and flase are in lower case letters
var name = 'Jaune'

var isProcrastinating = false;
var isLearning = true;

- Math operators: 
no matter if the number is a text or a number in either both of them will be executed, the 
numbers will be written right next to each other. 

var x = 10 + 8;
var y = x + 30 + 83 + 1243;
document.write(y);
document.write(x);

var oldPrice = prompt("what is old price?");
var discount = 20/100*oldPrice;

there is post increment and pre increment, the post increment would hold the value of the 
assigned varibale or value but then the number would increment but the assigned varibale 
would be still hoolding the old value and the pre one is vice versa. 
another operator which is kinda different in JS:
=== is equivalent to equal value of having same type
!== is equivalent to not equal to the value of the same type 

x+=y is equivalent to x= x+y
x-=y is equivalent to x= x-y
x*=y is equivalent to x= x*y
x/=y is equivalent to x= x/y
x%=y is equivalent to x= x%y
multiple combination could be put together like  (x += y -=10)

var num = 10;
document.write(num == 7); ---> False

- logical or Boolean operators:
&& is equivalent to AND
|| is equivalent to OR
! is equivalent to NOT

-equivalent to if condition: 
age = prompt("enter your age")
var isAdult = (age < 18) ? "Too young": "Old Enough";
console.log(isAdult)

var numVolunteers = prompt("Enter number of volunteers:");
var remainder = (numVolunteers<25)? (25-numVolunteers): '0';
console.log(remainder);

-concatenation:
var mystring1 = "I am learning ";
var mystring2 = "JavaScript with Kportal.";
document.write(mystring1 + mystring2);

-If condition and alert:
var firstNum = 2;
var secondNum = 5;
if (firstNum < secondNum) {
    alert("JavaScript is easy to learn.");
}

-Prompting for input:
var days = prompt("Enter the day");

-else if: we need to write it like this(not like elif)

-switch statement: 
var day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}


- for loops:
var languages= ["python", "JavaScript", "php", "ruby"];
var i;
for (i = 0, len = languages.length, text = ""; i < len; i++) {
  text += languages[i] + "<br>";
}
document.write(text) 

*another code: 

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = prompt();
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);


- prompt, confirm, alert boxes: 

*this code to confirm: 
var learning = confirm("Are you paying attention to the class?");
if (learning == true) {
    alert("Good! Keep up the good work!");
} else {
    alert("Let's take a short break shall we?");
}

- OBJECTS:
var student = {
    name: "John",
    age: 16,
    hobby: "coding",
    dislikes: "sports"
};
var x = student.age; //dot notation
var y = student["age"]; //bracket notations
document.write(x);


- Adding methods to Objects:
const avenger = {
    FirstName : 'Tony',
    LastName: 'Stark',
    FullName: function(){
        return this.FirstName + " " + this.LastName;
    }
};

console.log(avenger.FullName());
console.log(avenger.FullName());


-creating new object:

const student = new Object();
student.name = 'Eric';
student.age = 12;


-Object constructors(they are the same): 

var student = {
    name: "John",
    age: 16, 
    hobby: "coding",
    dislikes: "sports"
};

function student(name,age,hobby, dislikes) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.dislikes = dislikes;
}
var student1 = new student("John", 16, "programming", "sports");

-another example: 

function student(name, age, hobby, dislikes) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.dislikes = dislikes;
}

var student1 = new student("John", 16, "programming", "sports");
var student2 = new student("Alice", 17, "gardening", "cooking");

document.write(student1.name);
document.write("<br>");
document.write(student2.name);
-challenging one:

function Shape(name, height, base) {
    this.name = name;
    this.height = height;
    this.base = base;
    this.calArea = function() {
        return this.height*this.base;
    };
}

var square= new Shape('rectangle', 15, 12);

console.log(square.calArea())


-constructors and objects in a nutshell:
//using object Literal 
var student = {
    name: 'Samuel'
}

console.log(student.name); // Samuel

//create an object
const student1 = student;

// changes the value
student1.name = 'Ben';

console.log(student1.name); // Ben

//using constructor function
function trainer(){
    this.name = 'Carl'
}

const trainer1 = new trainer();
const trainer2 = new trainer();

trainer1.age = 20;
//age property is unique to trainer1 object and is not available to traienr2

console.log(trainer1)
console.log(trainer2)



-Simple Object:

var Amy = {
    name: "Amy",
    age: 18
};
document.write(Amy.age);

- changing the attributes' property value:

function student(name, age) {
    this.name = name;
    this.age = age;
    this.nameChange = function (name) {
        this.name = name;
    }
}
var s = new student("John", 16);
document.write(s.name);
s.nameChange("Daniel"); //This will change the name in s
document.write(s.name);


- functions that servers a good example: 
function main() {
    var prodID = prompt('Enter the product id');
    var price = parseInt(prompt('Enter the price'), 10);

    var prod1 = new Product(prodID, price);
    var discount = parseInt(prompt('Enter the discount'), 10);

    document.write("Product ID: ID" + prod1.prodID + "</br>");
    document.write("Old price: RM" + prod1.price  + "</br>");
    document.write("Discount rate: " + discount  + "%</br>");
    prod1.changePrice(discount);
    document.write("Price after discount: RM" + prod1.price + "</br>");
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;
    this.changePrice = function(discount) {
        if (discount <= 100) {
            var percentages = 1-(discount * .01)
            var actualdiscount = this.price * percentages;
            this.price = actualdiscount;
            return this.price;
        }
        if (discount >= 100) {
            this.price = 0;
            return this.price;
        }
    }
}
main()

-Another example: 

const student = new Object();
student.firstName = "aaron";
student.lastName = "yan";
student.name = function() {
    return (this.firstName +" " + this.lastName).toUpperCase();
};
console.log(student.name());

-Another example: 
function person(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;
}
function bornYear() {
    return 2022 - this.age;
}
var p = new person("John", 17);
document.write(p.yearOfBirth());

-Another example:
function student(firstName, lastName, age) {
    this.firstname = firstName;
    this.lastName = lastName;
    this.age = age;
    this.name = fullName;
}

function 
fullName
() {
    return this.
firstName
 + 
this
.lastName;

-another example:
function main() {
    //get the initial amount and the interest percentage
    var amount = parseInt(prompt("Enter the amount"), 10);
    var yearPercent = parseInt(prompt("Percentage"), 10);
    var loan1 = new Loan(amount, yearPercent);

    //output to console
    console.log(loan1.yearIncome);
}

function Loan(amount, percent) {
    this.amount = amount;
    this.yearPercent = percent;
    this.yearIncome = calculate(amount, percent);
}

function calculate(amount, percent) {
    return(amount*percent/100);
}
main()

-How to know the length of the string:
var text = 'Hello Programmerzzzz'
var a = text.length
console.log(a)

- Arrays: 
JavaScript's Array is used to store multiple values in a single variable.
Three variables are required to store three lesson names as shown in the code below.

var lessons = new Array("science", "math", "english");

- changing and locating variables: 
var lessons = new Array("Science", "Math", "English"); 
var lesson = lessons[0]; // Science
lessons[1] = "Calculus"; //Changes the second element

-another example:
var lessons = new Array(3);
lessons[0] = "Science";
lessons[1] = "Mathmatics";
lessons[2] = "History";
document.write(lessons[1]);

-Getting the length: 
var lessons = ["Science", "Mathematics", "History", "English"];
document.write(lessons.length);

-concatting 2 arrays: 
var L1 = ["Science", "Mathematics"];
var L2 = ["History", "English"];
var lessons = L1.concat(L2);
document.write(lessons);

- another example: 
function main() {
    //take the number of passed levels
    var levels = parseInt(prompt('passed level:'),10);
    var points = new Array();
    var count = 0;
    while (count < levels) {
        var point = parseInt(prompt('Point Gained'),10);
        points[count] = point;
        count++;
    }
    console.log(points);
    //write the code to calculate the sum of points here
    var totalPoints = 0;
    for (var i =0, len= points.length; i< len; i++){
        totalPoints= points[i]+ totalPoints
    }
    console.log(totalPoints);
    document.write(totalPoints);
    }
    //output
main();


-Associative Arrays: (use indexes)
creating an object in the array named with a certain name and then we call it through its 
name. 
var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
document.write(person["name"]);

-Math Objects: 
document.write(Math.PI);
-Another example: 
function main() { 
    var r = parseInt(prompt(), 10);

//the output
console.log(calcCirc(r).toFixed(2));
}
//complete the function 
function calcCirc(radius){
    circumference= 2*Math.PI*radius;
    return circumference;
}
main()

- Important methods to bear in mind: 
abd(x) - returns the absolute value of x
acos(x) - returns the arccosine of x in radians
asin(x) - returns the arcsine of x, in radians
atan(x)-
ceil(x)- rounded upwards to the nearest integer
floor(x)-
cos(x)
sin(x)
exp(x)
log(x)
max(x,y,z) - returns the maximum highest value of the number
min(x,y,z)- return the number with the lowest value
random(x)- returns a random number between zero and 1
round(x)- returns the number into nearest integer
sqrt(x)- return the square root of x
pow(x,y) - returns the value of x to the power of y

-another example: 
function main() { 
    var year = parseInt(prompt(), 10)

    //the output
    console.log(calcCent(year));
} 

function calcCent(year) {
    //your code goes here
    century= 1 
    while (century!=0){
    if (year< century*100){
        return century
    } 
    else{
        century++;
    }
    }
}
// cal the main function here
main()

-another example of math: 
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

-setInterval: (the function is called without parethesis)
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 100000);
clearInterval(myAlert)

- Date Methods:
getFullYear() - get the year as a four digit number(yyyy)
getMonth()- get the month as a number (0-11)
getDate()- get the day as anumber(1-31)
getHours()- get the hour (0-23)
getMinutes()- get the minute(0-59)
getSeconds()- get the secondsO(0-59)
getMilliseconds()- get the milliseconds
getTime()- get the full time
getDay()- get the weekdays(0-6)
Date.now()- get the time now

-another example(becareful of the index number of the months)
function main() { 
    var year = parseInt(prompt(), 10); 
    var month = parseInt(prompt(), 10); 
    var day = parseInt(prompt(), 10);



console.log(getWeekDay(year,month, day));
} 
function getWeekDay(year, month, day) { 
    
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    r_month= month-1
    
    var d = new Date(year, r_month, day); 
    console.log(d)
    //complete the function
   day = names[d.getDay()]
   return day


-another example(take note of the innerHTML and getElementBy):
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Dates</h1>
<h2>The getDay() Method</h2>

<p>getDay() returns the day of the week (from 0 to 6) of a date.</p>

<p id="demo"></p>

<script>
const d = new Date("July 21, 1983 01:15:00");
let day = d.getDay()

document.getElementById("demo").innerHTML = day;
</script>

</body>
</html>

-Selecting Elements:

*Find element by id: document.getElementById(id)
*Find element by class: document.getElementsByClassName(name)
*Find elements by tag name: document.getElemenstByTagName(name)
*getElementsByTagName() similar to the getElementsByClassName()

//accessing the second element in the class.
array[1].innerHTML = "Hello";
example:

var elem = document.getElementById("test");
elem.innerHTML = "Hello Programmerzzz";

another example: 
var fix = document.
getElementsByClassName("help");
fix.innerHTML = "Kidocode";

- another example: 
<p> Good day programmerzzz! </P>
<p> Ready to learn Mathematics? </p>

<script>
var array = document.getElementsByTagName("p");
for ( var x = 0;  x < array.length; x++) {
    array[x].innerHTML = "Change!";
}
</script>

-important methods: 
element.childNodes - Returns an array from an element's child node.
element.firstChild - Returns the first child node from an element.
element.lastChild - Returrns the last child node from an element.
element.hasChildNodes - Returns a boolean if the specified element has any child nodes, true if there are any child nodes, otherwise false.
element.nextSibling - Returns next node that is at the same tree level.
element.previousSibling - Returns the previous node that is at the same tree level.
element.parentNode - Returns the parent node from an element.

-Changing attributes: 

<body>
        <a href="https://www.kidocode.com/">Click Here!</a>
</body>

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var change = document.getElementsByTagName('a');
    change[0].href = 'https://www.facebook.com/KidoCode/';
};

another example: 
var array = document.getElementsByTagName("
img");
for(var x=0; x < array.length; x++) {
  array[x].src= "KidoCode.jpg";
}

-Creating elements:
The code document.createElement() creates a new element node.
The code document.createTextNode() creates a new text node.

Let's take this scenario as an example, We first create a new text node, but this will not 
appear in the document unless you append it to an existing element. To achieve this, we have
 to use the method element.appendChild(), so it will add a new child node to an element as 
the last child node. Lastly, element.insertBefore(node1,node2) insertsnode1as a child 
beforenode2`. Let's take a look at the code below to get a better understanding, shall we?

Important example: 
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Amazing!");
    //adding the text to the paragraph
    p.appendChild(node);
    var div = document.getElementById("test");
    //adding the paragraph to the div
    div.appendChild(p);
};

-Another example: 
window.onload = function() {
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.removeChild(child);
};

-Another example: 
window.onload = function() {
    var p = document.createElement("p");
    var node = document.createTextNode("Boom switch!!!");
    p.appendChild(node);
    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};

- important example on creating animation: 

(note: the interesting thing in here that there is no for loop butit uses setInterval to
move every 0.2 seconds and checks up the conditions every time. actually it would go 
infinitely counting but the condition of pos is holding it back )

window.onload = function() {
    var pos = 0;
    //our box element
    var box = document.getElementById('box');
    var t = setInterval(move, 20);

    function move() {
        if (pos >= 100) {
            clearInterval(t);
        } else {
            pos += 1;
            box.style.left = pos+'px';
        }
    }
};


-important event handlers: 
Onclick - occurs when user clicks on an element 
Onload - occurs when an object has loaded
Onunload- occurs once page has unloaded (for <body>)
Onmouseover- occurs when the pointer is moved onto an element, or onto one of its children
Onmouseoue- occurs when user moves the mouse pointer out of the element, or out of its 
children
Onmousedown- occurs when user press a mouse button over an element 
Omouseup- occurs when user releases a mouse button over an element 
Onblur- occurs when an element lose focus 
Onfocus- occurs when element is focused
Onchange- occurs when the content of the form element, the selection, or checked state have 
been changed (for <input><keygen><select><textarea>)

-Simple exmaple: 
<body>
    <button onclick="show();">Click Me</button>
</body>
function show() {
    alert("Can you see me??");
}

-(note: There are events that can be triggered when a user enters or leaves the page, this 
can be done by using the event onload and onunload.  These can be useful when performing 
actions such as after the page is loaded. Furthermore, window.onload event can be used to 
execute the code once the page is fully loaded)

-(note: onchange event is commonly used on textboxes. The event handler will be called when
 he inside the textbox changes and focus is lost from the element.)

-(note: To attach an event handler to an element without overwriting its existing event
 handler, we can use the method addEventListenerr(),  This will allow us to add many event 
handlers to one element, we can also add many event handlers of the same type to one element.
. Examples such as two "click" events.)

-Event Propagation(concept of capturing and bubbling)

//Capturing propagation if it is true
x.addEventListener("click", testFunction, true); 

//Bubbling propagation if it is false
x.addEventListener("click", testFunction, false);

-image slider: (important example)
var images = [
    'https://kidocode-asset.s3-ap-southeast-1.amazonaws.com/hoc/assets/courses/a7f9706ca1.jpg',
    'https://kidocode-asset.s3-ap-southeast-1.amazonaws.com/hoc/assets/courses/e11c00ba7e.png',
    'https://kidocode-asset.s3-ap-southeast-1.amazonaws.com/hoc/assets/courses/03dae49b01.jpg'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

- important example: (the x in here is referred to the content in between <40>)
<p id='txt' onclick='test();'>40</p>
 <script> 
function test() {
     var x=document.getElementById('txt');
        var n = x.innerHTML;
        x.innerHTML = n/2; 
} 
</script>


-var vs let: 
1-calling var before definition would throw undefined but calling let before definition 
would throw an error
2-We can declare a variable again even if it has been defined previously in the same 
scope.We cannot declare a variable more than once if we defined that previously in the same 
scope.
3-it will only be effective inside a certian block like if or looping unless it is assigned
to another block or statement 
4- Variables defined using const have the same scope as variables declared with let.

5-Const variables, on the other hand, are immutable, meaning they cannot be reassigned.


-Really good way printing elements in lists: 
let arr = [1, 2, 3];
for (let k of arr) {
    console.log(k);
}

let obj = { name :"john",
age : 22, family : "smith" };

for (let v in obj) {

  console.log(v);

}

- another example to print: 
var arr = [10, 18, 99, 245];

arr.forEach(function(el){

    console.log(el * 2);

});

another example to print:
const arr = [10, 18, 99, 245];

arr.forEach(x =>{

    console.log(x * 2);

});


-another way of using a function:
const plus= (a , b) =>{
    let add = a + b;
    console.log(add);

}
plus(1,2)

- ECMA script 6 objects: (example)

let cactus= {
  height: 10,
  color: 'green',
  grow() {
     this.height += 5;
  }
};
cactus.grow();
console.log(cactus.height); //output will produce 15

-nice example: 
var i = 0;

var a = {
   [ 'noo' + ++i]: i,
   [ 'noo' + ++i]: i,
   [ 'noo' + ++i]: i
};
console.log(a)

- assign() method: (it will assign the duplicate attributes as the last object says and 
add the new attributes with its values)

let individual = {
   name : 'Andy' ,
   age : 20,
   sex : 'male'
};
let student = {
   name: ' Holly ',
  age : 21,
  xp : '2'
};
let newStudent = Object.assign({}, individual, student);
console.log(newStudent)

console.log(total)


-Destructing: ()
The destructuring assignment syntax is a JavaScript expression that allows you to extract 
values from arrays or properties from objects and store them in separate variables.

-simple example: 
let arr = [ ' 4 ', ' 5 ', ' 6'];

let [ four, five, six] = arr;

console.log(four);

console.log(five);

console.log(siz);

-another simple example: 
let w, x, y = 4, z=8

[ w, x = 6 ] =[2];   //w = 2, x = 6
[ y, z ] = [ z, y ];   // y = 8, z=4

-another simple example:
var a = { x : 55, y : true };
var { x : noo , k : car } = a

// console.log(x); // Error
console.log(noo)   // 55

var stf = { id : 34, name: "Arthur" };

let { id =9, age = 18 } = stf;

console.log(id); // 34
console.log(age); // 18
console.log(stf) // { id: 34, name: 'Arthur' }


-Rest and Spread 
- really good example::
(the whole idea ia all about whether the numbers transmitted are found in a certain array 
or not, if I am not mistaken the 'arr' in the function only represents the 'array')
function containsAll(arr) {
    //the k here starts from the next number of x 
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));


-another same example: (The argument ...nums is known as a rest parameter. It accepts all of 
the function's "additional" arguments.)

function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}

let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));


-Really important example: 
const numbers = [1, -1, 2, 3]
const sum = numbers.reduce(( acc, current) =>{
	return acc+ current
},0)
console.log(sum)


-important example: (null always come witht the 'apply' method whenever there is a list)


function myFunction(w, x, y, z) {
   console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));

- important example: (take note of the ... in there )
const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
};
let args = [1, 2, 3];
myFunction(...args, 4);


- to put an item inside the middle of the list: 
var arr = ["One", "Two", "Five"];   
arr.splice(2, 0, "Three");   
arr.splice(3, 0, "Four");   
console.log(arr); 

OR:---
let newArr = ['Three', 'Four']; 
let arr = ['One', 'Two', ...newArr, 'Five'];
console.log(arr);


-merging two objects in lists: 
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });
let mergedObj = merge (obj1, obj2); 
let mergedObj2 = merge ({}, obj1, obj2);
console.log(mergedObj)

-creating a lot of objects inside a class from an instructor: 

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
}
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 
console.log(square.height);
console.log(poster.height);

-perform calculation with the constructors: 
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
    get area() {
        return this.calcArea();
  }
    calcArea() {
       return this.height * this.width;
  }
}
const square = new Rectangle(5, 5);
console.log(square.area); 


-really important example: (using the static- in other words calling the class without the 
object)
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
  }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
  }
}
console.log(dx)
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log(Point.distance(p1, p2)); 


-Inheritence: 
class Unit {
    constructor(){
        this.command="Attack! ";
    }
  attack() {
      
    console.log(this.command);
    
  }
}

//inherit this class from Unit
class Gunner extends Unit{

    attack() {
        var unit= new Unit();
        
        console.log(this.command+"with a gun!")
        
  }
}
//inherit this class from Unit
class Sniper extends Unit {
    attack(){
        var unit= new Unit();
        
         console.log(this.command+ "with a sniper!")
        
    }
}

let gunner = new Gunner();
let sniper = new Sniper();

//calls

gunner.attack();
sniper.attack();
