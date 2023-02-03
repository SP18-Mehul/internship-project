// 01/02/2023


// Define A function

function myFunction(a, b) {
  return a * b;
}

//   Both ways of calling the function will give same output

myFunction(1, 2)
window.myFunction(1, 2)



// Sum of arguments

function sum(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;

  }
  return sum;
}
let x = sum(10, 20, 30);
console.log(x);


// Maximum Number in an array

function maxAll(a) {
  let max = -Infinity;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}
console.log(maxAll([10, 20, 40, 30, 80]));



// How to Call Function As Method

const myObject = {
  firstName: "A",
  lastName: "B",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();



// Call A function with Function Constructor

function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

const myObj = new myFunction("John", "Doe")
document.getElementById("demo").innerHTML = myObj.firstName;

// JAVASCRIPT Call() METHOD  (take the fullname of person 1 as we call person 1)


const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName: "hello",
  lastName: "world"
}

person.fullName.call(person1)



// JAVASCRIPT Call() METHOD  (take the fullname of person 2 as we call person 2)

onst person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName: "mehul",
  lastName: "bajaj"
}

person.fullName.call(person2)


// JAVASCRIPT APPLY METHOD


const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName: "mehul",
  lastName: "bajaj"
}

person.fullName.apply(person1, ["delhi", "india"]);



// Difference BTW APPLY METHOD AND CALL METHOD IS :

// The Apply() method takes an argument as an Array
// The Call() method takes an argumet as sequence seperated by commas






// 02/02/2023   (2ND FEBURARY)   




// Objects Define

const obj = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20
};

// CREATES AN EMPTY OBJECT AND THEN ADD 4 PROPERTIES

const person = {};

person.firstName = "mehul";
person.lastname = "bajaj";
person.age = 20;
person.gender = "male";

// x Will not create copy of person

const x = person;

// BUT IF WE CHANGE ANYTHING IN x OBJECT I WILL AUTOMATICALLY CHANGE IN PERSON OBJECT BECAUSE OBJECTS ARE MUTABLE

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
};

const x = person;
x.age = 30;


// OBJECT PROPERTIES   (We can write it in 2 ways)

person.firstName + "is" + person.age + "years old";
person[firstName] + "is" + person[age] + "yearsold";



// LOOP IN OBJECT (SYNTAX)

for (let variable in object) {

}

// CODE FOR LOOP

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
};

let txt = "";

for (let x in person) {
  txt = txt + person[x];
}

// DELETE A KEY IN OBJECT

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
};
delete person.age;


//  NESTED OBJECTS

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
  cars: {
    car1: "a",
    car2: "b",
    car3: "c"
  }
}

person.cars.car1;
person.cars[car1];
person[cars][cars1];



// NESTED ARRAYS AND OBJECTS

Let x = "";
const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
  cars: [
    { name: "a", models: ["1", "2", "3"] },
    { name: "b", models: ["4", "5", "6"] }
  ]
}

// LOOPS IN NESTED ARRAYS AND OBJECTS

for (let i in myObj.cars) {
  x += myObj.cars[i].name;
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

// BUILTIN METHOD (toUpperCase)


// CASE-1


let person = "mehul bajaj";
let x = person.toUpperCase();


// CASE-2


const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
  fullName: function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  }

};


// HOW TO DISPLAY JAVASCRIPT OBJECTS\

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
}

document.getElementById("demo").innerHTML = person;
document.getElementById("demo").innerHTML = person.name + "," + person.age;



// TO CONVERT OBJECTS INTO ARRAYS WE USE Object.values() property

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
}

const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;


// TO CONNVERT OBJECT INTO String

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: 20,
}

const myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

// JSON.stingfy WILL NOT WORK ON FUNCTIONS

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: function () {
    return 30;
  }
}

const myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;


// It can be fixed when you convert the age into string before stringify

const person = {
  firstName: "mehul",
  lastName: "bajaj",
  age: function () {
    return 30;
  }
}

person.age = person.age.toString();

const myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;


// WE CAN ALSO stringify ARRAYS

const arr = ["1", "2", "3", "4"];

let myString = JSON.stringify(arr);
documents.getElementById("demo").innerHTML = arr;


// OBJECT ACCESSORS (GETTERS)


const person = {
  firstName: "mehul",
  lastName: "bajaj",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};
document.getElementById("demo").innerHTML = person.lang;


// SETTERS


const person = {
  firstName: "mehul",
  lastName: "bajaj",
  language: "en",
  Set lang() {
    this.language = this.language.toUpperCase();
  }
};

person.lang = "en";
document.getElementById("demo").innerHTML = person.lang;

// OBJECT CONSTRUCTORS

const person = (first, last, age){
  this.firstName = first;
  this.lastname = last;
  this.age = age;
}


// ADDING A METHOD TO A CONSTRUCTOR

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// TO ITERATE OVER THE STRINGS WE USE for-of loop

for (const x of "mehul") {
  return x;
}






// JAVASCRIPT MAPS

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);


const fruits = new Map();

fruits.set(["apples",300]);
fruits.set("bananas", 150);
fruits.set("oranges", 250);

document.getElementById("demo").innerHTML=fruits.get("apples");

// RETURN A NUMBER OF ELEMENTS IN A MAP

fruits.size;

// REMOVES A MAP ELEMENT

fruits.delete("apples");

// Removes all the elements from the map

fruits.clear();

// RETURNS IF A KEY EXISTS IN A MAP OR NOT

fruits.has("apples");

fruits.delete("apples");
fruits.has("apples");

// TYPE OF MAPS ARE ALWAYS OBJECTS

typeof (fruits);

// CHECK THE TYPE OF OBJECT AT THE RUN TIME

fruits instanceof Map;



// STRING METHODS


// Returns the length of the string

let a="abcdef"
let str=a.length;

// String slice()

let str="mehul, bajaj, hello";
let txt=str.slice(5,10);
let txt=str.slice(-6,-12);

// A string is converted to upper case with toUpperCase()

let txt1="mehulbajaj";
let txt2=txt1.toUpperCas();



// A string is converted to lower case with toLowerCase()

let txt1="HELLOWORLD";
let txt2=txt1.toLowerCase();


// CONCAT==TO ADD TWO STRINGS TOGETHER

let txt1="hello";
let txt2="world";

let txt3=txt1.concat(txt2);



// ANOTHER WAY OF CONCATING TWO STRINGS

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");


 // Split on commas

text.split(",")


// Split on spaces


text.split(" ")


// Split on pipe


text.split("|")  



// With template literals, you can use both single and double quotes inside a string

let text = `He's in love with his "country"`;










